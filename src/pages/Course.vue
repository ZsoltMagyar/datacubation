<template>
  <PageHeader title="Tanfolyam neve"></PageHeader>

  <section>

    <div class="container">
      <div id="course">
        <div id="course__left">
          <img src="https://via.placeholder.com/400x250">
          <p id="course__price">300 000 Ft</p>
          <button class="btn btn-orange">Tanfolyam megvásárlása</button>
        </div>
        <div id="course__right">

          <div class="tab-container">
            <div class="tab">
              <button id="defaultOpen" class="tab-link" v-on:click="openTab($event, 'summary')">Áttekintés</button>
              <button class="tab-link" v-on:click="openTab($event, 'content')">Tanterv</button>
              <button class="tab-link" v-on:click="openTab($event, 'teacher')">Oktató</button>
              <button class="tab-link" v-on:click="openTab($event, 'opinion')">Vélemények</button>
            </div>

            <div id="summary" class="tab-content">
              <p>Valmai bullshit összefoglaló</p>
            </div>
            <div id="content" class="tab-content">
              <ul id="content-list">
                <li v-for="n in 5" :key="n">
                  <a href="#">
                    <span>Valami link</span><i class="las la-cloud-download-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div id="teacher" class="tab-content">
              <p>Valami szerencse csomag aki oktatónak képzeli magát</p>
            </div>
            <div id="opinion" class="tab-content">
              <p>A lesújtó vélemények</p>
              (p>lorem)*20
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>

</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "Course",
  components: {
    PageHeader
  },
  mounted() {
    document.getElementById("defaultOpen").click();
  },
  methods: {
    openTab: (event, tabName) => {
      let i, tabContent, tabLinks;

      tabContent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }

      tabLinks = document.getElementsByClassName("tab-link");
      for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      event.currentTarget.className += " active";
    }
  }
}
</script>

<style scoped lang="scss">
#course {
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

.tab {
  overflow: hidden;
  border-bottom: 4px solid #A2CFD1;
  background-color: transparent;

  button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 24px;
    color: #707070;

    &:hover {
      background-color: #ddd;
    }

    &.active {
      color: #2E91A6;
    }
  }
}

.tab-content {
  display: none;
  padding: 30px 16px;
}

#content-list {
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    padding: 5px;
  }

  li:hover {
    background-color: #f1f1f1;
  }

  li > a {
    font-size: 22px;
    color: #707070;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
