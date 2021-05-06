<template>
  <PageHeader title="A programról"></PageHeader>

  <div id="program">
    <section id="about">
      <div id="about__content">
        <h1 class="blue-underline--thin">DataCubation Virtuális Inkubációs Központ!</h1>
        <h2>Csatlakozz vállalkozás élénkítő programunkhoz, kötelezettségek nélkül!</h2>
        <p>Inkubátorházunk kiemelt célja, hogy minden tagja – elkerülve az értékesítés és kapcsolatépítés rögös útvesztőjét – itt egy kikövezett ösvényen szerezzen új lehetőségeket.</p>
        <p>Partnereink – vagyis az inkubáltak – számára olyan innovatív termékeket és szolgáltatásokat biztosítsunk portálunkon, amelyek a piacon nem, vagy kedvezőtlenebb feltételek mellett érhetők el.  Fontosnak tartjuk, hogy olyan megállapodásokat kössünk partnereinkkel, amelyek kiemelt üzleti lehetőségeket nyújtanak. Leendő tagjainkkal szerződést kötünk, majd adminisztrációs jogosultságot adunk portálunkhoz, így biztosítva a lehetőséget saját termékek, szolgáltatások, események és egyéb vállalati aktualitások megjelenítésére az oldalon.</p>
      </div>
      <div id="about__members">
        <h2>Tagok:</h2>
        <div class="member">
          <img src="https://via.placeholder.com/100x100" alt="">
          <p>Lorem Ipsum</p>
        </div>
        <div class="member">
          <img src="https://via.placeholder.com/100x100" alt="">
          <p>Lorem Ipsum</p>
        </div>
        <div class="member">
          <img src="https://via.placeholder.com/100x100" alt="">
          <p>Lorem Ipsum</p>
        </div>
        <router-link to="/tagok"><a>Tovább >></a></router-link>
      </div>
    </section>

    <section id="benefits">
      <h2>Tagsággal járó előnyök:</h2>
      <ul>
        <li>
          <div class="orange-circle-with-icon orange-circle-with-icon--medium">
            <i class="las la-thumbs-up"></i>
          </div>
          <p>Innovatív termékek és szolgáltatások megjelenítése a “Termékek” menüpont alatt.</p>
        </li>
        <li>
          <div class="orange-circle-with-icon orange-circle-with-icon--medium">
            <i class="las la-thumbs-up"></i>
          </div>
          <p>Olyan innovatív termékek és szolgáltatások igénybevétele, amelyek a piacon nem vagy csak kedvezőtlenebb feltételek mellett érhetők el.</p>
        </li>
        <li>
          <div class="orange-circle-with-icon orange-circle-with-icon--medium">
            <i class="las la-thumbs-up"></i>
          </div>
          <p>Ingyenes vagy díjköteles tanfolyamok közzététele vagy letöltése a “Tanfolyamok” menüpont alatt.</p>
        </li>
        <li>
          <div class="orange-circle-with-icon orange-circle-with-icon--medium">
            <i class="las la-thumbs-up"></i>
          </div>
          <p>Események közzététele az “Események” menüpontnál.</p>
        </li>
      </ul>
    </section>

    <section id="toWhom">
      <div>
        <h2 class="blue-underline--thin--middle">Kiknek szól?</h2>
        <div class="cards">
          <div class="card">
            <i class="las la-building"></i>
            <h3>Kis- közép és nagyvállalatoknak</h3>
            <span>még több információ</span>
          </div>
          <div class="card">
            <i class="las la-play-circle"></i>
            <h3>Startup, vagyis induló vállalatoknak</h3>
            <span>még több információ</span>
          </div>
          <div class="card">
            <i class="las la-rocket"></i>
            <h3>Game changer, azaz fejlődő vállalatoknak</h3>
            <span>még több információ</span>
          </div>
        </div>
      </div>
      <img src="../assets/images/programBg1.svg" alt="">
    </section>

    <section id="support">
      <h1 class="blue-underline--thin">A központ az alábbi területeken nyújt támogatást!</h1>
      <div>
        <ul>
          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-leaf"></i>
            </div>
            <p>Vállalkozásfejlesztési tanácsadás</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-chart-area"></i>
            </div>
            <p>Üzleti folyamatok felmérése és fejlesztése</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-globe"></i>
            </div>
            <p>Hazai és nemzetközi kapcsolatépítés</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-edit"></i>
            </div>
            <p>Hazai és EU-s pályázatok feltérképezése</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-user-friends"></i>
            </div>
            <p>Partner hálózat kiépítése</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-user"></i>
            </div>
            <p>Egyéni kompetencia fejlesztés (mentorálás, coaching)</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-cloud"></i>
            </div>
            <p>Felhő alapú információs rendszer szolgáltatások (ügyfélkezelés, kontrolling, munkafolyamat támogatás</p>
          </li>

          <li>
            <div class="orange-circle-with-icon orange-circle-with-icon--medium">
              <i class="las la-graduation-cap"></i>
            </div>
            <p>Képzések, oktatás, szemléletformálás</p>
          </li>

        </ul>
        <img src="../assets/images/support_section.svg" alt="">
      </div>
    </section>

    <section id="whyJoin">
      <div>
        <h2 class="blue-underline--thin--middle">Miért éri meg csatlakozni?</h2>
        <div class="cards">
          <div class="card">
            <i class="las la-money-bill-wave"></i>
            <h3>Díjtalan tagság</h3>
            <span>még több információ</span>
          </div>
          <div class="card">
            <i class="lar la-handshake"></i>
            <h3>Értékterentő tudást szerezhetsz és adhatsz át</h3>
            <span>még több információ</span>
          </div>
          <div class="card">
            <i class="las la-user-graduate"></i>
            <h3>Potenciális értékesítési lehetődégek</h3>
            <span>még több információ</span>
          </div>
        </div>
      </div>
      <img src="../assets/images/programBg2.svg" alt="">
    </section>

    <section id="roadmap">
      <h1 class="blue-underline--thin">Az inkubációs programban való részvétel menete.</h1>
      <div id="roadmap__content">
        <div>
          <p>Az érdeklődők az együttműködési szándéknyilatkozat aláírásával és elküldésével jelzik csatlakozási szándékukat.</p>
          <p>A csatlakozni szándékozókkal szerződést kötünk, az együttműködési szándéknyilatkozat kézhezvételétől számítva 15 munkanapon belül.</p>
          <p>A szerződött partnereket nyilvántartásba vesszük, és a honlapon feltüntetjük.</p>
          <p>A szerződéskötést követően, inkubációs menedzserünk felveszi a kapcsolatot partnerünkkel és meghallgatja igényeit.</p>
          <p>Ezt követően partnereink adminisztrációs hozzáférést kapnak a portálhoz, így nyilvánosságra hozhatják innovatív tudásanyagaikat, termékeiket, szolgáltatásaikat, valamint egyéb vállalati aktualitásaikat.</p>
          <p>Inkubációs menedzserünk a partner számára egy testreszabott inkubációs szolgáltatási csomagot állít össze, majd ennek megfelelően.</p>
          <p>Az inkubációs program befejezésekor a partner és az  inkubációs menedzser közösen értékelik az elért eredményeket.</p>
          <p>A Központ a Pentatrade Kft. vállalkozásokat élénkítő projektje, amelyet az Európai Unió és Magyarország kormánya által támogatott GINOP-1.1.1-18-2018-00026 azonosító számú pályázati projekt keretében valósítottunk meg.</p>
        </div>
        <img src="../assets/images/roadmap_section.svg" alt="">
      </div>
    </section>
  </div>


</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
name: "Program",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

#program {
  width: 100%;
}

