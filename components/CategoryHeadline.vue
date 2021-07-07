<template>
  <div class="w-full mt-10">
    <ul
      class="flex items-center space-x-4 border-b py-3 text-lg font-bold text-gray-500"
    >
      <li v-for="(item, index) in names" :key="index"
        v-on:click="selectedTabIndex(index)"
        class="cursor-pointer transition"
        :class="state.tabIndex == index ? 'text-green-700' : ''"
      >
        {{ item }}
      </li>
    </ul>
    <div v-for="(category, index) in categories" :key="index" v-show="state.tabIndex == index" class="w-full my-4">
      <div class="flex space-x-4">
        <img
          class="flex-1 w-3/4 max-h-80 object-cover rounded-lg"
          :src="
                'https://www.ayosurabaya.com/images-surabaya/' +
                category.main[0].image.thumb
              "
          :alt="category.main[0].image.caption"
        />
        <div class="h-full flex flex-col flex-1 my-5 space-y-2">
          <span class="text-sm">{{ category.main[0].date_format }}</span>
          <a :href="
              '/read/' +
              $moment(category.main[0].created_at).format('YYYY/MM/DD') +
              '/' +
              category.main[0].id +
              '/' +
              category.main[0].slug
            " class="font-bold text-xl line-clamp-3">
            {{ category.main[0].title }}
          </a>
          <p class="line-clamp-3">
            {{ category.main[0].summary }}
          </p>
        </div>
      </div>

      <div class="flex items-center space-x-3 my-3">
        <a :href="
              '/read/' +
              $moment(item.created_at).format('YYYY/MM/DD') +
              '/' +
              item.id +
              '/' +
              item.slug
            " class="relative w-80" v-for="(item, i) in category.list" :key="i" >
          <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3">
            <div class="text-white text-sm py-2">{{ item.date_format }}</div>
            <h2 class="font-medium text-white text-sm line-clamp-2">
              {{ item.title }}
            </h2>
          </div>

          <div
            class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30"
          ></div>
          <img
            class="rounded-xl w-full h-48 align-middle border-none object-cover"
            :src="
                'https://www.ayosurabaya.com/images-surabaya/' +
                item.image.thumb
              "
          :alt="item.image.caption"
          />
        </a>

        
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "@nuxtjs/composition-api"

export default defineComponent ({
  props: {
    names: Array,
    categories: Array
  },
  setup(props) {
    const state = reactive({
      tabIndex: 0,
      test:
        '<flicking ref="flickCategorySlider" :options="{ gap: 20, duration: 500, horizontal: true, circular: true, zIndex: 20, renderOnlyVisible: true }" class="w-full my-3 py-3 px-4 relative" > <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div> <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div> <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div> <div class="relative w-80"> <div class="absolute z-20 bottom-0 left-0 flex flex-col px-3 py-3"> <div class="text-white text-sm py-2">31 September 2021</div> <p class="font-medium text-white text-sm line-clamp-2"> Kabupaten Cirebon Catat Lonjakan Kasus Covid-19 Tertinggi </p> </div><div class="h-48 w-full bg-gray-600 absolute z-10 rounded-xl border-none opacity-30" ></div> <img class="rounded-xl max-w-full h-48 align-middle border-none object-cover" src="https://m.ayojakarta.com/images-jakarta/post/articles/2021/05/09/34238/diet-pixabay.jpg" alt="" /> </div></flicking>',
    })

    const selectedTabIndex = (i) => {
      state.tabIndex = i
    }
    const prev = (e) => {
      console.log(e.target)
      state.$refs.flickCategorySlider && state.$refs.flickCategorySlider.prev()
    }
    const next = (e) =>  {
      state.$refs.flickCategorySlider && state.$refs.flickCategorySlider.next()
    }
    
    return {
      state,
      selectedTabIndex,
      prev,
      next
    }
  }
})
</script>
