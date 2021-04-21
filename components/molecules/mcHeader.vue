<template>
  <div class="container-navbar">
    <div class="hidden header-navbar sm:flex">
      <h1>Isabella</h1>
      <div class="links-centered">
        <button>Categorias</button>
        <button>Mas vendidos</button>
        <button>Acerca de nosotros</button>
      </div>
    </div>
    <div class="flex header-navbar sm:hidden">
      <h1>Isabella</h1>
      <button v-on:click="toggle">click</button>
    </div>
    {{ open }}
  </div>
</template>
<script>
export default {
  name: 'mcHeader',
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
<style></style>
