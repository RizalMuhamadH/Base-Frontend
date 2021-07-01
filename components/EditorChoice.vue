<template>
  <div class="col-span-1">
    <div class="flex flex-col flex-1 sticky top-28">
      <div
        class="
          font-bold
          text-yellow-500 text-2xl
          border-yellow-500 border-b-2
          text-center
          py-2
        "
      >
        Editor Choice
      </div>
      <div class="divide-y divide-yellow-500 mt-3 flex-none">
        <div
          class="flex flex-col py-3"
          v-for="(item, index) in posts"
          :key="index"
        >
          <img
            :src="
              'https://www.ayosurabaya.com/images-surabaya/' + item.image.thumb
            "
            :alt="item.image.caption"
            class="shadow rounded w-full h-40 align-middle border-none object-cover"
          />
          <div class="text-black text-xs py-2">
            <span class="text-green-700 font-bold">{{ item.categories[0].name }}</span> | {{ item.date_format }}
          </div>
          <p class="font-medium text-black text-sm">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    posts: Array,
  },
})
</script>
