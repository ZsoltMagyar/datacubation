<template>
  <PageHeader title="Termékek"></PageHeader>

  <div id="products-filter">

  </div>

  <section>

    <dic id="product-list" class="container">

      <template v-for="n in 9" v-bind:key="n">
        <router-link to="/termek">
          <div class="product" >
            <img src="https://via.placeholder.com/400x250">
            <h3>Termék neve</h3>
            <div class="product__actions">
              <div>
                <span class="orange-circle-with-icon orange-circle-with-icon--small">
                  <i class="las la-shopping-cart"></i>
                </span> Érdekel
              </div>

              <div>
                <span class="orange-circle-with-icon orange-circle-with-icon--small">
                  <i class="las la-list"></i>
                </span> Részletek
              </div>
            </div>
          </div>
        </router-link>
      </template>

    </dic>


  </section>

  <Pagination></Pagination>
</template>

<script>
import PageHeader from "../components/PageHeader";
import Pagination from "@/components/Pagination";

export default {
  name: "Products",
  components: {
    PageHeader,
    Pagination
  }
}
</script>

<style scoped lang="scss">

#products-filter {
  height: 80px;
  border-bottom: 4px solid #A2CFD1;
}

#product-list {
  display: grid;
  grid-gap: 60px 120px;
  grid-template-columns: repeat(auto-fill, 400px);
}

.product {

  &__actions {
    display: flex;
    justify-content: flex-end;

    div {
      margin-right: 15px;
      display: flex;
      align-items: center;

      span {
        margin-right: 15px;
      }
    }
  }
}

</style>
