<template>
    <div class="projects">

      <p class="title">Projects.</p>

      <div class="page">

      <button @click="showModal">show</button>

      <modal-window ref="modal"></modal-window>
    
    </div>

      <router-link to="/" class="home-link">HOME</router-link>
    </div>
  </template>
  
  <script>
  import ModalWindow from '@/components/ProjectsModalWindow.vue'

  export default {
    name: 'Projects',
    components: {
      ModalWindow
    },
    mounted() {
      document.title = "Projects | Alexander Korataev";
    },
    methods: {
      showModal() {
      this.$refs.modal.show = true
    }
},
  }
  </script>
  
<style lang="scss">

body {
font-family: 'Source Sans Pro', sans-serif;
margin: 0;
padding: 0;
height: 100vh;
}

.page {
    position: relative;
    width: 100%;
    height: 100%;
    }
</style>