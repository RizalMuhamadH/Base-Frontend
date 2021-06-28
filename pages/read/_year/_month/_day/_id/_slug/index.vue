<template>
  <div class="w-full">
    <div class="w-full relative">
      <div class="absolute z-10 top-0 w-full">
        <div class="container mx-auto grid grid-cols-8 justify-items-stretch">
          <div class="w-full col-span-6 col-start-2">
            <headline-slider />

            <div class="xl:grid xl:grid-cols-6 flex gap-3 mt-3">
              <div class="xl:grid xl:grid-cols-4 col-span-4 flex gap-3">
                <head-detail />

                <editor-choice />
                <body-content/>
              </div>
              <popular-article />
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
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-5267702858942303"
      data-ad-slot="2639233875"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
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
// https://code.luasoftware.com/tutorials/nuxtjs/nuxtjs-manual-adsense-component/
export default {
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
  },
  head: {
    script: [
      {
        hid: 'adsense',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        defer: true,
        'data-ad-client': 'ca-pub-5267702858942303',
        sync: true,
      },
    ],
  },
  data() {
    return {
      isDev: process.env.NODE_ENV !== 'production',
    }
  },
  mounted() {
    if (!this.isDev) {
      this.$nextTick(() => {
        try {
          // this is required for each ad slot (calling this once will only load 1 ad)
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error(error)
        }
      })
    }
  },
}
</script>
