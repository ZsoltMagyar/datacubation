<template>
    <PageHeader title="Kapcsolat"></PageHeader>
    <div id="contact">
      <section id="contact__form">
        <h2 class="blue-underline--thin">Lépj kapcsolatba velünk!</h2>

        <form action="">
          <input type="text" placeholder="Név *">
          <input type="text" placeholder="Email *">
          <input type="text" placeholder="Telefon">
          <input type="text" placeholder="Cég">
          <textarea name="" id="" cols="30" rows="10" placeholder="Üzenet"></textarea>
        </form>
      </section>
      <section id="contact__list">
        <h2 class="blue-underline--thin">Elérhetőségeink:</h2>
      </section>
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
name: "Contact",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">
#contact {
  padding-top: 100px;
  margin: 0 auto;
  max-width: 1240px;
  display: flex;

  &__form {
    margin-right: 200px;

    form {
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
