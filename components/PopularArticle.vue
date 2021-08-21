<template>
  <div class="col-span-2">
    <div class="flex flex-col flex-1 sticky top-16">
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
          v-for="(item, index) in postHits"
          :key="index"
        >
          <div class="text-lg font-bold text-green-700">{{ index + 1 }}.</div>
          <a
            :href="
              '/read/' +
              $moment(item.created_at).format('YYYY/MM/DD') +
              '/' +
              item.id +
              '/' +
              item.slug
            "
            class="text-lg font-bold hover:text-green-600"
          > {{ item.title }} </a>
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
      posts,
    }
  },
})
</script>
