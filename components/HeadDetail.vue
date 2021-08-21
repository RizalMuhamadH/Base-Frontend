<template>
  <div class="col-span-4 space-y-4">
    <breadcrumb :category="post.category_name" />
    <div class="text-3xl font-bold text-justify">
      {{ post.title }}
    </div>
    <div class="text-sm">
      {{ post.category_name }} | {{ $moment(post.created_at).format('dddd, D MMMM YYYY') }} |
      <span class="text-green-800 font-semibold">{{ post.author }}</span>
    </div>
    <img
      class="rounded-xl w-full border-none object-cover"
      :src="'https://www.ayosurabaya.com/images-surabaya/' + post.image.media.small"
      :alt="post.image.caption"
    />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Breadcrumb from './Breadcrumb.vue'
export default defineComponent({
  components: {
    Breadcrumb,
  },
  props: {
    post: Object,
  },
  setup(props) {},
})
</script>
