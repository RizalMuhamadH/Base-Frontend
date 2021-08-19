<template>
  <div></div>
</template>
<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { MeiliSearch } from 'meilisearch'

export default defineComponent({
  setup(props) {
    onMounted(async () =>  {
      // const client = new MeiliSearch({
      //   host: 'http://18.138.34.108',
      //   apiKey: 'wehealth.id',
      // })

      // const search = await client.index('category').getDocument(5)
      // console.log(search)
    })
  },
})
</script>
