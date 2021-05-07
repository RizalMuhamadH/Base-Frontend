<template>
  <div class="container mx-auto relative">
    <div class="absolute z-10 w-full grid grid-cols-8 justify-items-stretch">
      <div class="w-full col-span-6 col-start-2">
        <headline-slider />
        <block-article />

        <div class="grid grid-cols-6 gap-2 mt-3">
          <editor-choice/>
        </div>
      </div>
    </div>

    <banner-right-left />

    <div class="w-full h-screen"></div>
    <div class="w-full h-screen"></div>
    <template v-if="isDev"> [ADSENSE PLACEHOLDER] </template>
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
import BannerRightLeft from '~/components/BannerRightLeft.vue'
import BlockArticle from '~/components/BlockArticle.vue'
import EditorChoice from '~/components/EditorChoice.vue'
import HeadlineSlider from '~/components/HeadlineSlider.vue'
// https://code.luasoftware.com/tutorials/nuxtjs/nuxtjs-manual-adsense-component/
export default {
  components: { HeadlineSlider, BannerRightLeft, BlockArticle, EditorChoice },
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
