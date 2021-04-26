<template>
  <PageHeader title="Céges regisztráció"></PageHeader>
  <section>
    <form class="registration-form" action="#">

      <div class="form-control">
        <label for="company-name">Cégnév <span>*</span></label>
        <input type="text" id="company-name" name="company-name" required>
      </div>

      <div class="form-control">
        <label for="tax-number">Adószám <span>*</span></label>
        <input type="text" id="tax-number" name="tax-number" required>
      </div>

      <div class="form-control">
        <label for="industry">Iparág <span>*</span></label>
        <select name="industry" id="industry" required>
          <option v-for="n in 10" v-bind:key="n" v-bind:value="n">{{n}}</option>
        </select>
      </div>

      <div class="form-control">
        <label for="county">Megye</label>
        <input type="text" id="county" name="county">
      </div>

      <div class="form-control">
        <label for="post-code">Irányítószám</label>
        <input type="text" id="post-code" name="post-code">
      </div>

      <div class="form-control">
        <label for="city">Város</label>
        <input type="text" id="city" name="city">
      </div>

      <div class="form-control">
        <label for="address">Cím</label>
        <input type="text" id="address" name="address">
      </div>

      <div class="form-control">
        <label for="email">Központi e-mail cím</label>
        <input type="email" id="email" name="email">
      </div>

      <div class="form-control">
        <label for="telephone">Központi telefonszám</label>
        <input type="text" id="telephone" name="telephone">
      </div>

      <div class="form-control">
        <label for="company-description">Rövid cégismertető <span>*</span></label>
        <textarea type="text" id="company-description" name="company-description"></textarea>
      </div>

      <div class="form-control">
        <label for="login-email">Belépéshez használt e-mail cím <span>*</span></label>
        <input type="email" id="login-email" name="login-email">
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
  name: "CompanyReg",
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
