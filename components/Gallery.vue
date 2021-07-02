<template>
  <div class="w-full mt-10 col-span-6 col-start-2">
    <ul
      class="
        flex
        items-center
        space-x-4
        border-b
        py-3
        text-lg
        font-bold
        text-gray-500
      "
    >
      <li
        v-on:click="selectedTabIndex(0)"
        class="cursor-pointer transition"
        :class="tabIndex == 0 ? 'text-green-700' : ''"
      >
        VIDEO
      </li>
      <li
        v-on:click="selectedTabIndex(1)"
        class="cursor-pointer transition"
        :class="tabIndex == 1 ? 'text-green-700' : ''"
      >
        PHOTO
      </li>
    </ul>
    <div v-show="tabIndex == 0" class="w-full my-4 flex">
      <div class="flex flex-col w-3/5">
        <div class="relative w-full">
          <div
            class="
              absolute
              z-20
              inset-0
              w-full
              flex
              items-center
              justify-center
            "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="play"
              class="svg-inline--fa fa-play fa-w-14 w-10 h-10 text-gray-200"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              ></path>
            </svg>
          </div>
          <img
            class="flex-1 w-full max-h-80 object-cover rounded-lg"
            :src="
              'https://www.ayosurabaya.com/images-surabaya/' +
              videos.main[0].image.thumb
            "
            :alt="videos.main[0].image.caption"
          />
        </div>
        <div class="h-full flex flex-col flex-1 my-5 text-white">
          <!-- <span class="text-sm">31 September 2021</span> -->
          <div class="font-bold text-xl line-clamp-3">
            {{ videos.main[0].title }}
          </div>
          <p class="line-clamp-3">
            {{ videos.main[0].summary }}
          </p>
        </div>
      </div>

      <div class="flex flex-col w-2/5 pl-5 divide-y divide-gray-500 space-y-5">
        <div
          class="w-full flex pt-5"
          v-for="(item, index) in videos.list"
          :key="index"
        >
          <div class="w-48 h-36">
            <div class="relative w-48 h-full">
              <div
                class="
                  absolute
                  z-20
                  inset-0
                  w-full
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  class="svg-inline--fa fa-play fa-w-14 w-10 h-10 text-gray-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
                </svg>
              </div>
              <img
                class="
                  rounded-xl
                  w-full
                  h-36
                  align-middle
                  border-none
                  object-cover
                "
                :src="
                  'https://www.ayosurabaya.com/images-surabaya/' +
                  item.image.thumb
                "
                :alt="item.image.caption"
              />
            </div>
          </div>

          <div class="flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">{{ item.date_format }}</div>
            <p class="font-medium text-white text-base line-clamp-3">
              {{ item.title }}
            </p>
          </div>
        </div>

        <!-- <div class="w-full flex pt-5">
          <div class="w-64 h-36">
            <div class="relative w-full h-full">
              <div
                class="absolute z-20 inset-0 w-full flex items-center justify-center"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  class="svg-inline--fa fa-play fa-w-14 w-10 h-10 text-gray-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
                </svg>
              </div>
              <img
                class="rounded-xl w-full h-36 align-middle border-none object-cover"
                src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-base line-clamp-3">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>
        </div>

        <div class="w-full flex pt-5">
          <div class="w-64 h-36">
            <div class="relative w-full h-full">
              <div
                class="absolute z-20 inset-0 w-full flex items-center justify-center"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  class="svg-inline--fa fa-play fa-w-14 w-10 h-10 text-gray-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
                </svg>
              </div>
              <img
                class="rounded-xl w-full h-36 align-middle border-none object-cover"
                src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-base line-clamp-3">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>
        </div>

        <div class="w-full flex pt-5">
          <div class="w-64 h-36">
            <div class="relative w-full h-full">
              <div
                class="absolute z-20 inset-0 w-full flex items-center justify-center"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  class="svg-inline--fa fa-play fa-w-14 w-10 h-10 text-gray-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
                </svg>
              </div>
              <img
                class="rounded-xl w-full h-36 align-middle border-none object-cover"
                src="https://www.ayocirebon.com/images-cirebon/post/articles/2021/05/07/10894/masjid_pusaka_baiturrahmah_-_imy.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">31 September 2021</div>
            <p class="font-medium text-white text-base line-clamp-3">
              Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi
            </p>
          </div>
        </div> -->
      </div>
    </div>

    <div v-show="tabIndex == 1" class="w-full my-4 flex">
      <div class="flex flex-col w-3/5">
        <img
          class="flex-1 max-w-full max-h-80 object-cover rounded-lg"
          :src="
            'https://www.ayosurabaya.com/images-surabaya/' +
            photos.main[0].image.thumb
          "
          :alt="photos.main[0].image.caption"
        />
        <div class="h-full flex flex-col flex-1 my-5 text-white">
          <!-- <span class="text-sm">31 September 2021</span> -->
          <div class="font-bold text-xl line-clamp-3">
            {{ photos.main[0].title }}
          </div>
          <p class="line-clamp-3">
            {{ photos.main[0].summary }}
          </p>
        </div>
      </div>

      <div class="flex flex-col w-2/5 pl-5 divide-y divide-gray-500 space-y-5">
        <div
          class="w-full flex pt-5"
          v-for="(item, index) in photos.list"
          :key="index"
        >
          <img
            class="rounded-xl w-48 h-36 align-middle border-none object-cover"
            :src="
              'https://www.ayosurabaya.com/images-surabaya/' + item.image.thumb
            "
            :alt="item.image.caption"
          />

          <div class="flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">{{ item.date_format }}</div>
            <p class="font-medium text-white text-base line-clamp-3">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    photos: Array,
    videos: Array,
  },
  setup(props) {
    const tabIndex = ref(0)

    const selectedTabIndex = (i) => {
      tabIndex.value = i
    }

    return {
      tabIndex,
      selectedTabIndex,
    }
  },
})
</script>
