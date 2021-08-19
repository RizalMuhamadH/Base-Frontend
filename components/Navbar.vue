<template>
  <div>
    <nav class="bg-gray-800">
      <div
        class="
          relative
          flex flex-col
          max-w-7xl
          mx-auto
          px-2
          sm:px-6
          lg:px-8
          items-center
        "
      >
        <div class="flex flex-col justify-center fixed z-20 w-full">
          <img
            src="https://ayobogor.com/assets/ads/bjb/desktop/ads.jpg?w=1197"
            alt="bjb"
          />
          <transition name="fade" mode="out-in" leave-cancelled>
            <NavItem :menus="menus" v-show="state.position" />
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
        <NavItem :menus="menus" />
      </div>
    </nav>
  </div>
</template>
<script>
import { defineComponent, reactive, onMounted, } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    menus: Array
  },
  setup(props) {
    

    const state = reactive({
      flick: null,
      position: false,
    })

    const handleScroll = () => {
      // Any code to be executed when the window is scrolled
      if (window.scrollY >= 200) {
        state.position = true
      } else {
        state.position = false
      }
      console.log(state.position)
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    // onBeforeMount(() => {
    //   window.addEventListener('scroll', handleScroll)
    // })
    // onDeactivated(() => {
    //   window.removeEventListener('scroll', handleScroll)
    // })

    return {
      state,
    }
  },
})

</script>
