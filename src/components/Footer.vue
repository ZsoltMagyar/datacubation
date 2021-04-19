<template>
  <footer>
    <div id="logo">
      <img src="../assets/DataCubationLogo.svg" alt="">
    </div>
    <div id="footer-data">
      <span>Adatvédelem</span>
      <span>ÁSZF</span>
      <span>Impresszum</span>
      <span><router-link to="/gyik">GYIK</router-link></span>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';

footer {
  z-index: 3;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background: #fff;
  border-top: 4px solid #A2CFD1;
  font-size: 22px;

  @include tablet {
    height: 75px;
    font-size: 18px;
  }

  @include tablet-small {
    height: 65px;
    font-size: 16px;
  }

  @include phone {
    height: 65px;
    font-size: 14px;
  }
}

#footer-data {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 8px;
  }
}

#logo > img {
  @include tablet {
    height: 65px;
  }
  @include tablet-small {
    height: 55px;
  }

  @include phone {
    padding-left: 12px;
    height: 40px;
  }
}

</style>
