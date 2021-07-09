<template>
  <div id="home">

    <homeHero></homeHero>

    <section class="p-40">
      <div class="container">
        <h1>vállalkozás élénkító program</h1>
      </div>
    </section>

    <homeAbout></homeAbout>

    <messageTo></messageTo>

    <HomeBlog></HomeBlog>

    <HomePentaBullshit></HomePentaBullshit>

  </div>
</template>

<script>
import HomeHero from "./home-sections/HomeHero";
import HomeAbout from "./home-sections/HomeAbout";
import MessageTo from "./home-sections/MessageTo";
import HomeBlog from "@/pages/home-sections/HomeBlog";
import HomePentaBullshit from "./home-sections/HomePentaBullshit";
export default {
  name: "Home.vue",
  components: {
    homeHero: HomeHero,
    homeAbout: HomeAbout,
    messageTo: MessageTo,
    HomePentaBullshit,
    HomeBlog,
  },
}
</script>

<style scoped lang="scss">

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 64px;
}

</style>
