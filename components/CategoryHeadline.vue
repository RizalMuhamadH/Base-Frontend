<template>
  <div class="w-full mt-10">
    <ul
      class="flex items-center space-x-4 border-b py-3 text-lg font-bold text-gray-500"
    >
      <li
        v-on:click="selectedTabIndex(0)"
        class="cursor-pointer transition"
        :class="tabIndex == 0 ? 'text-green-700' : ''"
      >
        Bandung Raya
      </li>
      <li
        v-on:click="selectedTabIndex(1)"
        class="cursor-pointer transition"
        :class="tabIndex == 1 ? 'text-green-700' : ''"
      >
        Bandung Baheula
      </li>
      <li
        class="cursor-pointer transition"
        :class="tabIndex == 2 ? 'text-green-700' : ''"
      >
        Persib
      </li>
    </ul>
    <div v-show="tabIndex == 0" class="w-full my-4">
      <div class="flex space-x-4">
        <img
          class="flex-1 w-3/4 max-h-80 object-cover rounded-lg"
          src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg"
          alt=""
        />
        <div class="h-full flex flex-col flex-1 my-5 space-y-2">
          <span class="text-sm">31 September 2021</span>
          <div class="font-bold text-xl line-clamp-3">
            bank bjb Tandatangain PKS Penawaran Umum Berkelanjutan II (PUB II)
            Obligasi Subordinasi tahap I
          </div>
          <p class="line-clamp-3">
            bank bjb Tandatangani PKS Penawaran Umum Berkelanjutan II (PUB II)
            Obligasi Subordinasi tahap I
          </p>
        </div>
      </div>

      <div class="flex items-center space-x-3 my-3">
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
      </div>
    </div>

    <div v-show="tabIndex == 1" class="w-full my-4">
      <div class="flex space-x-4">
        <img
          class="flex-1 w-3/4 max-h-80 object-cover rounded-lg"
          src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg"
          alt=""
        />
        <div class="h-full flex flex-col flex-1 my-5 space-y-2">
          <span class="text-sm">31 September 2022</span>
          <div class="font-bold text-xl line-clamp-3">
            bank bjb Tandatangain PKS Penawaran Umum Berkelanjutan II (PUB II)
            Obligasi Subordinasi tahap I
          </div>
          <p class="line-clamp-3">
            bank bjb Tandatangani PKS Penawaran Umum Berkelanjutan II (PUB II)
            Obligasi Subordinasi tahap I
          </p>
        </div>
      </div>

      <div class="flex items-center space-x-3 my-3">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      test:
        '<flicking ref="flickCategorySlider" :options="{ gap: 20, duration: 500, horizontal: true, circular: true, zIndex: 20, renderOnlyVisible: true }" class="w-full my-3 py-3 px-4 relative" > <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div> <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div> <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div> <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div></flicking>',
    }
  },
  methods: {
    selectedTabIndex(i) {
      this.tabIndex = i
    },
    prev(e) {
      console.log(e.target)
      this.$refs.flickCategorySlider && this.$refs.flickCategorySlider.prev()
    },
    next(e) {
      this.$refs.flickCategorySlider && this.$refs.flickCategorySlider.next()
    },
  },
}
</script>
