<template>
  <div class="w-full h-auto my-8 col-span-6 col-start-2">
      <div class="font-bold text-yellow-500 text-3xl border-yellow-500 border-b-2 pb-4 mt-2 mb-6">
          Netizen
      </div>
    <div class="flex items-center">
      <div
        class="cursor-pointer text-yellow-500 h-4 w-4 mr-2"
        @click="prev(ref)"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          class="svg-inline--fa fa-chevron-left fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          ></path>
        </svg>
      </div>
      <flicking
        :ref="ref"
        :options="{
          gap: 30,
          duration: 500,
          horizontal: true,
          circular: true,
          moveType: 'freeScroll',
          zIndex: 10,
        }"
        class="w-full"
      >
        <div class="relative w-80">
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-sm line-clamp-2">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>

          <div
            class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30"
          ></div>
          <img
            class="rounded-xl max-w-full h-48 align-middle border-none object-cover"
            src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
            alt=""
          />
        </div>
        <div class="relative w-80">
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-sm line-clamp-2">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>

          <div
            class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30"
          ></div>
          <img
            class="rounded-xl max-w-full h-48 align-middle border-none object-cover"
            src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
            alt=""
          />
        </div>
        <div class="relative w-80">
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-sm line-clamp-2">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>

          <div
            class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30"
          ></div>
          <img
            class="rounded-xl max-w-full h-48 align-middle border-none object-cover"
            src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
            alt=""
          />
        </div>
        <div class="relative w-80">
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-sm line-clamp-2">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>

          <div
            class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30"
          ></div>
          <img
            class="rounded-xl max-w-full h-48 align-middle border-none object-cover"
            src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
            alt=""
          />
        </div>
        <div class="relative w-80">
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-sm line-clamp-2">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>

          <div
            class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30"
          ></div>
          <img
            class="rounded-xl max-w-full h-48 align-middle border-none object-cover"
            src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
            alt=""
          />
        </div>
      </flicking>
      <div
        class="cursor-pointer text-yellow-500 h-4 w-4 ml-4"
        @click="next(ref)"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          class="svg-inline--fa fa-chevron-right fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ref: 'flick',
    }
  },
  methods: {
    prev(name) {
      this.$refs[name].prev()
    },
    next(name) {
      this.$refs[name].next()
    },
  },
}
</script>
