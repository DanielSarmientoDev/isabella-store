<template>
  <div class="container-navbar">
    <div
      class="hidden header-navbar sm:flex flex items-center justify-between pl-2 bg-pink-200"
    >
      <h1 class="text-primary">Isabella</h1>
      <div class="links-centered">
        <button
          class="hover:text-secondary text-primary font-bold border-0 bg-transparent outline-none p-15"
        >
          Categorias
        </button>
        <button
          class="hover:text-secondary text-primary font-bold border-0 bg-transparent outline-none p-15"
        >
          Mas vendidos
        </button>
        <button
          class="hover:text-secondary text-primary font-bold border-0 bg-transparent outline-none p-15"
        >
          Acerca de nosotros
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between sm:hidden pl-2 bg-pink-200">
      <h1 class="text-primary">Isabella</h1>
      <button v-on:click="toggle">click</button>
    </div>
    <div class="flex flex-col" v-if="open === true">
      <button
        class="transition-bg duration-500 ease-in-out bg-primary hover:bg-transparent hover:text-secondary w-full p-5 text-secondary font-bold border-0 bg-primary outline-none p-15"
      >
        Categorias
      </button>
      <button
        class="transition-bg duration-500 ease-in-out bg-primary hover:bg-transparent hover:text-secondary w-full p-5 text-secondary font-bold border-0 bg-primary outline-none p-15"
      >
        Mas vendidos
      </button>
      <button
        class="transition-bg duration-500 ease-in-out bg-primary hover:bg-transparent hover:text-secondary w-full p-5 text-secondary font-bold border-0 bg-primary outline-none p-15"
      >
        Acerca de nosotros
      </button>
    </div>
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
