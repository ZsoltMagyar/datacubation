<template>
  <PageHeader title="Regisztráció"></PageHeader>
  <section>
    <div id="user-reg">
      <h2>Regisztráció</h2>
      <button class="btn btn-orange" @click="$router.push('/user-registration')">Tovább</button>
    </div>
    <div id="company-reg">
      <h2>Cégként regisztrálok</h2>
      <button class="btn btn-orange" @click="$router.push('/company-registration')">Tovább</button>
    </div>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "Registration",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">
section {
  padding: 5% 10%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin: 0;
      width: 200px;
    }
  }
}
</style>
