<template>
  <div class="home">

    <div class="info">
      <p id="name"><span>Alexander Korataev</span></p>
      <p id="sub-title"><span>Web Developer</span></p>
    </div>
    <nav>
      <div class="links">
        <router-link to="/skills" class="link">SKILLS</router-link>
        <router-link to="/projects" class="link">PROJECTS</router-link>
        <router-link to="/contact" class="link">CONTACT</router-link>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">

  .info {
    position: fixed;

    left: 8%;
    top: 15%;
  }

  .links {
    position: fixed;
    display: flex;

    flex-direction: column;

    right: 8%;
    top: 15%;
    

    // height: 50%;
    // column-count: 3;
  }

  .link {
    display: inline-block;

    color: #000;

    // font-family: 'JetBrainsMono-Regular';
    font-family: 'Montserrat-Regular';
    
    font-style: normal;
    font-size: 96px;

    text-decoration: none;
    

    padding-bottom: 10%; 
  }

  .link:hover {
    text-decoration: line-through; 
    text-decoration-thickness: 0.05em;
    color: #000;
  }

  #name {
    // font-family: 'JetBrainsMono-ExtraLight';
    font-family: 'JetBrainsMono-Thin';
    font-style: normal;
    font-size: 36px;

    // left: 0;
  }

  #sub-title {
    font-family: 'JetBrainsMono-Thin';
    font-style: normal;
    font-size: 20px;


    // left: 0;
  }
  #sub-title span {
    color: #fff;
    background-color: #000;
  }
</style>
