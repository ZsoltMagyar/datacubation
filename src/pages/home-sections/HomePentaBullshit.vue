<template>
  <section>
    <div id="penta">
      <img src="../../assets/images/pentalogo.png" alt="Penta Trade Logo">
      <q>Inkubátorházunk egy vállalkozásélénkítő, amelynek kiemelt célja, hogy minden tagja, elkerülve az értékesítést és kapcsolatépítés rögös útvesztőjét, itt egy kikövezett ösvényen tevékenykedhessen!</q>
      <span>/Biczó Zoltán, ügyvezető/</span>
    </div>
    <div id="bottom-quote">
      <q>NAGY BAJ AZ, HA TE MÉG MINDIG A CIPŐDET FŰZÖD, AMIKOR MÁSOK MÁR MASÍROZNAK</q>
      <button class="btn btn-orange">Kapcsolat</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomePentaBullshit"
}
</script>

<style scoped lang="scss">
@import "./src/assets/mixins.scss";

#penta {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 4px solid #A2CFD1;

  q {
    margin-top: 10px;
    width: 480px;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }
}

#bottom-quote {
  padding: 70px;
  background: #2E91A6;
  color: #fff;
  display: flex;
  align-items: flex-end;
  border-top: 4px solid #A2CFD1;

  q {
    padding-left: 50px;
    display: block;
    height: 320px;
    width: 850px;
    border-left: 10px solid #27B3C9;

    font-weight: 600;
    font-size: 64px;
    line-height: 80px;
    text-align: left;
  }

  button {
    width: 350px;
    height: 85px;
    border-radius: 40px;
    font-weight: 500;
    font-size: 44px;
    line-height: 55px;
  }
}
</style>
