<template>
  <div class="col-span-3 w-full">
    <div class="flex justify-between">
      <div @click="changeSize" class="cursor-pointer">
        <i
          class="fas fa-text-height border-2 border-green-800 rounded-lg text-xl text-green-800 px-2 py-1"
        ></i>
      </div>
      <div class="flex space-x-2">
        <a href="#">
          <i
            class="far fa-comment-dots border-2 border-green-800 rounded-lg text-xl text-green-800 px-2 py-1"
          ></i>
        </a>
        <a href="#">
          <i
            class="fas fa-share-alt border-2 border-green-800 rounded-lg text-xl text-green-800 px-2 py-1"
          ></i>
        </a>
      </div>
    </div>
    <div class="content text-justify" :class="textSize" v-html="post.body">
      
    </div>
    <div class="flex flex-col my-3 space-y-4">
      <div class="flex text-green-800 space-x-3">
        <i class="fas fa-tags text-2xl"></i>
        <span class="font-extrabold text-2xl">TAGS</span>
      </div>
      <div class="flex flex-wrap">
        <a :href="'/tag/'+post.tags_slug[index]" v-for="(item, index) in post.tags_name" :key="index"
          class="text-green-800 border border-green-800 rounded-lg py-1 px-2 font-semibold mr-2 mt-2 hover:bg-green-800 hover:text-white"
        >
          {{ item }}
        </a>
        
      </div>
    </div>
    
    <related-article :posts="related"/>
    
  </div>
</template>
<script>
import { defineComponent, ssrRef, ref } from "@nuxtjs/composition-api";

export default defineComponent ({
  props: {
    post: Object,
    related: Array
  },
  setup(props) {
    const textSize = ssrRef('text-base')
    const textIndex = ref(0)
    const textSizes = ref([
      'text-base',
      'text-lg',
      'text-xl',
      'text-2xl'
    ])

    const changeSize = () => {
      textIndex.value++
      if(textIndex.value == 4){
        textIndex.value = 0
      }

      textSize.value = textSizes.value[textIndex.value]
    }

    return {
      changeSize,
      textSize,
    }

  }
})
</script>
<style >
  .content p a {
    color: coral;
    font-weight: bold;
  }
</style>