<template>
  <div id="hero">

    <div id="hero-content">
      <h1>Datacubation Virtuális Inkubációs Központ</h1>
      <img src="../../assets/images/cloude1.svg" alt="valamifelhő">
    </div>

    <button class="btn btn-orange">Inkubációs program bemutatása</button>

    <img id="szechenyi" src="../../assets/images/szechenyiterv.svg" alt="szechenyi2020">

  </div>
</template>

<script>
export default {
  name: "HomeHero"
}
</script>

<style scoped>
#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 130px);
  background: url("../../assets/images/background1.svg") top left no-repeat;
  background-size: cover;

  position: relative;
}

#hero-content {
  padding: 0 30px;
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
</style>
