<template>
  <div class="static" @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      href="/#features"
      :class="state.isVisible ? 'bg-gray-900' : ''"
      class="text-white px-3 py-2 rounded-md text-sm font-medium"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      {{ menu.name }}
    </a>

    <!-- <div class="absolute w-full">&nbsp;</div> -->
        <!-- v-show="state.isVisible" -->
    <transition name="mega-menu-fade">
      <div
      v-show="state.isVisible"
        class="
          mega-menu
          absolute
          normal-case
          font-normal
          bg-gray-900
          shadow-md
          rounded-lg
          overflow-hidden
          mt-1
          w-full
          left-0
          z-3000
        "
      >
        <div
          class="
            container
            mx-auto
            flex flex-col
            items-center
            lg:flex-row
            px-8
            py-6
          "
        >
          <ul class="w-full lg:w-1/5 px-4">
            <li
              v-for="(item, index) in menu.children"
              :key="index"
              class="mb-3"
            >
              <a
                @mouseover="subMenu(index)"
                @mouseleave="subMenu(index)"
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <span
                  class="
                    uppercase
                    font-bold
                    text-white
                    group-hover:text-gray-400
                    flex
                    items-center
                  "
                >
                  {{ item.name }}
                </span>
              </a>
            </li>
          </ul>
          <div class="flex flex-col w-full h-80 px-4 ml-3">
            <div class="text-white py-2 border-b border-white font-bold uppercase">
              TERBARU {{ menu.children[state.subMenuIndex].name }}
            </div>
            <div class="w-full flex px-8 py-6">
              <div
                class="flex flex-col w-1/3 px-5"
                v-for="(item, index) in menu.children[state.subMenuIndex].posts"
                :key="index"
              >
                <img
                  :src="'https://ayosurabaya.com/images-surabaya/'+item.image.thumb"
                  alt=""
                  class="
                    shadow
                    rounded
                    w-full
                    h-1/2
                    align-middle
                    border-none
                    object-cover
                  "
                />
                <div class="text-white text-sm py-2">
                  <span class="text-green-700 font-bold">{{ menu.children[state.subMenuIndex].name }}</span> | {{ item.date_format }}
                </div>
                <p class="font-bold text-white text-sm">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  defineComponent,
  ssrRef,
  ref,
  reactive,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    menu: Object,
  },
  setup(props) {
    // const menus = ssrRef({})
    // menus.value = props.menu
    const indexMenu = ref(0)
    const state = reactive({
      isVisible: false,
      menuItems: null,
      subMenuIndex: 0,
      focusedIndex: 0,
    })

    onMounted(() => {
      state.menuItems = document.querySelectorAll('.mega-menu a')
    })

    const subMenu = (index) => {
      state.subMenuIndex = index
    }

    const showMenu = () => {
      state.isVisible = true
    }
    const hideMenu = () => {
      state.isVisible = false
      state.focusedIndex = 0
    }
    const startArrowKeys = () => {
      state.menuItems[0].focus()
    }
    const focusPrevious = (isArrowKey) => {
      state.focusedIndex = state.focusedIndex - 1
      if (isArrowKey) {
        state.focusItem()
      }
    }
    const focusNext = (isArrowKey) => {
      state.focusedIndex = state.focusedIndex + 1
      if (isArrowKey) {
        state.focusItem()
      }
    }
    const focusItem = () => {
      state.menuItems[state.focusedIndex].focus()
    }

    return {
      state,
      // menus,
      showMenu,
      hideMenu,
      startArrowKeys,
      focusPrevious,
      focusNext,
      focusItem,
      subMenu,
    }
  },
})
</script>

<style scoped>
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
