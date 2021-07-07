<template>
  <div>
    <Navbar :headline="headline" :menus="menuCategories" />
    <Nuxt />
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  useFetch,
  ssrRef,
} from '@nuxtjs/composition-api'
import axios from 'axios'
export default defineComponent({
  loading: true,
  setup() {
    const headline = ssrRef([])
    const menuCategories = ssrRef([])

    const { fetch } = useFetch(async () => {
      await axios
        .get(process.env.API_URL+'feature/1/0/10')
        .then((result) => {
          headline.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })

        await axios
        .get(process.env.API_URL+'categories')
        .then((result) => {
          menuCategories.value = result.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    })

    onMounted(() => {
      fetch()
    })

    return {
      headline,
      menuCategories
    }
  },
})
</script>
