<template>
  <div id="about">

    <div id="about__left">
      <h1 class="blue-underline">A programról</h1>
      <p>Inkubátorházunk  portálján lehetőséged van innovatív termékeidet, szolgáltatásaidat, eseményeidet és egyéb vállalati aktualitásaidat  közzé tenni egyéb kötelezettségek nélkül, valamint más olyan szolgáltatásokat igénybe venni, amelyek a piacon nem, vagy kedvezőtlenebb feltételekkel érhetők el. Tagsággal járó előnyök:</p>
      <ul>
        <li>
          <i class="las la-deaf"></i>
          <p><span>Események feltöltése</span> - az Események menüpont alá</p>
        </li>
        <li>
          <i class="las la-deaf"></i>
          <p><span>Tanfolyamok közzététele</span> a Tanfolyamok menüpont alatt</p>
        </li>
        <li>
          <i class="las la-deaf"></i>
          <p><span>Innovatív termékek és szolgáltatások feltöltése</span> a Termékek menüpont alatt</p>
        </li>
        <li>
          <i class="las la-deaf"></i>
          <p><span>Olyan innovatív termékek, szolgáltatások vagy tanfolyamok igénybevétele</span>, amelyek a piacon nem vagy kedvezőtlenebb feltételekkel érhetőek el</p>
        </li>
      </ul>
    </div>

    <div id="about__right">
      <div class="list-item">
        <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
          <i class="las la-deaf"></i>
        </div>
        <div class="list-item__description">
          <h3>Értékteremtő tudást szerezhetsz és adhatsz át</h3>
          <p>A Tanfolyamok menüpontok tartalmazzák azon hasznos képzési anyagokat, amelyeket ingyenesen vagy térítés ellenében igényelhetsz, valamint “eladóként” közzétehetsz.</p>
        </div>
      </div>
      <div class="list-item">
        <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
          <i class="las la-deaf"></i>
        </div>
        <div class="list-item__description">
          <h3>Potenciális értékesítési lehetőségeket szerezhetsz</h3>
          <p>Inkubátor házunk kiemelt célja, hogy tagjai előtt új piacokat nyisson meg és segítse őket a kapcsolati körük bővítésében.</p>
        </div>
      </div>
      <div class="list-item">
        <div class="list-item__icon orange-circle-with-icon orange-circle-with-icon--big">
          <i class="las la-deaf"></i>
        </div>
        <div class="list-item__description">
          <h3>Díjtalan tagság</h3>
          <p>A tagság semmilyen rejtett költséggel és vásárlási kötelezettséggel nem jár. A szerződéskötés után, adminisztrációs hozzáférést kapsz portálunkhoz, így fel tudod majd tölteni termékeidet és szolgáltatásaigat,valamint közzéteheted eseményeidet és tanfolyamaidat.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeAbout"
}
</script>

<style scoped>

#about {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /*min-height: calc(100vh - 130px);*/
  padding: 90px 0;

  background: url("../../assets/images/background2.svg") top left no-repeat;
  background-size: cover;
}

#about__left {
  width: 45%;
  padding: 30px;
  text-align: left;
  color: #fff;
}

#about__left > p {
  margin: 100px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
}

#about__left > ul {
  padding: 0;
  margin: 100px 0;
  font-size: 20px;

}

#about__left > ul > li {
  display: flex;
  margin-bottom: 24px;
}

#about__left > ul > li > i {
  width: 25px;
  height: 25px;
  margin-right: 24px;
}

#about__left > ul > li > p > span {
  font-weight: bold;
}

#about__right {
  width: 45%;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

#about__right > .list-item {
  display: flex;
}

.list-item {
  width: 100%;
  margin-bottom: 70px;
}

.list-item__icon {
  min-width: 106px;
  margin-right: 20px;
}

.list-item__description {
  text-align: left;
}

.list-item__description > h3 {
  color: white;
  text-transform: uppercase;
}

.list-item__description > p {
  color: white;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
}

</style>
