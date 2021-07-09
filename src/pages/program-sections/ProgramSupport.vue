<template>
  <section id="support">

    <div class="container flex">

        <ul>
          <h1 class="blue-underline--thin">A központ az alábbi területeken nyújt támogatást!</h1>
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
          <img src="../../assets/images/support_section.svg" alt="">
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


    </div>

  </section>
</template>

<script>
export default {
  name: "ProgramSupport"
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';
#support {

  @include phone {
    img {
      display: none;
    }
  }

  ul {
    padding: 0;
  }

  img {
    float: right;
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
</style>
