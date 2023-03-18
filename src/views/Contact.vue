<template>
    <div class="contact">
      <!-- <div class="screen"></div> -->
      <p class="title">Contact.</p>
      <div class="contact-text">
        
        <br/>

        <p id="title">I can create a design and also 
          develop a website for you. By 
          contacting me in one of the 
          following ways</p>

        <br/>

        Email: <a href="mailto:alexandkorataev@gmail.com" class="contact-link">alexandkorataev@gmail.com</a>

        <br/>
        
        <div class="internet">
          <a href="https://www.linkedin.com/in/alexander-korataev-aa5302266/" class="contact-link">LinkedIn</a> /
          <a href="https://github.com/AlexanderKorataev" class="contact-link">Github</a> /
          <a href="#" class="contact-link">Twitter</a> /
          <a href="#" class="contact-link">Facebook</a>
        </div>
      </div>
      <router-link to="/" class="home-link">HOME</router-link>
    </div>
  </template>
  
<script>
  
  export default {
    name: 'Contact',
    components: {
    },
    mounted() {
      document.title = "Contact | Alexander Korataev";
    },
  }
</script>
  
<style lang="scss">
  .contact-text {
    position: fixed;

    left: 10%;

    top: 30%;

    width: 40%;



    font-family: 'JetBrainsMono-Regular';
    font-style: normal;
    // font-size: 96px;
  }

  #contact {
    font-size: 96px;
  }

  #title {
    font-size: 24px;
  }

  .internet {
    margin-top: 5%;
  }
  
  // .contact-link {
  //   display: inline-block;

  //   color: #000;

  //   // font-family: 'Montserrat-Regular';
  //   // font-style: normal;
  //   // font-size: 24px;

  //   // text-decoration: none;
    

  //   // padding-bottom: 10%; 

  // }
  // .contact-link:hover {
  //   color: #000;

  //   text-decoration: line-through; 
  //   text-decoration-thickness: 0.05em;
  // }

  @keyframes contact-link{
  0%     { transform-origin:  0% 50%;transform:scaleX(0); }
  50%    { transform-origin:  0% 50%;transform:scaleX(1);  }
  }
  
  .contact-link {
    position: relative;
    display: inline-block;

    text-decoration: underline; 

    color: #000;
  }
  
  .contact-link:hover {
    text-decoration: none; 
  }

  .contact-link:hover:after {
    content: ' ';
    position: absolute;

    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000;
    animation: contact-link .75s ease-in-out forwards;
  }
</style>