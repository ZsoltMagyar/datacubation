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

        <div class="tab-container">
          <div class="tab">
            <button id="defaultOpen" class="tab-link" v-on:click="openTab($event, 'description')">Leírás</button>
            <button class="tab-link" v-on:click="openTab($event, 'opinion')">Vélemények</button>
          </div>

          <div id="description" class="tab-content">
            <p>Valmai bullshit összefoglaló</p>
          </div>
          <div id="opinion" class="tab-content">
            <p>Valami bullshit tartalom</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur autem consequatur
              consequuntur dolor ex fuga modi, molestias nam non officiis quasi quia repellendus repudiandae sed velit
              veniam, voluptate.</p>
            <p>Aliquid commodi delectus eaque officiis quibusdam soluta vitae. Aliquam architecto corporis ea eius
              eveniet excepturi facere iste, labore modi neque nisi quam quibusdam quos ratione repellat sed tempore
              ullam velit?</p>
            <p>Aut blanditiis deserunt doloribus harum neque non reiciendis. Consequatur esse et expedita id ipsa ipsum
              iure laudantium vel? Adipisci architecto at cum, deleniti excepturi fuga laudantium nam nobis quod
              similique!</p>
            <p>Aperiam deserunt iste molestias natus omnis quos rem reprehenderit tempore tenetur voluptatum. Asperiores
              assumenda aut debitis dolor dolore dolorem doloribus eos eveniet ex, odio, porro quisquam, quo saepe
              tenetur ullam.</p>
            <p>Omnis perspiciatis quae repellat sed sequi! Ab aut blanditiis cupiditate dignissimos dolor, dolore
              dolores ex, explicabo id labore magnam magni maxime molestias numquam officiis perspiciatis quam soluta
              tempore voluptas voluptatibus.</p>
            <p>Ab ad adipisci alias aliquam asperiores aspernatur at blanditiis debitis distinctio, dolor doloremque
              earum eveniet in ipsam itaque laudantium maiores maxime minima neque obcaecati odit repudiandae ullam
              voluptatem. Asperiores, omnis.</p>
            <p>Autem cupiditate dolorem earum eveniet illo illum iure, nemo nisi praesentium quasi quis, quod
              reprehenderit unde veritatis voluptatum. Alias amet culpa ipsum iste iure labore molestiae praesentium
              quam ratione veritatis.</p>
            <p>A accusamus aliquid amet at blanditiis, consequuntur cum cupiditate distinctio dolor doloribus earum
              error inventore iusto magni minima neque non numquam odio provident quisquam quos similique tempora unde
              veritatis voluptates?</p>
            <p>Atque dignissimos eligendi enim, et illo nam nisi porro voluptas! Aut dolore dolorem laborum quod
              repudiandae similique tenetur. Aperiam consectetur ducimus enim facilis hic laborum obcaecati reiciendis
              rerum ut vel.</p>
            <p>Deserunt ea eum nobis quibusdam vitae. Aliquid eos ex nobis repellendus repudiandae! Ab accusantium amet
              consequuntur dicta excepturi hic ipsum iste iusto laborum maiores molestiae, porro sint voluptates! Eum,
              quisquam.</p>
            <p>Cupiditate delectus distinctio et facere id libero molestiae nisi nobis non officia quis repudiandae,
              sunt voluptatem. Debitis, doloribus eaque earum esse fugit incidunt maxime nemo, numquam optio possimus
              repellat ullam.</p>
            <p>Adipisci ducimus earum eos laborum omnis possimus sequi voluptates. Error exercitationem facilis harum
              inventore non quisquam reprehenderit suscipit vitae? Aliquam amet blanditiis doloribus enim esse in ipsam,
              perspiciatis unde velit.</p>
            <p>Accusantium amet, aspernatur aut, consequuntur corporis, deserunt dicta ducimus enim explicabo fugiat
              fugit harum impedit incidunt iste magni modi nihil perspiciatis quam recusandae reprehenderit sequi sit
              suscipit temporibus veritatis voluptatum.</p>
            <p>Asperiores deleniti deserunt distinctio dolore enim est ex expedita ipsam laboriosam molestiae, natus,
              nihil nostrum officia officiis quisquam, reiciendis saepe sint ut. Facere minus nihil perferendis
              quibusdam quisquam repudiandae soluta!</p>
            <p>Dolorum ea, quod! Cupiditate deleniti distinctio impedit minima, repellat sed temporibus ut voluptas!
              Aliquid autem beatae cum delectus distinctio doloremque, eaque eos eveniet explicabo nihil nulla
              repellendus tempore voluptate voluptatem?</p>
            <p>Consectetur, cupiditate expedita. A, asperiores corporis debitis distinctio eum id incidunt ipsam iste
              labore laboriosam laudantium minima minus, nihil nisi obcaecati praesentium quaerat quod rem repudiandae
              sed sequi unde veniam.</p>
            <p>Aliquid amet aspernatur cupiditate delectus, dolor esse, expedita hic inventore magni molestiae
              perferendis quae quas sed. Atque consequuntur ducimus, esse iure modi necessitatibus nesciunt provident
              quasi, reprehenderit, repudiandae ut voluptates!</p>
            <p>Architecto aspernatur dolor dolore facere itaque molestiae natus nihil officiis quibusdam, quisquam.
              Architecto assumenda deserunt labore magni obcaecati placeat sequi soluta suscipit vero vitae! Aperiam
              debitis explicabo quia repellendus veniam.</p>
            <p>Ad, culpa cum delectus deserunt, dolorum ducimus ea eaque ex illo incidunt laborum mollitia
              necessitatibus nemo neque recusandae sapiente sequi, totam voluptatem voluptates voluptatum? Assumenda cum
              ea impedit maxime voluptates.</p>
            <p>Commodi debitis dicta dolor dolore doloremque, eos, excepturi harum incidunt libero nam, nihil odit qui
              quidem recusandae ullam vero vitae voluptate! Alias commodi consequatur cumque laborum quasi tempora
              temporibus voluptatem.</p>
          </div>
        </div>

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

<script>8
import PageHeader from "@/components/PageHeader";
export default {
  name: "Product",
  components: {
    PageHeader
  },
  mounted() {
    document.getElementById("defaultOpen").click();
  },
  methods: {
    openTab: (event, tabName) => {
      let i, tabContent, tabLinks;

      tabContent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }

      tabLinks = document.getElementsByClassName("tab-link");
      for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      event.currentTarget.className += " active";
    }
  }
}
</script>

<style scoped lang="scss">
#product {

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header {
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

.tab-container {
  margin: 20px 0;
  display: flex;
}

.tab {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-right: 24px;

  button {
    width: 100%;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 20px 0;
    margin-right: 20px;
    transition: 0.3s;
    font-size: 24px;
    color: #707070;
    text-align: left;
    //border-bottom: 4px solid #A2CFD1;

    &:hover {
      background-color: #ddd;
    }

    &.active {
      color: #2E91A6;
    }
  }
}

.tab-content {
  display: none;
  padding: 20px 0;
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
