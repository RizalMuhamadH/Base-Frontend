<template>
  <div class="col-span-1">
    <div class="flex flex-col flex-1 sticky top-16">
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
        <a :href="
              '/read/' +
              $moment(item.created_at).format('YYYY/MM/DD') +
              '/' +
              item.id +
              '/' +
              item.slug
            "
          class="flex flex-col py-3"
          v-for="(item, index) in posts"
          :key="index"
        >
          <img
            :src="
              storage + item.image.media.cropped
            "
            :alt="item.image.caption"
            class="shadow rounded w-full h-40 align-middle border-none object-cover"
          />
          <div class="text-black text-xs py-2">
            <span class="text-green-700 font-bold">{{ item.category_name }}</span> | {{ $moment(item.created_at).fromNow() }}
          </div>
          <p class="font-medium text-black text-sm">
            {{ item.title }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ssrRef } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    posts: Array,
  },
  setup(props) {
    
    const storage = ssrRef(process.env.STORAGE_URL)

    return {
      storage
    }
  }
})
</script>