section {
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  padding: 0 60px;
}

#about {
  margin-top: 140px;
  display: flex;

  &__content {
    max-width: 780px;
    margin-right: 100px;

    h1 {
      font-size: 48px;

    }

    h2 {
      font-size: 36px;
    }

    p {
      margin-top: 40px;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }
  }

  &__members {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin: 0;
      font-size: 36px;
    }

    a {
      margin-top: 30px;
      color: #2D7A8C;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      text-decoration-line: underline;
    }
  }
}

.member {
  margin-top: 60px;
  display: flex;
  align-items: center;
  font-weight: bold;

  img {
    margin-right: 25px;
  }
}

#benefits {
  margin-top: 40px;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 36px;
  }

  ul > li {
    display: flex;
    margin-top: 20px;

    div {
      margin-right: 40px;
    }
    p {
      max-width: 750px;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;

      color: #707070;
    }
  }
}

#toWhom, #whyJoin {
  max-width: 100%;
  height: 1290px;
  position: relative;
  //background: #dafdfd;
  img {
    z-index: -100;
    width: 100%;
    position: absolute;
    top: 0;
  }
}

#toWhom, #whyJoin {
  margin: 20px 0 ;
  padding: 0;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    //color: white;
    margin-top: 0;
    margin-bottom: 50px;
  }

  .cards {
    height: auto;
    max-width: 1440px;
    display: grid;
    justify-content: center;
    gap: 80px;
    grid-template-columns: repeat(auto-fill, 382px);
    justify-items: center;
  }

  .card {
    width: 382px;
    height: 255px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F47427;
    color: white;

    span {
      margin-top: 20px;
    }

    h3 {
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      text-align: center;
    }

    i {
      font-size: 80px;
    }
  }
}

#support {
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 50%;
  }

  div {
    display: flex;
  }

  ul {
    padding: 0;
  }

  ul > li {
    display: flex;
    margin-top: 30px;

    div {
      margin-right: 40px;
    }
    p {
      max-width: 750px;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;

      color: #000000;
    }
  }
}

#roadmap {
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;

  &__content {
    margin-top: 80px;
    display: flex;

    div {
      margin-right: 30px;
    }

    p {
      margin-bottom: 30px;
      font-size: 22px;
      line-height: 27px;
      color: #707070;

      &:nth-child(odd) {
        font-weight: 600;
      }
    }
  }
}

</style>
