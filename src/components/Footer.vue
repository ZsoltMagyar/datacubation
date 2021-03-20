<template>
  <footer>
    <div id="logo">
      <img src="../assets/DataCubationLogo.svg" alt="">
    </div>
    <div id="footer-data">
      <span>Adatvédelem</span>
      <span>ÁSZF</span>
      <span>Impresszum</span>
      <span>GYIK</span>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

footer {
  margin-top: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  border-top: 4px solid #A2CFD1;
}

#footer-data {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
