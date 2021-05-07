<template>
  <div class="static" @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      href="/#features"
      class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      Feature
    </a>

    <!-- <div class="absolute w-full">&nbsp;</div> -->
    <transition name="mega-menu-fade">
      <div v-show="isVisible"
        class="mega-menu absolute normal-case font-normal bg-gray-900 shadow-md rounded-lg overflow-hidden mt-0 w-full left-0 z-3000"
      >
        <div class="container mx-auto flex flex-col items-center lg:flex-row px-8 py-6">
          <ul class="w-full lg:w-1/5 px-4">
            <li class="mb-3">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <span
                  class="font-bold text-white group-hover:text-gray-400 flex items-center"
                >
                  BANDUNG RAYA
                </span>
              </a>
            </li>
            <li class="mb-3">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                  <span
                  class="font-bold text-white group-hover:text-gray-400 flex items-center"
                >
                  SOREANG
                </span>
              </a>
            </li>
            <li class="mb-8 lg:mb-3">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <span
                  class="font-bold text-white group-hover:text-gray-400 flex items-center"
                >
                  CIMAHI
                </span>
              </a>
            </li>
            <li class="mb-8 lg:mb-3">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <span
                  class="font-bold text-white group-hover:text-gray-400 flex items-center"
                >
                  NGAMPRAH
                </span>
              </a>
            </li>
          </ul>
          <div class="flex flex-col w-full px-4 ml-3">
            <div class="text-white py-2 border-b border-white font-bold">
              TERBARU
            </div>
            <div class="w-full flex flex-row px-8 py-6">
              <div class="flex flex-col px-5">
                <img src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg" class="shadow rounded max-w-full h-auto align-middle border-none" alt="article">
                <div class="text-white text-sm py-2"><span class="text-green-700 font-bold">Regional</span> | 31 September 2021</div>
                <p class="font-bold text-white text-sm">Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi</p>
              </div>
              <div class="flex flex-col px-5">
                <img src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg" class="shadow rounded max-w-full h-auto align-middle border-none" alt="article">
                <div class="text-white text-sm py-2"><span class="text-green-700 font-bold">Regional</span> | 31 September 2021</div>
                <p class="font-bold text-white text-sm">Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi</p>
              </div>
              <div class="flex flex-col px-5">
                <img src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg" class="shadow rounded max-w-full h-auto align-middle border-none" alt="article">
                <div class="text-white text-sm py-2"><span class="text-green-700 font-bold">Regional</span> | 31 September 2021</div>
                <p class="font-bold text-white text-sm">Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.menuItems = document.querySelectorAll('.mega-menu a')
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    }
  },
  methods: {
    showMenu() {
      this.isVisible = true
    },
    hideMenu() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      this.menuItems[0].focus()
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus()
    },
  },
}
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
