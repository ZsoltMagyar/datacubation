<template>
  <PageHeader title="Termék neve"></PageHeader>

  <section id="product">

    <div class="container">

      <div id="product__header">
        <img src="https://via.placeholder.com/900x450" alt="">
        <div>
          <p>Kategória: <span>Kategória neve</span></p>
          <button class="btn btn-orange">Érdekel</button>
        </div>
      </div>

      <div id="product__content">

        <ul class="tabs" role="tablist">
          <li>
            <input type="radio" name="tabs" id="tab1" checked />
            <label for="tab1"
                   role="tab"
                   aria-selected="true"
                   aria-controls="panel1"
                   tabindex="0">Leírás</label>
            <div id="tab-content1"
                 class="tab-content"
                 role="tabpanel"
                 aria-labelledby="description"
                 aria-hidden="false">
              <h5>Leírás</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pellentesque bibendum donec sagittis, tincidunt lorem dignissim tincidunt. Viverra dui quam urna in enim. Vel viverra vulputate viverra consectetur porta blandit. Purus eget nunc turpis nulla dolor ut viverra sed non.
                Faucibus euismod justo fringilla aliquam amet cras vestibulum. Ac et sit vel sed est lacinia. Lorem et faucibus imperdiet ullamcorper. Tempus lorem volutpat ultrices habitasse cras etiam sed id. In tellus enim sodales orci. Convallis amet sit ipsum sed malesuada fermentum. Volutpat egestas risus, magna viverra diam varius. Pulvinar ut integer lacinia mJetus, ornare volutpat id. Elementum ultrices platea magna lectus malesuada turpis pellentesque eu tempor. Nec, nibh in volutpat, egestas nunc. Id risus phasellus ut in at augue. In nec ornare id ligula. Nunc enim enim massa euismod bibendum imperdiet morbi augue. Tincidunt tellus vulputate suspendisse diam sagittis, id mi mi. Ut commodo posuere semper dui.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2"
                   role="tab"
                   aria-selected="true"
                   aria-controls="panel2"
                   tabindex="0">Vélemények</label>
            <div id="tab-content2"
                 class="tab-content"
                 role="tabpanel"
                 aria-labelledby="description"
                 aria-hidden="false">
              <h5>Értékelések</h5>
            </div>
          </li>
        </ul>

      </div>

    </div>

  </section>

  <section id="related-products">

    <div class="container">

      <h3 class="blue-underline--thin">Kapcsolódó termékek</h3>

      <div id="product-list">

        <template v-for="n in 3" v-bind:key="n">
          <router-link to="/termek">
            <div class="product" >
              <img src="https://via.placeholder.com/350x210">
              <h3>Termék neve</h3>
              <div class="product__actions">
                <div>
                <span class="orange-circle-with-icon orange-circle-with-icon--small">
                  <i class="las la-shopping-cart"></i>
                </span> Érdekel
                </div>

                <div>
                <span class="orange-circle-with-icon orange-circle-with-icon--small">-
                  <i class="las la-list"></i>
                </span> Részletek
                </div>
              </div>
            </div>
          </router-link>
        </template>

      </div>

    </div>

  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "Product",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">
#product {
  display: flex;
  flex-direction: column;

  &__header {
    margin: 0 auto;
    max-width: 900px;
    display: inline-block;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        display: inline-block;
        font-size: 24px;
        line-height: 30px;
        color: #707070;
      }

      span {
        color: #2E91A6;
      }
    }
  }
}

.tabs {
  height: 600px;
  padding: 18px 0;
  list-style: none;
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;

  li {
    display: block;
  }
  input[type="radio"] {
    position: absolute;
    top: 0;
    left: -9999px;
  }
  label {
    width: 180px;
    margin-bottom: 26px;
    display: inline-block;
    border-bottom: 1px solid #2E91A6;
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
    position: relative;
    &:hover {
      color: #2E91A6;
    }
  }
  .tab-content{
    width: 760px;
    z-index: 2;
    display: none;
    overflow: auto;
    font-size: 17px;
    line-height: 25px;
    position: absolute;
    top: 0;
    left: 220px;
  }

  [id^="tab"]:checked + label {
    top: 0;
    color: #2E91A6;
  }
  [id^="tab"]:checked ~ [id^="tab-content"] {
    display: block;
  }
}

#related-products {
  h3 {
    margin-bottom: 40px;
  }
}

#product-list {
  margin: 0 auto;
  display: grid;
  grid-gap: 190px;
  grid-template-columns: repeat(auto-fill, 350px);
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
