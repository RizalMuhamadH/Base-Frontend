<template>
  <div class="w-full">
    <div class="w-full relative">
      <div class="absolute z-10 top-0 w-full">
        <div class="container mx-auto grid grid-cols-8 justify-items-stretch">
          <div class="w-full col-span-6 col-start-2">
            <!-- <headline-slider :posts="mustRead" /> -->
            <block-article :posts="block" />

            <div class="xl:grid xl:grid-cols-6 flex gap-3 mt-3">
              <editor-choice :posts="editorChoice" />
              <recent-article :posts="recent" :name="'Terbaru'" />
              <popular-article :postHits="popular" />
            </div>

            <!-- <category-headline :names="['Nasional', 'Internasional']" :categories="[category1, category2]" /> -->
          </div>
        </div>

        <div class="w-full h-full bg-gray-800">
          <div class="container mx-auto grid grid-cols-8 my-8">
            <article-slider :name="'Netizen'" :posts="netizen" />
            <!-- <gallery /> -->
          </div>
          <div class="container mx-auto grid grid-cols-8">
            <!-- <gallery :videos="videos" :photos="photos"  /> -->
          </div>
        </div>
        <div class="container mx-auto grid grid-cols-8">
          <category :name="'Hot News'" :posts="category" />
          <!-- <membership /> -->
        </div>

        <Footer />
      </div>

      <div class="container mx-auto">
        <banner-right-left />
      </div>

    </div>
  </div>
</template>

<script>
import ArticleSlider from '~/components/ArticleSlider.vue'
import BannerRightLeft from '~/components/BannerRightLeft.vue'
import BlockArticle from '~/components/BlockArticle.vue'
import Category from '~/components/Category.vue'
import CategoryHeadline from '~/components/CategoryHeadline.vue'
import EditorChoice from '~/components/EditorChoice.vue'
import Gallery from '~/components/Gallery.vue'
import HeadlineSlider from '~/components/HeadlineSlider.vue'
import Membership from '~/components/Membership.vue'
import PopularArticle from '~/components/PopularArticle.vue'
import RecentArticle from '~/components/RecentArticle.vue'
import Footer from '~/components/Footer.vue'
import {
  defineComponent,
  ref,
  useMeta,
  onMounted,
  useFetch,
  ssrRef,
  useContext
} from '@nuxtjs/composition-api'
import axios from 'axios'
import { MeiliSearch } from 'meilisearch'
// https://code.luasoftware.com/tutorials/nuxtjs/nuxtjs-manual-adsense-component/
export default defineComponent({
  components: {
    HeadlineSlider,
    BannerRightLeft,
    BlockArticle,
    EditorChoice,
    RecentArticle,
    PopularArticle,
    CategoryHeadline,
    ArticleSlider,
    Gallery,
    Category,
    Membership,
    Footer,
  },
  head: {},
  setup() {
    const block = ssrRef([])
    const mustRead = ssrRef([])
    const editorChoice = ssrRef([])
    const recent = ssrRef([])
    const popular = ssrRef([])
    const category = ssrRef([])
    const category1 = ssrRef([])
    const category2 = ssrRef([])
    const netizen = ssrRef([])
    const photos = ssrRef([])
    const videos = ssrRef([])
    
    const { $moment } = useContext()
    // useMeta({
    //   title: 'Home',
    //   script: [
    //     {
    //       hid: 'adsense',
    //       src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //       defer: true,
    //       'data-ad-client': 'ca-pub-5267702858942303',
    //       sync: true,
    //     },
    //   ],
    // })

    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'wehealth.id',
    })

    const { fetch } = useFetch(async () => {
      await client
        .index('post')
        .search('', {
          limit: 20,
          filters: 'status = PUBLISH',
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
          mustRead.value = result.hits
          recent.value = result.hits

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
          block.value = result.hits
          editorChoice.value = result.hits
          netizen.value = result.hits
          let data = result.hits
          category.value = {
            main: data.splice(0, 1),
            list: data,
          }

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

    const isDev = ref(process.env.NODE_ENV !== 'production')

    onMounted(() => {
      fetch()
      // getHeadline()
      if (!isDev) {
        // this.$nextTick(() => {
        //   try {
        //     // this is required for each ad slot (calling this once will only load 1 ad)
        //     ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        //   } catch (error) {
        //     console.error(error)
        //   }
        // })
      }
    })

    return {
      block,
      mustRead,
      editorChoice,
      recent,
      popular,
      netizen,
      videos,
      photos,
      category,
      category1,
      category2,
    }
  },
})
</script>
