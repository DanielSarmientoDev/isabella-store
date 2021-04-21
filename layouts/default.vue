<template>
  <div>
    <mc-header></mc-header>
    <Nuxt />
  </div>
</template>
<script>
import mcHeader from '~/components/molecules/mcHeader'

export default {
  components: {
    mcHeader,
  },
}
</script>
