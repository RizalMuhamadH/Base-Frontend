<template>
  <div class="col-span-3">
    <div
      class="
        font-bold
        text-green-700 text-2xl
        border-green-700 border-b-2
        text-center
        py-2
      "
    >
      Terbaru
    </div>

    <div class="flex flex-col divide-y divide-gray-300 mt-3 space-y-3">
      <div
        class="flex flex-row pt-3 space-x-2"
        v-for="(item, index) in posts"
        :key="index"
      >
        <img
          :src="
            storage + item.image.media.small
          "
          :alt="item.image.caption || ''"
          class="
            shadow
            rounded
            w-40
            align-middle
            border-none
          "
        />
        <div class="flex flex-col flex-1">
          <div class="text-black text-xs py-2">
            <span class="text-green-700 font-bold">{{
              item.category_name
            }}</span>
            | {{ $moment(item.created_at).fromNow() }}
          </div>
          <a :href="'/read/'+$moment(item.created_at).format('YYYY/MM/DD')+'/'+item.id+'/'+item.slug" class="font-medium text-black text-xl">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ssrRef } from '@nuxtjs/composition-api'
// import {moment} from '@nuxtjs/moment'

export default defineComponent({
  props: {
    posts: Array,
  },
  setup(props) {
    
    const storage = ssrRef(process.env.STORAGE_URL)

    const dateMoment = (date) => {
      return moment(date).fromNow();
    }

    return {
      dateMoment,
      storage
    }
  }
})
</script>
