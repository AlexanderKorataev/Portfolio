<template>
    <div class="skills animate__animated animate__fadeInLeft">

      <p class="is-size-2 title">My skills.</p>

      <!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->

        <div class="tools">
        <div class="line-tools">
          <div class="columns is-multiline">
            <ToolBox :icon_src="require('../assets/icons/figma-icon.svg')"/>
            <ToolBox :icon_src="require('../assets/icons/vue.js-icon.svg')"/>
            <ToolBox :icon_src="require('../assets/icons/javascript-icon.svg')"/>
            <ToolBox :icon_src="require('../assets/icons/sass-icon.svg')"/>
          </div>
        </div>

        <div class="line-tools">
          <div class="columns is-multiline">
            <ToolBox :icon_src="require('../assets/icons/git-icon.svg')"/>
            <ToolBox :icon_src="require('../assets/icons/python-icon.svg')"/>
            <ToolBox :icon_src="require('../assets/icons/django-icon.svg')"/>
            <ToolBox :icon_src="require('../assets/icons/postgresql-icon.svg')"/>
          </div>
        </div>
      </div>
      
      <router-link to="/" class="home-link">HOME</router-link>
    </div>
  </template>
  
<script>
import ToolBox from "@/components/ToolBox.vue";

export default {
  name: 'Skills',
  components: {
    ToolBox
},
  mounted() {
    document.title = "Skills | Alexander Korataev";
  },
}
</script>

<style lang="scss">

  .my-element {
    display: inline-block;
    margin: 0 0.5rem;

    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }

  .el {
    // padding: 15% 15%;
    height: 100px;
    width: 100px;

    // margin: 20px;

    // border-radius: 5%;
    // font-size: 21px;
    // color: #fff;
    background: #fff;
  }

  .container {
    position: fixed;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    left: 10%;

    // gap: 20px;


    width: 60%;
  }

  .tools {
    // position: absolute;

    margin-top: 20%;

    margin-left: 7%;
  }

  .line-tools {
    // position: fixed;
    z-index: 3;

    // margin-left: 7%;
  }

  #skills {
    position: fixed;

    // font-family: 'Montserrat-Regular';

    left: 10%;

    top: 15%;

    width: 50%;



    // font-family: 'JetBrainsMono-Thin';
// font-size: 96px;
    
    // font-style: normal;
    // font-size: 96px;

    // text-decoration: none;
    


    // right: 50%;

  }


</style>