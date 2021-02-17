<template>
  <header>
    <div class="logo">
      <img src="../assets/DataCubationLogo.svg" alt="">
    </div>
    <nav>
      <ul>
        <li><router-link to="/">A programról</router-link></li>
        <li><router-link to="/esemenyek">Események</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/tanfolyamok">Tanfolyamok</router-link></li>
        <li><router-link to="/termekek">Termékek</router-link></li>
        <li><router-link to="/kapcsolat">Kapcsolat</router-link></li>
      </ul>
    </nav>
      <button class="btn btn-orange">Bejelentkezés</button>
      <button class="btn btn-orange">Regisztráció</button>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

header {
  padding: 0 25px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav > ul {
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

.btn {
  border: none;
  padding: 6px 24px;

  font-weight: 600;
  font-size: 24px;
  line-height: 45px;
}

.btn-orange {
  background: #F47427;
  border-radius: 30px;
}

</style>
