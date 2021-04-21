<template>
  <div class="container"></div>
</template>

<script>
import Vue from 'vue'
import { CATEGORIES } from '~/graphql/queries'
export default Vue.extend({
  apollo: {
    categories: {
      query: CATEGORIES,
      update: (data) => {
        console.log(data)
      },
    },
  },
})
</script>

<style></style>
