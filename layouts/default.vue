<template>
  <div>
    <Navbar :menus="menuCategories" />
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
import {MeiliSearch} from 'meilisearch'
export default defineComponent({
  loading: true,
  setup() {
    const menuCategories = ssrRef([])

    const client = new MeiliSearch({
        host: 'http://127.0.0.1:7700',
        apiKey: 'wehealth.id',
      })

    const { fetch } = useFetch(async () => {

      await client.index('category').search('', { filters: 'order > 0' }).then((result) => {
        menuCategories.value = result.hits
        console.log(result.hits)
      }).catch((err) => {
        console.log(err)
      })
    })

    onMounted(() => {
      fetch()
    })

    return {
      menuCategories
    }
  },
})
</script>
