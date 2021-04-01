<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/datacubation"><img src="../assets/DataCubationLogo.svg" alt=""></router-link>
      </div>
      <ul>
        <li><router-link to="/program">A programról</router-link></li>
        <li><router-link to="/esemenyek">Események</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/tanfolyamok">Tanfolyamok</router-link></li>
        <li><router-link to="/termekek">Termékek</router-link></li>
        <li><router-link to="/kapcsolat">Kapcsolat</router-link></li>
      </ul>
    </nav>
    <div id="user-btn">
      <button class="btn btn-orange">Bejelentkezés</button>
      <button class="btn btn-orange">Regisztráció</button>
    </div>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped lang="scss">

header {
  height: 130px;
  //width: 1440px;
  //margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex
}

nav > ul {
  padding: 0;
  display: flex;
  list-style: none;
}

nav > ul > li {
  margin-right: 20px;

  /*font-family: Cairo;*/
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 45px;

  color: #575757;
}

nav > ul > li > a {
  text-decoration: none;
}

nav > ul > li > a:visited,
nav > ul > li > a:hover {
  color: #575757;
}



</style>
