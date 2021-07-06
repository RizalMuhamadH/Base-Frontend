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
        <div class="flex flex-col justify-center fixed z-20">
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
    <div class="bg-green-800 rounded-b-2xl">
      <div class="container mx-auto flex items-center space-x-5 py-2">
        <div
          class="
            bg-white
            text-yellow-600
            rounded-lg
            py-1
            px-2
            font-bold
            text-lg
          "
        >
          Headline
        </div>
        <flicking
          :options="{
            gap: 10,
            duration: 500,
            horizontal: false,
            circular: true,
            moveType: 'freeScroll',
            zIndex: 10,
          }"
          :plugins="state.plugins"
          @need-panel="
            (e) => {
              // ADD PANELS
            }
          "
          @move-end="
            (e) => {
              // HANDLE INDEX CHANGE
            }
          "
          class="w-full h-10"
        >
          <div v-for="(item, index) in headline" :key="index" class="w-full text-white font-semibold line-clamp-1">
            {{ item.title }}
          </div>
        </flicking>
      </div>
    </div>
  </div>
</template>
<script>
import { Fade, AutoPlay } from '@egjs/flicking-plugins'
import { defineComponent, reactive, onMounted, } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    headline: Array,
    menus: Array
  },
  setup(props) {
    

    const state = reactive({
      flick: null,
      position: false,
      plugins: [new Fade(), new AutoPlay(2000, 'NEXT')],
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
      state.flick = document.getElementsByClassName('eg-flick-viewport')

      state.flick[0].style.width = '100%'
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
