<template>
  <div class="col-span-3 col-start-2">
    <div class="flex flex-col divide-y divide-gray-300 mt-3 space-y-3">
      <div
        class="flex pt-3 space-x-2"
        v-for="(item, index) in posts"
        :key="index"
      >
        <img
          :src="
            'https://www.ayosurabaya.com/images-surabaya/' + item.image.thumb
          "
          :alt="item.image.caption"
          class="
            flex-1
            shadow
            rounded
            max-w-full
            h-auto
            align-middle
            border-none
          "
        />
        <div class="flex flex-col flex-1">
          <div class="text-black text-xs py-2">
            <span class="text-green-700 font-bold">{{
              item.categories[0].name
            }}</span>
            | {{ $moment(item.created_at, 'YYYY-MM-DDTHH:mm:ss').fromNow() }}
          </div>
          <a
            :href="
              '/read/' +
              $moment(item.created_at).format('YYYY/MM/DD') +
              '/' +
              item.id +
              '/' +
              item.slug
            "
            class="font-medium text-black text-sm"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
// import {moment} from '@nuxtjs/moment'

export default defineComponent({
  props: {
    posts: Array,
  },
  setup(props) {
    const dateMoment = (date) => {
      return moment(date).fromNow()
    }

    return {
      dateMoment,
    }
  },
})
</script>
