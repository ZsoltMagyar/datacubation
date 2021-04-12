<template>
  <PageHeader title="Tanfolyam neve"></PageHeader>
  <div id="course">
    <div id="course__left">
      <img src="https://via.placeholder.com/400x250">
      <p id="course__price">300 000 Ft</p>
    </div>
    <div id="course__right">

      <ul class="tabs" role="tablist">
        <li>
          <input type="radio" name="tabs" id="tab1" checked />
          <label for="tab1"
                 role="tab"
                 aria-selected="true"
                 aria-controls="panel1"
                 tabindex="0">Áttekintés</label>
          <div id="tab-content1"
               class="tab-content"
               role="tabpanel"
               aria-labelledby="description"
               aria-hidden="false">
            <p>fdsgsdgdfsgsd</p>
          </div>
        </li>

        <li>
          <input type="radio" name="tabs" id="tab2" />
          <label for="tab2"
                 role="tab"
                 aria-selected="false"
                 aria-controls="panel2"
                 tabindex="0">Tanterv</label>
          <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="description"  aria-hidden="false">
            <p>asd</p>
          </div>
        </li>

        <li>
          <input type="radio" name="tabs" id="tab3" />
          <label for="tab3"
                 role="tab"
                 aria-selected="false"
                 aria-controls="panel3"
                 tabindex="0">Oktató</label>
          <div id="tab-content3" class="tab-content" role="tabpanel" aria-labelledby="description"  aria-hidden="false">
            <p>asddddddddddddddddddddddd</p>
          </div>
        </li>

        <li>
          <input type="radio" name="tabs" id="tab4" />
          <label for="tab4"
                 role="tab"
                 aria-selected="false"
                 aria-controls="panel4"
                 tabindex="0">Vélemények</label>
          <div id="tab-content4" class="tab-content" role="tabpanel" aria-labelledby="description"  aria-hidden="false">
            <p>asgfdgsdfgsdfgsdfgfsdgfsdgsdfgd</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
  <button class="btn btn-orange">Tanfolyam megvásárlása</button>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "Course",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

#course {
  padding-top: 110px;
  margin: 0 auto;
  max-width: 1240px;
  display: flex;

  &__left {
    margin-right: 60px;
    text-align: left;
  }

  &__price {
    margin-top: 22px;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    color: #707070;
  }
}

.tabs {
  padding: 18px 0;
  width: 730px;
  float: none;
  list-style: none;
  position: relative;
  text-align: left;
  border-bottom: 4px solid #A2CFD1;
  display: flex;

  li {
    display: block;
  }
  input[type="radio"] {
    position: absolute;
    top: 0;
    left: -9999px;
  }
  label {
    margin-right: 20px;
    display: block;
    border-radius: 2px 2px 0 0;
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
    position: relative;
    &:hover {
      color: #2E91A6;
    }
  }
  .tab-content{
    z-index: 2;
    display: none;
    overflow: hidden;
    width: 100%;
    font-size: 17px;
    line-height: 25px;
    position: absolute;
    top: 70px;
    left: 0;
  }
  //The Magic
  [id^="tab"]:checked + label {
    top: 0;
    color: #2E91A6;
  }
  [id^="tab"]:checked ~ [id^="tab-content"] {
    display: block;
  }
}

</style>
