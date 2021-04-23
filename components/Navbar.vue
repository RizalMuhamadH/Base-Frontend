<template>
  <div>
    <nav class="bg-gray-800">
      <div
        class="flex flex-col max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 items-center"
      >
        <div class="flex flex-col justify-center fixed z-40">
          <img
            src="https://ayobogor.com/assets/ads/bjb/desktop/ads.jpg?w=1197"
            alt="bjb"
          />
          <transition name="fade" mode="out-in" leave-cancelled>
            <NavItem v-show="position" />
          </transition>
        </div>
        <div class="flex flex-col pt-28 pb-1">
          <img src="~/assets/logo-ayobandung.png" alt="" />
          <h1 class="text-lg text-white text-center py-2">
            Semua Tentang Bandung
          </h1>
        </div>
      </div>
      <div class="w-full border-t border-white">
      <NavItem />
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
            >Dashboard</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Team</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Projects</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Calendar</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      position: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      if (window.scrollY >= 200) {
        this.position = true
      } else {
        this.position = false
      }
      console.log(this.position)
    },
  },
}
</script>
