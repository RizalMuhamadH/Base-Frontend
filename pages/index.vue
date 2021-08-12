<template>
  <div class="w-full">
    <div class="w-full relative">
      <div class="absolute z-10 top-0 w-full">
        <div class="container mx-auto grid grid-cols-8 justify-items-stretch">
          <div class="w-full col-span-6 col-start-2">
            <headline-slider :posts="mustRead" />
            <block-article :posts="block" />

            <div class="xl:grid xl:grid-cols-6 flex gap-3 mt-3">
              <editor-choice :posts="editorChoice" />
              <recent-article :posts="recent" />
              <popular-article :postHits="popular" />
            </div>

            <category-headline :names="['Nasional', 'Internasional']" :categories="[category1, category2]" />
          </div>
        </div>

        <div class="w-full h-full bg-gray-800">
          <div class="container mx-auto grid grid-cols-8">
            <article-slider :name="'Netizen'" :posts="netizen" />
            <!-- <gallery /> -->
          </div>
          <div class="container mx-auto grid grid-cols-8">
            <gallery :videos="videos" :photos="photos"  />
          </div>
        </div>
        <div class="container mx-auto grid grid-cols-8">
          <!-- <category :name="'Hot News'" :posts="category" /> -->
          <membership />
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
} from '@nuxtjs/composition-api'
import axios from 'axios'
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
    const block = ssrRef([]);
    const mustRead = ssrRef([]);
    const editorChoice = ssrRef([]);
    const recent = ssrRef([]);
    const popular = ssrRef([]);
    const category = ssrRef([]);
    const category1 = ssrRef([]);
    const category2 = ssrRef([]);
    const netizen = ssrRef([]);
    const photos = ssrRef([]);
    const videos = ssrRef([]);
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

    const { fetch } = useFetch(async () => {
      await axios
        .get(process.env.API_URL+'recent/0/5')
        .then((result) => {
          block.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      
      await axios
        .get(process.env.API_URL+'feature/4/0/5')
        .then((result) => {
          mustRead.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'feature/2/0/5')
        .then((result) => {
          editorChoice.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'recent/0/10')
        .then((result) => {
          recent.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'popular/0/4/90')
        .then((result) => {
          popular.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'recent/19/5')
        .then((result) => {
          let data = result.data.data
          category.value = {
            main: data.splice(0, 1),
            list: data
          }
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'recent/2/5')
        .then((result) => {
          let data = result.data.data
          category1.value = {
            main: data.splice(0, 1),
            list: data
          }
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'recent/3/5')
        .then((result) => {
          let data = result.data.data
          category2.value = {
            main: data.splice(0, 1),
            list: data
          }
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'recent/10/5')
        .then((result) => {
          netizen.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'video/recent/5')
        .then((result) => {
          let data = result.data.data
          videos.value = {
            main: data.splice(0, 1),
            list: data
          }
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
        .get(process.env.API_URL+'photo/recent/5')
        .then((result) => {
          let data = result.data.data
          photos.value = {
            main: data.splice(0, 1),
            list: data
          }
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
      category2
    }
  },
})
</script>
