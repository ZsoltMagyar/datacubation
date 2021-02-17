<template>
  <div id="home">
    <div id="hero">

      <div id="hero-content">
        <h1>Datacubation Virtuális Inkubációs Központ</h1>
        <img src="../assets/images/cloude1.svg" alt="valamifelhő">
      </div>
      <button class="btn btn-orange">Inkubációs program bemutatása</button>
      <img id="szechenyi" src="../assets/images/szechenyiterv.svg" alt="szechenyi2020">
    </div>
    <div class="divider">
      <h1>vállalkozás élénkító program</h1>
    </div>
    <div id="about">

    </div>
  </div>
</template>

<script>
export default {
name: "Home.vue"
}
</script>

<style scoped>

.divider {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider > h1 {
  text-transform: uppercase;
  font-size: 64px;
}

#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 130px);
  background: url("../assets/images/background1.svg") top left no-repeat;
  background-size: cover;

  position: relative;
}

#hero-content {
  padding: 0 150px;
  display: flex;
}

#hero-content > h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 120px;
  text-align: left;
  color: #FFFFFF;
}

#szechenyi {
  position: absolute;
  bottom: 0;
  right: 0;
}

#about {
  width: 100%;
  min-height: calc(100vh - 130px);
  background: url("../assets/images/background2.svg") top left no-repeat;
  background-size: cover;
}

</style>
