<template>
  <section id="roadmap">

    <div class="container">

      <h1 class="blue-underline--thin">Az inkubációs programban való részvétel menete.</h1>
      <div id="roadmap__content">
        <div>
          <p>Az érdeklődők az együttműködési szándéknyilatkozat aláírásával és elküldésével jelzik csatlakozási szándékukat.</p>
          <p>A csatlakozni szándékozókkal szerződést kötünk, az együttműködési szándéknyilatkozat kézhezvételétől számítva 15 munkanapon belül.</p>
          <p>A szerződött partnereket nyilvántartásba vesszük, és a honlapon feltüntetjük.</p>
          <img src="../../assets/images/roadmap_section.svg" alt="">
          <p>A szerződéskötést követően, inkubációs menedzserünk felveszi a kapcsolatot partnerünkkel és meghallgatja igényeit.</p>
          <p>Ezt követően partnereink adminisztrációs hozzáférést kapnak a portálhoz, így nyilvánosságra hozhatják innovatív tudásanyagaikat, termékeiket, szolgáltatásaikat, valamint egyéb vállalati aktualitásaikat.</p>
          <p>Inkubációs menedzserünk a partner számára egy testreszabott inkubációs szolgáltatási csomagot állít össze, majd ennek megfelelően.</p>
          <p>Az inkubációs program befejezésekor a partner és az  inkubációs menedzser közösen értékelik az elért eredményeket.</p>
          <p>A Központ a Pentatrade Kft. vállalkozásokat élénkítő projektje, amelyet az Európai Unió és Magyarország kormánya által támogatott GINOP-1.1.1-18-2018-00026 azonosító számú pályázati projekt keretében valósítottunk meg.</p>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "ProgramRoadmap"
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';
#roadmap {
  @include phone {
    img {
      display: none;
    }
  }

  &__content {
    margin-top: 80px;

    img {
      float: right;
    }

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
