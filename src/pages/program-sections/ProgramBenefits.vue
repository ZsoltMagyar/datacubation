<template>

  <section id="benefits">

    <div class="container">

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

    </div>

  </section>

</template>

<script>
export default {
  name: "ProgramBenefits"
}
</script>

<style scoped lang="scss">
#benefits {
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
</style>
