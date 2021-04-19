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

<style lang="scss">
@import '/src/assets/mixins.scss';

#app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

main {
  min-height: calc(100vh - 230px);
  padding-bottom: 100px;

  @include tablet {
    margin-bottom: 75px;
  }

  @include tablet-small {
    margin-bottom: 65px;
  }

  @include phone {
    margin-bottom: 50px;
  }
}

Footer {
  position: absolute;
  bottom: 0;
}

</style>
