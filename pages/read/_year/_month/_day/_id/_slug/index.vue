<template>
  <div class="w-full">
    <div class="w-full relative">
      <div class="absolute z-10 top-0 w-full">
        <div class="container mx-auto grid grid-cols-8 justify-items-stretch">
          <div class="w-full col-span-6 col-start-2">
            <headline-slider :posts="mustRead" />

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
    const { route, params } = useContext()
    const { meta, title } = useMeta()

    const isDev = ref(process.env.NODE_ENV !== 'production')

    const mustRead = ssrRef([])
    const editorChoice = ssrRef([])
    const popular = ssrRef([])
    const post = ssrRef({})
    const image = ssrRef({})
    const related = ssrRef([])

    const { fetch } = useFetch(async () => {
      await axios
        .get('http://127.0.0.1:8000/api/feature/4/0/5')
        .then((result) => {
          mustRead.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get('http://127.0.0.1:8000/api/feature/2/0/5')
        .then((result) => {
          editorChoice.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get('http://127.0.0.1:8000/api/popular/0/4/90')
        .then((result) => {
          popular.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get('http://127.0.0.1:8000/api/article/' + params.value.id)
        .then((result) => {
          post.value = result.data.data.post
          image.value = result.data.data.post.image
          related.value = result.data.data.related
          title.value = post.value.title
          meta.value = [
            {
              hid: 'description',
              name: 'description',
              content: post.value.summary,
            },
            { name: 'keywords', content: post.value.keyword },
            { hid: 'og:title', name: 'og:title', content: post.value.title },
            { hid: 'og:url', name: 'og:url', content: process.env.baseUrl+route.value.fullPath },
            { hid: 'og:image', name: 'og:image', content: process.env.STORAGE_URL+image.value.thumb },
            { hid: 'og:site_name', name: 'og:site_name', content: '' },
            {
              hid: 'og:description',
              name: 'og:description',
              content: post.value.summary,
            },
          ]
        })
        .catch((err) => {
          console.log(err)
        })
    })

    // useMeta({
    //   title: post.value.title,
    //   meta: [
    //     {
    //       hid: 'description',
    //       name: 'description',
    //       content: post.value.summary,
    //     },
    //     { name: 'keywords', content: post.value.keyword },
    //     { hid: 'og:title', name: 'og:title', content: post.value.title },
    //     { hid: 'og:url', name: 'og:url', content: route.fullPath },
    //     { hid: 'og:image', name: 'og:image', content: image.value.thumb },
    //     { hid: 'og:site_name', name: 'og:site_name', content: '' },
    //     {
    //       hid: 'og:description',
    //       name: 'og:description',
    //       content: post.value.summary,
    //     },
    //   ],
    // })

    onMounted(() => {
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
