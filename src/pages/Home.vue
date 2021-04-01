<template>
  <div id="home">

    <homeHero></homeHero>

    <div class="divider">
      <h1>vállalkozás élénkító program</h1>
    </div>

    <homeAbout></homeAbout>

    <messageTo></messageTo>

    <HomePentaBullshit></HomePentaBullshit>

  </div>
</template>

<script>
import HomeHero from "./home-sections/HomeHero";
import HomeAbout from "./home-sections/HomeAbout";
import MessageTo from "./home-sections/MessageTo";
import HomePentaBullshit from "./home-sections/HomePentaBullshit";
export default {
  name: "Home.vue",
  components: {
    homeHero: HomeHero,
    homeAbout: HomeAbout,
    messageTo: MessageTo,
    HomePentaBullshit
  },
}
</script>

<style scoped lang="scss">

.divider {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-size: 64px;
  }
}

</style>
