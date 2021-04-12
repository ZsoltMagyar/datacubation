<template>
  <div>
    <PageHeader title="Tanfolyamok"></PageHeader>

    <div id="courses-search">

    </div>

    <div id="course-list">

      <template v-for="n in 10" v-bind:key="n">
        <router-link to="/tanfolyam">
          <div class="course" >
            <img src="https://via.placeholder.com/400x250">
            <h3>Kurzus neve</h3>
            <div>
              <span class="course__price">300 000 Ft</span>
              <span class="course__uploader">Feltöltő neve</span>
            </div>
          </div>
        </router-link>
      </template>

    </div>

    <Pagination></Pagination>

  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import Pagination from "@/components/Pagination";
export default {
name: "Courses",
  components: {
    PageHeader,
    Pagination
  }
}
</script>

<style scoped lang="scss">

a {
  text-decoration: none;

  &:visited {
    color: inherit;
  }
}

#courses-search {
  height: 80px;
  border-bottom: 4px solid #A2CFD1;
  margin-bottom: 70px;
}

#course-list {
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
  display: grid;
  grid-gap: 55px;
  grid-template-columns: repeat(auto-fill, 400px);
}

.course {
  max-width: 400px;
  text-align: left;

  div {
    display: flex;
    justify-content: space-between;
  }

  &__price {
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    color: #707070;
  }

  &__uploader {
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #2E91A6;
  }
}

</style>
