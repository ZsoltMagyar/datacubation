<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header'
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}

main {
  min-height: calc(100vh - 230px)
}
</style>
