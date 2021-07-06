<template>
  <div class="col-span-4 space-y-4">
    <breadcrumb :category="post.categories[0]" />
    <div class="text-3xl font-bold text-justify">
      {{ post.title }}
    </div>
    <div class="text-sm">
      {{ post.categories[0].name }} | {{ post.date_format }} WIB |
      <span class="text-green-800 font-semibold">{{ post.author.name }}</span>
    </div>
    <img
      class="rounded-xl w-full border-none object-cover"
      :src="'https://www.ayosurabaya.com/images-surabaya/' + post.image.thumb"
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
