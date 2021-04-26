<template>
  <PageHeader title="Regisztráció"></PageHeader>
  <section>
    <form class="registration-form" action="#">

      <div class="form-control">
        <label for="first-name">Keresztnév <span>*</span></label>
        <input type="text" id="first-name" name="first-name" required>
      </div>

      <div class="form-control">
        <label for="last-name">Vezetéknév <span>*</span></label>
        <input type="text" id="last-name" name="last-name" required>
      </div>

      <div class="form-control">
        <label for="e-mail">E-mail cím <span>*</span></label>
        <input type="email" id="e-mail" name="e-mail" required>
      </div>

      <div class="form-control">
        <label for="password1">Jelszó <span>*</span></label>
        <input type="password" id="password1" name="password1" required>
      </div>

      <div class="form-control">
        <label for="password2">Jelszó megerősítése <span>*</span></label>
        <input type="password" id="password2" name="password2" required>
      </div>

      <div id="submit-wrapper">
        <button type="submit" class="btn btn-orange">Regisztráció</button>
      </div>
    </form>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "UserReg",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

section {
  padding: 60px 0;
}

</style>
