<template>
  <div class="w-full h-full">
    <div class="bg-primary h-80 m-5 rounded"></div>
    <h1 class="m-5">Categorías</h1>
    <mcListCards class="m-5" />
  </div>
</template>

<script>
import { CATEGORIES } from '~/graphql/queries'
import mcListCards from '~/components/molecules/mcListCards'

export default {
  components: { mcListCards },
  apollo: {
    categories: {
      query: CATEGORIES,
      update: (data) => {
        console.log(data)
      },
    },
  },
}
</script>

<style></style>
