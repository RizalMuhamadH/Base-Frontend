<template>
  <div class="col-span-3 w-full">
    <div class="flex justify-between">
      <a href="#">
        <i
          class="fas fa-text-height border-2 border-green-800 rounded-lg text-xl text-green-800 px-2 py-1"
        ></i>
      </a>
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
    <div class="content text-justify" v-html="post.body">
      
    </div>
    <div class="flex flex-col my-3 space-y-4">
      <div class="flex text-green-800 space-x-3">
        <i class="fas fa-tags text-2xl"></i>
        <span class="font-extrabold text-2xl">TAGS</span>
      </div>
      <div class="flex flex-wrap">
        <a href="#" v-for="(item, index) in post.tags" :key="index"
          class="text-green-800 border border-green-800 rounded-lg py-1 px-2 font-semibold mr-2 mt-2 hover:bg-green-800 hover:text-white"
        >
          {{ item.name }}
        </a>
        
      </div>
    </div>
    
    <related-article :posts="related"/>
    
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent ({
  props: {
    post: Object,
    related: Array
  }
})
</script>
<style >
  .content p a {
    color: coral;
    font-weight: bold;
  }
</style>