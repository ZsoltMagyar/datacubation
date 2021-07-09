<template>

  <section id="about">

    <div class="container flex justify-between">

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

    </div>

  </section>

</template>

<script>
export default {
  name: "ProgramAbout"
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';
#about {

  .container {
    @include phone {
      flex-direction: column;
      align-items: flex-start;
    }
  }

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
</style>
