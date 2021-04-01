<template>
  <div id="message-to">
    <div>
      <h1 class="blue-underline">Akikhez szólunk</h1>
      <p>Az Inkubátorház nyitott, korlátozás nélkül bármely vállalkozási tevékenységet folytató belföldi és külföldi természetes és jogi személy csatlakozhat partnerként.</p>
      <ul id="message-to__list">
        <li class="message-to__list-item">
          <div class="orange-circle-with-icon orange-circle-with-icon--big">
            <i class="las la-deaf"></i>
          </div>
          <p>Kis- közép és nagyvállalatokhoz!</p>
        </li>
        <li class="message-to__list-item">
          <div class="orange-circle-with-icon orange-circle-with-icon--big">
            <i class="las la-deaf"></i>
          </div>
          <p>Startup, vagyis induló vállalatokhoz!</p>
        </li>
        <li class="message-to__list-item">
          <div class="orange-circle-with-icon orange-circle-with-icon--big">
            <i class="las la-deaf"></i>
          </div>
          <p>"Game changer", azaz fejlődni kívánó vállalatokhoz!</p>
        </li>
      </ul>
      <button class="btn btn-orange">Érdekel a lehetőség</button>
    </div>
    <img src="../../assets/images/message_to_right.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "MessageTo"
}
</script>

<style scoped lang="scss">

#message-to {
  display: flex;
  justify-content: center;
  padding: 90px 50px;
  text-align: left;
  position: relative;

  > div > p {
    max-width: 800px;
    margin: 100px 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 24px;

    li {
      margin-right: 50px;
    }

    li > p{
      margin-top: 50px;
    }
  }

}

button {
  margin-top: 40px;
}

</style>
