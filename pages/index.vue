<template>
  <div class="container"></div>
</template>

<script>
import { CATEGORIES } from '~/graphql/queries'
export default {
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
