<template>
  <div class="col-span-2">
    <div class="flex flex-col flex-1 sticky top-28">
      <div
        class="
          font-bold
          text-green-700 text-2xl
          border-green-700 border-b-2
          text-center
          py-2
        "
      >
        Berita Terpopuler
      </div>
      <div class="flex flex-col mt-3 space-y-3">
        <div
          class="flex flex-row flex-auto space-x-2"
          v-for="(item, index) in posts"
          :key="index"
        >
          <div class="text-lg font-bold text-green-700">{{ index+1 }}.</div>
          <div class="relative">
            <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
              <div class="text-white text-sm py-2">
                <span
                  class="
                    bg-green-700
                    text-white
                    font-normal
                    px-2
                    py-1
                    rounded-lg
                    border-none
                  "
                  >{{ item.categories[0].name }}</span
                >
                | {{ item.date_format }}
              </div>
              <p class="font-medium text-white text-sm line-clamp-2">
                {{ item.title }}
              </p>
            </div>

            <div
              class="
                h-48
                w-full
                bg-gray-600
                absolute
                z-10
                rounded-xl
                border-none
                opacity-30
              "
            ></div>
            <img
              class="rounded-xl w-full h-48 align-middle border-none"
              :src="
                'https://www.ayosurabaya.com/images-surabaya/' +
                item.image.thumb
              "
              :alt="item.image.caption"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ssrRef } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    postHits: Array,
  },
  setup(props) {
    const posts = ssrRef([])

    onMounted(() => {
      for (let index = 0; index < props.postHits.length; index++) {
        posts.value.push(props.postHits[index].post)
      }

    })

    return {
      posts
    }
  },
})
</script>
