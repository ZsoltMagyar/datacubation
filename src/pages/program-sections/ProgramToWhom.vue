<template>

  <section id="toWhom">
    <div class="container">

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
<!--    <img src="../../assets/images/programBg1.svg" alt="">-->
  </section>

</template>

<script>
export default {
  name: "ProgramToWhom"
}
</script>

<style scoped lang="scss">
#toWhom{
  position: relative;

  img {
    z-index: -1;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-30%);
    opacity: .5;
  }
}

#toWhom {
  background: linear-gradient(#fff, #ACD4DB, #46B7CD, #ACD4DB, #fff);
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
    gap: 80px;
    grid-template-columns: repeat(auto-fill, 382px);
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
</style>
