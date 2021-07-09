<template>
  <section>

    <div class="container">
      <div id="hero-content">
        <h1>Datacubation Virtuális Inkubációs Központ</h1>
        <img id="cloud" src="../../assets/images/cloude1.svg" alt="valamifelhő">
      </div>

      <button class="btn btn-orange">Inkubációs program bemutatása</button>

      <img id="szechenyi" src="../../assets/images/szechenyiterv.svg" alt="szechenyi2020">
    </div>

  </section>
</template>

<script>
import gsap from "gsap";
export default {
  name: "HomeHero",
  mounted() {
    gsap.from('#cloud',{opacity: 0, duration: 1, y: -50})
  }
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  padding: 180px 0;
  background: url("../../assets/images/background1.svg") top left no-repeat;
  background-size: cover;

  position: relative;
}

#hero-content {
  padding: 0 30px;
  display: flex;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 120px;
    text-align: left;
    color: #FFFFFF;
  }
}

#szechenyi {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
