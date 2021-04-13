<template>
  <div class="page-wrapper">
    <PageHeader title="Blog"></PageHeader>

    <section id="blog">

      <div class="blog-post">
        <div class="blog-post-date">
          <div class="blog-post-date__day">2</div>
          <div class="blog-post-date__month-and-year">02,2021</div>
        </div>
        <img class="blog-post-picture" src="https://via.placeholder.com/260x145" alt="blog-post-picture">
        <div class="blog-post-summary">
          <h3 class="blog-post-summary__title"><router-link to="/blog-post">Blog post title</router-link></h3>
          <p class="blog-post-summary__read-time">Olvasási idő: 123456 perc</p>
          <p class="blog-post-summary__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, nec facilisis pellentesque fringilla dolor nulla. Rhoncus erat felis vulputate molestie.</p>
        </div>
      </div>

      <div class="blog-post">
        <div class="blog-post-date">
          <div class="blog-post-date__day">2</div>
          <div class="blog-post-date__month-and-year">02,2021</div>
        </div>
        <img class="blog-post-picture" src="https://via.placeholder.com/260x145" alt="blog-post-picture">
        <div class="blog-post-summary">
          <h3 class="blog-post-summary__title"><router-link to="/blog-post">Blog post title</router-link></h3>
          <p class="blog-post-summary__read-time">Olvasási idő: 123456 perc</p>
          <p class="blog-post-summary__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, nec facilisis pellentesque fringilla dolor nulla. Rhoncus erat felis vulputate molestie.</p>
        </div>
      </div>

      <div class="blog-post">
        <div class="blog-post-date">
          <div class="blog-post-date__day">2</div>
          <div class="blog-post-date__month-and-year">02,2021</div>
        </div>
        <img class="blog-post-picture" src="https://via.placeholder.com/260x145" alt="blog-post-picture">
        <div class="blog-post-summary">
          <h3 class="blog-post-summary__title"><router-link to="/blog-post">Blog post title</router-link></h3>
          <p class="blog-post-summary__read-time">Olvasási idő: 123456 perc</p>
          <p class="blog-post-summary__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, nec facilisis pellentesque fringilla dolor nulla. Rhoncus erat felis vulputate molestie.</p>
        </div>
      </div>

    </section>

    <Pagination></Pagination>

  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import Pagination from "@/components/Pagination";
export default {
name: "Blog",
  components: {
    PageHeader,
    Pagination
  }
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';

#blog {
  position: relative;
  padding: 50px 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @include tablet {
    padding: 50px 100px;
  }

  @include tablet-small {
    padding: 25px 35px;
  }

  @include phone {
    padding: 25px 25px;
  }
}

.blog-post {
  display: flex;
  max-width: 980px;
  margin-bottom: 50px;

  &-date {
    margin-right: 20px;

    &__day {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 54px;
      height: 44px;
      background: #2E91A6;

      font-weight: bold;
      font-size: 28px;
      line-height: 35px;
      color: white;
    }

    &__month-and-year {
      margin-top: 3px;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color: #2E91A6;
    }
  }

  &-picture {
    margin-right: 50px;
  }

  &-summary {
    text-align: left;

    &__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      color: #2E91A6;

      a {
        text-decoration: none;
      }

      a:visited {
        color: #2E91A6;
      }
    }

    &__read-time {
      margin-top: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #707070;
    }

    &__description {
      margin-top: 20px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;

      color: #707070;
    }
  }
}

</style>
