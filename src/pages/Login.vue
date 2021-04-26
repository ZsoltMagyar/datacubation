<template>
  <div>
    <PageHeader title="Bejelentkezés"></PageHeader>

    <form id="login-form" action="#">
      <input type="text" placeholder="Felhasználónév">
      <input type="password" placeholder="Jelszó">
      <button type="submit" class="btn btn-orange">Bejelentkezés</button>
      <a>Elfelejtett jelszó</a>
    </form>

  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
name: "Login",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

#login-form {
  padding-top: 75px;
  margin: 0 auto;
  max-width: 470px;
  display: flex;
  flex-direction: column;

  a {
    margin-top: 20px;
    color: #2D7A8C;
    font-size: 14px;
  }
}

</style>
