<template>
  <div class="w-full">
    <div class="w-full relative">
      <div class="absolute z-10 top-0 w-full">
        <div class="container mx-auto grid grid-cols-8 justify-items-stretch">
          <div class="w-full col-span-6 col-start-2">
            <!-- <headline-slider :posts="mustRead" /> -->

            <div class="xl:grid xl:grid-cols-6 flex gap-3 mt-3">
              <div class="xl:grid xl:grid-cols-4 col-span-4 flex gap-3">
                <head-detail :post="post" />

                <editor-choice :posts="editorChoice" />
                <body-content :post="post" :related="related" />
              </div>
              <popular-article :postHits="popular" />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <div class="container mx-auto">
        <banner-right-left />
      </div>

      <!-- <div class="w-full h-screen"></div>
    <div class="w-full h-screen"></div> -->
    </div>
    <!-- <template v-if="isDev"> [ADSENSE PLACEHOLDER] </template> -->
    <!-- <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-5267702858942303"
      data-ad-slot="2639233875"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins> -->
  </div>
</template>

<script>
import ArticleSlider from '~/components/ArticleSlider.vue'
import BannerRightLeft from '~/components/BannerRightLeft.vue'
import CategoryHeadline from '~/components/CategoryHeadline.vue'
import EditorChoice from '~/components/EditorChoice.vue'
import HeadlineSlider from '~/components/HeadlineSlider.vue'
import PopularArticle from '~/components/PopularArticle.vue'
import Footer from '~/components/Footer.vue'
import HeadDetail from '~/components/HeadDetail.vue'
import BodyContent from '~/components/BodyContent.vue'
import {
  defineComponent,
  ref,
  ssrRef,
  useFetch,
  onMounted,
  useContext,
  useMeta,
} from '@nuxtjs/composition-api'
import axios from 'axios'
import RelatedArticle from '~/components/RelatedArticle.vue'
import { MeiliSearch } from 'meilisearch'
// https://code.luasoftware.com/tutorials/nuxtjs/nuxtjs-manual-adsense-component/
export default defineComponent({
  components: {
    HeadlineSlider,
    BannerRightLeft,
    EditorChoice,
    PopularArticle,
    CategoryHeadline,
    ArticleSlider,
    Footer,
    HeadDetail,
    BodyContent,
    RelatedArticle,
  },
  head: {
    // script: [
    //   {
    //     hid: 'adsense',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //     defer: true,
    //     'data-ad-client': 'ca-pub-5267702858942303',
    //     sync: true,
    //   },
    // ],
  },
  setup(props) {
    const { route, params, $config, $nuxt, $moment } = useContext()
    const { meta, title } = useMeta()

    const isDev = ref(process.env.NODE_ENV !== 'production')

    const mustRead = ssrRef([])
    const editorChoice = ssrRef([])
    const popular = ssrRef([])
    const post = ssrRef({})
    const image = ssrRef({})
    const related = ssrRef([])

    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'wehealth.id',
    })

    const { fetch } = useFetch(async () => {
      // $nuxt.$loading.start()

      await client
        .index('post')
        .search('', {
          limit: 5,
          filters: 'status = PUBLISH AND feature_id = 2',
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
        .index('post')
        .getDocument(params.value.id)
        .then(async (result) => {
          console.log(result.title)
          post.value = result
          image.value = result.image
          title.value = result.title
          meta.value = [
            {
              hid: 'description',
              name: 'description',
              content: post.value.meta_description || post.value.description,
            },
            { name: 'keywords', content: post.value.meta_keyword || '' },
            { hid: 'og:title', name: 'og:title', content: post.value.title },
            {
              hid: 'og:url',
              name: 'og:url',
              content: process.env.baseUrl + route.value.fullPath,
            },
            {
              hid: 'og:image',
              name: 'og:image',
              content: process.env.STORAGE_URL + image.value.media.original,
            },
            { hid: 'og:site_name', name: 'og:site_name', content: '' },
            {
              hid: 'og:description',
              name: 'og:description',
              content: post.value.meta_description || post.value.description,
            },
          ]

          const getPopular = await client
            .index('post-popular')
            .search('', { filters: 'id = ' + params.value.id })

          let data = {
            id: result.id,
            title: result.title,
            slug: result.slug,
            created_at: result.created_at,
            period: $moment().format('MMYYYY'),
            hit: getPopular.hits.length == 0 ? 1 : getPopular.hits[0].hit + 1,
          }
          if (getPopular.hits.length == 0) {
            console.log(0)
            await client.index('post-popular').addDocuments([data])
          } else {
            console.log(1)
            await client.index('post-popular').updateDocuments([data])
          }
        })
        .catch((err) => {
          console.log(err)
        })

      await client.index('post-popular').search('', {limit: 5, filters: 'period = '+ $moment().format('MMYYYY')}).then((res) => {
        popular.value = res.hits
      }).catch((err) => {
        console.log(err);
      })

      // $nuxt.$loading.finish()
    })

    onMounted(async () => {
      fetch()

      if (!isDev.value) {
        this.$nextTick(() => {
          try {
            // this is required for each ad slot (calling this once will only load 1 ad)
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
          } catch (error) {
            console.error(error)
          }
        })
      }
    })

    return {
      mustRead,
      editorChoice,
      popular,
      isDev,
      post,
      related,
    }
  },
})
</script>
