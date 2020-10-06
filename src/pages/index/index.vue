<template>
  <div id="app">
        <!--<a href="test.html">跳转到白菜页面</a>-->
    <Navbar  id="nav"/>
    <Production  id="Production"/>
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Production from './components/Production.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data: function () {
    return {
      scrollTop: ''
    }
  },
  components: {
    Navbar,
    Production,
    Footer
  },
  mounted () {
    var _this = this
    window.onscroll = function () {
      _this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  watch: {
    scrollTop: function () {
      var nav = document.getElementById('nav')
      //  var navFix = document.getElementById('navFix')
      var Production = document.getElementById('Production')
      var navHeight = nav.offsetHeight
      if (this.scrollTop > navHeight) {
        Production.style.marginTop = '68px'
        nav.style.backgroundColor = 'var(--background-color)'
        nav.style.position = 'fixed'
      } else {
        Production.style.marginTop = '0px'
        nav.style.position = 'relative'
        nav.style.backgroundColor = '#ffffff'
      }
    }
  }
}
</script>

<style>
@import './css/container.css';
#app {
  font-family:var(--font-Pragati);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}
</style>
