<template>
  <div class="relative flex items-center justify-between h-16 bg-gray-800">
    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <!-- Mobile menu button-->
      <button
        type="button"
        class="
          inline-flex
          items-center
          justify-center
          p-2
          rounded-md
          text-gray-400
          hover:text-white hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
        "
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
        <svg
          class="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
        <svg
          class="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div
      class="
        flex-1 flex
        items-center
        justify-center
        sm:items-stretch sm:justify-start
      "
      v-scroll="handleScroll"
    >
      <div class="w-full hidden sm:block sm:ml-6">
        <div class="flex justify-center items-center space-x-4">
          <!-- <div
            class="static block"
          >
            <a
              href="#"
              class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page"
              >Bandung Raya</a
            >
            <div
              class="absolute left-0 z-3000 w-full h-96 mt-1 bg-blue-800"
              :class="isVisible ? 'transition ease-out duration-100 transform opacity-100 scale-100' : 'transition ease-in duration-75 transform opacity-0 scale-95'"
            ></div>
          </div> -->

          <a
            href="/"
            class="
              text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            aria-current="page"
            >Home</a
          >

          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <template v-for="(item, index) in menus">
            <div :key="index">
              <mega-menu :menu="item" v-if="item.children.length > 0" />
              <a
                v-else
                href="#"
                class="text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
                >{{ item.name }}</a
              >
            </div>
          </template>

          <a
            href="/index"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            >Index</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    menus: Array,
  },
  setup(props) {
    const isVisible = ref(false)

    const showMenu = () => {
      this.isVisible = true
    }
    const hideMenu = () => {
      this.isVisible = false
      this.focusedIndex = 0
    }

    return {
      showMenu,
      hideMenu,
      isVisible
    }
  },
})
</script>
