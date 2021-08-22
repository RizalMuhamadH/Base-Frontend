<template>
  <div class="w-full relative">
    <div class="absolute z-10 top-0 w-full">
      <div class="container mx-auto grid grid-cols-8 justify-items-stretch">
        <div class="w-full col-span-6 col-start-2">
          <div class="xl:grid xl:grid-cols-6 flex gap-3 mt-3">
            <editor-choice :posts="editorChoice" />
            <recent-article :posts="category" :name="tag.name" />
            <popular-article :postHits="popular" />
          </div>
        </div>
      </div>

      <Footer />
    </div>

    <div class="container mx-auto">
      <banner-right-left />
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
  ref,
  useMeta,
  onMounted,
  useFetch,
  ssrRef,
  useContext,
} from '@nuxtjs/composition-api'
import { MeiliSearch } from 'meilisearch'
import EditorChoice from '~/components/EditorChoice.vue'
import Footer from '~/components/Footer.vue'
import PopularArticle from '~/components/PopularArticle.vue'
import RecentArticle from '~/components/RecentArticle.vue'

export default defineComponent({
  components: { PopularArticle, RecentArticle, EditorChoice, Footer },
  head:{},  
  setup() {
    const { route, params, $config, $nuxt, $moment } = useContext()
    const { meta, title } = useMeta()

    const editorChoice = ssrRef([])
    const popular = ssrRef([])
    const category = ssrRef([])
    const tag = ssrRef([])

    const offset = ref(0)

    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'wehealth.id',
    })

    const { fetch } = useFetch(async () => {
        console.log(route.value);
      await client
        .index('tag')
        .search('', {
          filters: 'slug = ' + route.value.params.slug,
        })
        .then((res) => {
            console.log(res)
          if (res.hits.length != 0) {
            tag.value = res.hits[0]
          }
            title.value = 'Tag '+tag.value.name

            meta.value = [
              {
                hid: 'description',
                name: 'description',
                content: tag.value.name,
              },
              { name: 'keywords', content: tag.value.name },
              { hid: 'og:title', name: 'og:title', content: 'Tag '+tag.value.name },
              {
                hid: 'og:url',
                name: 'og:url',
                content: process.env.baseUrl + route.value.fullPath,
              },
              {
                hid: 'og:image',
                name: 'og:image',
                content: '',
              },
              { hid: 'og:site_name', name: 'og:site_name', content: tag.value.name },
              {
                hid: 'og:description',
                name: 'og:description',
                content: tag.value.name,
              },
            ]
        //   }
        })
        .catch((err) => {
          console.log(err)
        })

      await client
        .index('post')
        .search('', {
          offset: offset.value,
          limit: 20,
          filters: 'status = PUBLISH',
          facetFilters:["tags_slug:"+route.value.params.slug],
          attributesToRetrieve: [
            'id',
            'title',
            'slug',
            'description',
            'feature_id',
            'category_id',
            'category_name',
            'user_id',
            'user',
            'status',
            'image',
            'created_at',
            'timestamp',
          ],
        })
        .then((result) => {
          category.value = result.hits

          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })

      await client
        .index('post')
        .search('', {
          limit: 5,
          filters: 'status = PUBLISH AND feature_id = 1',
          attributesToRetrieve: [
            'id',
            'title',
            'slug',
            'description',
            'feature_id',
            'category_id',
            'category_name',
            'user_id',
            'user',
            'status',
            'image',
            'created_at',
            'timestamp',
          ],
        })
        .then((result) => {
          editorChoice.value = result.hits

          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })

      await client
        .index('post-popular')
        .search('', {
          limit: 5,
          filters: 'period = ' + $moment().format('MMYYYY'),
        })
        .then((res) => {
          popular.value = res.hits
        })
        .catch((err) => {
          console.log(err)
        })
    })

    onMounted(() => {
      fetch()
    })

    return {
      editorChoice,
      popular,
      category,
      tag
    }
  },
})
</script>