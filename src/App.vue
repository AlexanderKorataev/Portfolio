<template>
    <div>
      <!-- <router-link to="/skills">12</router-link> -->
      <div class="lines">
        <div class="line" id="left"></div>
        <div class="line" id="top"></div>
        <div class="line" id="right"></div>
        <div class="line" id="bottom"></div>
      </div>
      <section class="section">
        <router-view/>
      </section>
      <footer>
        <p class="footer-item" id="copirate">©/2023</p>
        <button class="footer-item" id="lang_btn" @click="switchLang">{{ $t('language') }}</button>
      </footer>
    </div>
</template>

<script>
import i18n from './i18n'
import setLanguage from './i18n'

import 'animate.css';

export default ({
  methods: {
    switchLang() {
      // i18n.locale === "ru" ? i18n.locale = "en" : i18n.locale = "ru"
      // localStorage.setItem('lang', i18n.locale)
      // setLanguage("ru")
    }
  } 
})
</script>

<style lang="scss">
  @import '../node_modules/bulma';
#app {

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

  * {
      margin: 0;
      padding: 0;

      color: #000;
  }

  body {
    background: #fff;
    color: #000;

    height: 1000px;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
  }

  body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */ 
  }

  @font-face {
      font-family: 'Roboto-Regular';
      src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Roboto-Thin';
      src: url('./assets/fonts/Roboto-Thin.ttf') format('truetype');
  }

  @font-face {
      font-family: 'JetBrainsMono-ExtraLight';
      src: url('./assets/fonts/JetBrainsMono-ExtraLight.ttf');
  }

  @font-face {
      font-family: 'JetBrainsMono-Regular';
      src: url('./assets/fonts/JetBrainsMono-Regular.ttf');
  }

  @font-face {
      font-family: 'JetBrainsMono-Thin';
      src: url('./assets/fonts/JetBrainsMono-Thin.ttf');
  }

  @font-face {
      font-family: 'Montserrat-Regular';
      src: url('./assets/fonts/Montserrat-Regular.ttf');
  }


  .lines {
    position: fixed;

    top: 35px;
    bottom: 35px;
    right: 35px;
    left: 35px;

    mix-blend-mode: difference;
    pointer-events: none;
  }
  .line {
    position: absolute;
    background-color: #fff;
    opacity: .5;
  }

  #left {
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
  }
  #top {
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
  }
  #right {
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
  }
  #bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
  }

  footer {
    position: fixed;
    left: -38px;
    bottom: 10%;
    color: #000;
    transform: rotate(-90deg);
    white-space: nowrap;
    mix-blend-mode: difference;
    display: flex;
    -moz-column-gap: 15px;
    column-gap: 15px;
  }

  .footer-item {
    display: flex;

    box-sizing: border-box;
    margin-left: 25%;
  }

  #lang_btn {
    background: none;
	  color: inherit;
	  border: none;

    cursor: pointer;

    color: #fff;

    font-family: 'Roboto-Regular';
    font-style: normal;
    font-size: 22px;
  }

  #copirate {
    font-family: 'Roboto-Thin';
    font-style: normal;
    font-size: 22px;

    color: #fff;
  }

  .home-link {
    position: fixed;

    color: #000;

    // animation: 1s ease-out 0s 1 slideInFromLeft;


    right: 7%;
    top: 10%;

    text-decoration: none;

    font-family: 'JetBrainsMono-Regular';
    font-style: normal;
    font-size: 56px;
    
  }

  .home-link:hover {
    color: #000;
    }

  @keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
  }

  // .screen {
  //   width: 100%;
  //   height: 1000px;

  //   background: #fff;

  //   // animation: 1s ease-out 0s 3 slideInFromLeft;
  // }

  .title {
    position: fixed;

    left: 10%;
    right: 50%;
    top: 15%;
    width: 100%;

    font-family: 'JetBrainsMono-Thin';
    font-style: normal;
    font-size: 96px;
    color: #000;
    text-decoration: none;

  }
</style>