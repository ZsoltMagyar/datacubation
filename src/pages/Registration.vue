<template>
  <PageHeader title="Regisztráció"></PageHeader>
  <section>

    <div class="container flex justify-between">

      <div class="registration-rout">
        <h2>Regisztráció</h2>
        <button class="btn btn-orange" @click="$router.push('/user-registration')">Tovább</button>
      </div>
      <div class="registration-rout">
        <h2>Cégként regisztrálok</h2>
        <button class="btn btn-orange" @click="$router.push('/company-registration')">Tovább</button>
      </div>

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
.registration-rout {
  display: flex;
  flex-direction: column;
  align-items: center;
    button {
      margin: 0;
      width: 200px;
    }
}
</style>
