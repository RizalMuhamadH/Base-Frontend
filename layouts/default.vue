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
  setup() {
    const headline = ssrRef([])
    const menuCategories = ssrRef([])

    const { fetch } = useFetch(async () => {
      await axios
        .get('http://127.0.0.1:8000/api/headline/0/10')
        .then((result) => {
          headline.value = result.data.data
          console.log(headline.value)
        })
        .catch((err) => {
          console.log(err)
        })

        await axios
        .get('http://127.0.0.1:8000/api/categories')
        .then((result) => {
          menuCategories.value = result.data.data
          console.log(menuCategories.value)
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
