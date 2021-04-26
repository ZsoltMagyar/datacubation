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
          <button class="btn btn-orange">Küldés</button>
        </form>
      </section>

      <section id="contact__list">
        <h2 class="blue-underline--thin">Elérhetőségeink:</h2>
        <ul>

          <li class="list-item">
            <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
              <i class="las la-user-graduate"></i>
            </div>
            <div class="list-item__description">
              <h3>E-mail</h3>
              <p>info@pentatrade.hu</p>
            </div>
          </li>

          <li class="list-item">
            <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
              <i class="las la-user-graduate"></i>
            </div>
            <div class="list-item__description">
              <h3>Telefon</h3>
              <p>+36 96 519 110</p>
            </div>
          </li>

          <li class="list-item">
            <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
              <i class="las la-user-graduate"></i>
            </div>
            <div class="list-item__description">
              <h3>Cím</h3>
              <p>9028, Győr, Serfőződombi dűlő 3.</p>
            </div>
          </li>

        </ul>
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
      align-items: flex-end;

      input, textarea {
        width: 100%;
      }
    }

    button {
      max-width: 200px;
      margin: 0;
    }
  }

  &__list {

  }
}

ul {
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  width: 100%;
  margin-bottom: 70px;

  &__icon {
    min-width: 106px;
    margin-right: 20px;
  }

  &__description {
    text-align: left;

    h3 {
      text-transform: uppercase;
    }

    p {
      margin-top: 20px;
      color: #707070;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
    }
  }
}

</style>
