<template>
  <div class="w-full mt-10 col-span-6 col-start-2">
    <div class="flex justify-between w-full space-x-4 border-b py-3">
      <div class="text-3xl text-green-700 font-bold">{{ name }}</div>
      <div class="text-green-700 cursor-pointer">
        <a href="#">selengkapnya</a>
      </div>
    </div>
    <div class="w-full my-4 flex">
      <div class="flex flex-col w-3/5">
        <div class="relative w-full h-full">
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">
              {{ posts.main[0].date_format }}
            </div>
            <p class="font-medium text-white text-2xl line-clamp-2">
              {{ posts.main[0].title }}
            </p>
          </div>

          <div
            class="
              w-full
              h-full
              bg-gray-600
              absolute
              z-10
              rounded-xl
              border-none
              opacity-30
            "
          ></div>
          <img
            class="
              rounded-xl
              h-full
              w-full
              align-middle
              border-none
              object-cover
            "
            :src="
              'https://www.ayosurabaya.com/images-surabaya/' +
              posts.main[0].image.thumb
            "
            :alt="posts.main[0].image.caption"
          />
        </div>
      </div>

      <div class="flex flex-col w-2/5 pl-5 divide-y divide-gray-500 space-y-5">
        <div
          class="w-full flex pt-5"
          v-for="(item, index) in posts.list"
          :key="index"
        >
          <img
            class="rounded-xl w-52 h-32 border-none object-cover"
            :src="
              'https://www.ayosurabaya.com/images-surabaya/' + item.image.thumb
            "
            :alt="item.image.caption"
          />

          <div class="flex flex-col px-3 py-3">
            <div class="text-sm py-2">{{ item.date_format }}</div>
            <p class="font-medium text-base line-clamp-3">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: String,
    posts: Object,
  },
})
</script>
