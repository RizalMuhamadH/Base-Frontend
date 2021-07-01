<template>
  <div class="grid grid-cols-2 gap-2">
    <div class="relative col-span-1" v-for="(item, index) in main" :key="index">
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
        <p class="font-medium text-white text-lg line-clamp-2">
          {{ item.title }}
        </p>
      </div>

      <div
        class="
          h-full
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
        class="rounded-xl w-full h-full align-middle border-none"
        :src="'https://www.ayosurabaya.com/images-surabaya/'+item.image.thumb"
        :alt="item.image.caption"
      />
    </div>
    <div class="col-span-1 grid grid-cols-2 grid-flow-col grid-rows-2 gap-2">
      <div class="relative" v-for="(item, index) in list" :key="index">
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
          class="rounded-xl max-w-full h-48 align-middle border-none"
          :src="'https://www.ayosurabaya.com/images-surabaya/'+item.image.thumb"
          :alt="item.image.caption"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ssrRef, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    posts: Array,
  },
  setup(props) {
    const main = ssrRef([])
    const list = ssrRef([]);

    onMounted(() => {
      if(props.posts != null){
        main.value = props.posts.splice(0,1)
        list.value = props.posts
      }
    })

    return {
      main,
      list
    }
  }
})
</script>
