<template>
    <ul class="flex text-gray-800 text-sm lg:text-lg font-semibold">
      <li class="inline-flex items-center">
        <a href="/">Home</a>
        <svg
          class="h-5 w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </li>
      <li class="inline-flex items-center text-green-800">
        <a :href="'/category/'+category.trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')" class="text-teal-400">{{ category }}</a>
      </li>
    </ul>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent ({
    props: {
      category: String
    }
})
</script>