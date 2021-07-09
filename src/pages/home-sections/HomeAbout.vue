<template>

  <section id="about">
    <div class="container flex justify-between">

      <div id="about__left">
        <h1 class="blue-underline">A programról</h1>
        <p>Inkubátorházunk  portálján lehetőséged van innovatív termékeidet, szolgáltatásaidat, eseményeidet és egyéb vállalati aktualitásaidat  közzé tenni egyéb kötelezettségek nélkül, valamint más olyan szolgáltatásokat igénybe venni, amelyek a piacon nem, vagy kedvezőtlenebb feltételekkel érhetők el. Tagsággal járó előnyök:</p>
        <ul>
          <li>
            <i class="las la-calendar-alt"></i>
            <p><span>Események feltöltése</span> - az Események menüpont alá</p>
          </li>
          <li>
            <i class="las la-school"></i>
            <p><span>Tanfolyamok közzététele</span> a Tanfolyamok menüpont alatt</p>
          </li>
          <li>
            <i class="las la-shopping-cart"></i>
            <p><span>Innovatív termékek és szolgáltatások feltöltése</span> a Termékek menüpont alatt</p>
          </li>
          <li>
            <i class="las la-percent"></i>
            <p><span>Olyan innovatív termékek, szolgáltatások vagy tanfolyamok igénybevétele</span>, amelyek a piacon nem vagy kedvezőtlenebb feltételekkel érhetőek el</p>
          </li>
        </ul>
      </div>

      <div id="about__right">
        <div class="list-item">
          <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
            <i class="las la-user-graduate"></i>
          </div>
          <div class="list-item__description">
            <h3>Értékteremtő tudást szerezhetsz és adhatsz át</h3>
            <p>A Tanfolyamok menüpontok tartalmazzák azon hasznos képzési anyagokat, amelyeket ingyenesen vagy térítés ellenében igényelhetsz, valamint “eladóként” közzétehetsz.</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
            <i class="las la-handshake"></i>
          </div>
          <div class="list-item__description">
            <h3>Potenciális értékesítési lehetőségeket szerezhetsz</h3>
            <p>Inkubátor házunk kiemelt célja, hogy tagjai előtt új piacokat nyisson meg és segítse őket a kapcsolati körük bővítésében.</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
            <i class="las la-money-bill-wave"></i>
          </div>
          <div class="list-item__description">
            <h3>Díjtalan tagság</h3>
            <p>A tagság semmilyen rejtett költséggel és vásárlási kötelezettséggel nem jár. A szerződéskötés után, adminisztrációs hozzáférést kapsz portálunkhoz, így fel tudod majd tölteni termékeidet és szolgáltatásaigat,valamint közzéteheted eseményeidet és tanfolyamaidat.</p>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "HomeAbout"
}
</script>

<style scoped lang="scss">

#about {
  background: url("../../assets/images/background2.svg") top left no-repeat;
  background-size: cover;

  &__left {
    width: 45%;
    padding: 30px;
    text-align: left;
    color: #fff;

    > p {
      margin: 100px 0;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
    }

    > ul {
      padding: 0;
      margin: 100px 0;
      font-size: 20px;

      li {
        display: flex;
        margin-bottom: 24px;
      }

      i {
        width: 25px;
        height: 25px;
        margin-right: 24px;
      }

      span {
        font-weight: bold;
      }
    }
  }

  &__right {
    width: 45%;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
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
      color: white;
      text-transform: uppercase;
    }

    p {
      color: white;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
    }
  }
}

</style>
