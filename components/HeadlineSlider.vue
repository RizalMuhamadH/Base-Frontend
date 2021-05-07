<template>
  <div class="flex items-center">
    <div class="cursor-pointer text-yellow-500 h-4 w-4" @click="prev">
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
      ref="flickHeadline"
      :options="{
        gap: 20,
        duration: 500,
        horizontal: true,
        circular: true,
        moveType: 'freeScroll',
        zIndex: 20,
      }"
      :plugins="plugins"
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
      class="w-full py-3 px-4 relative"
    >
      <div class="flex gap-2 h-24 w-1/3">
        <img
          src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg"
          class="shadow rounded max-w-full h-auto align-middle border-none"
          alt="article"
        />
        <div class="flex flex-col">
          <div class="text-black text-sm py-2">
            <span class="text-green-700 font-bold">Regional</span> | 31
            September 2021
          </div>
          <p class="font-bold text-black text-sm line-clamp-2">
            Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
          </p>
        </div>
      </div>

      <div class="flex gap-2 h-24 w-1/3">
        <img
          src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg"
          class="shadow rounded max-w-full h-auto align-middle border-none"
          alt="article"
        />
        <div class="flex flex-col">
          <div class="text-black text-sm py-2">
            <span class="text-green-700 font-bold">Regional</span> | 31
            September 2021
          </div>
          <p class="font-bold text-black text-sm line-clamp-2">
            Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
          </p>
        </div>
      </div>

      <div class="flex gap-2 h-24 w-1/3">
        <img
          src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg"
          class="shadow rounded max-w-full h-auto align-middle border-none"
          alt="article"
        />
        <div class="flex flex-col">
          <div class="text-black text-sm py-2">
            <span class="text-green-700 font-bold">Regional</span> | 31
            September 2021
          </div>
          <p class="font-bold text-black text-sm line-clamp-2">
            Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
          </p>
        </div>
      </div>

      <div class="flex gap-2 h-24 w-1/3">
        <img
          src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/06/10858/diet-bahaya_thumb.jpg"
          class="shadow rounded max-w-full h-auto align-middle border-none"
          alt="article"
        />
        <div class="flex flex-col">
          <div class="text-black text-sm py-2">
            <span class="text-green-700 font-bold">Regional</span> | 31
            September 2021
          </div>
          <p class="font-bold text-black text-sm line-clamp-2">
            Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
          </p>
        </div>
      </div>
    </flicking>

    <div class="cursor-pointer text-yellow-500 h-4 w-4" @click="next">
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
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    prev() {
      this.$refs.flickHeadline && this.$refs.flickHeadline.prev()
    },
    next() {
      this.$refs.flickHeadline && this.$refs.flickHeadline.next()
    },
  },
}
</script>
