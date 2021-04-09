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

    <div id="pagination">
      <div id="pagination-controls">
        <div class="page-number page-number--active">1</div>
        <div class="page-number">2</div>
        <div class="page-number">3</div>
        <div class="next-page">Következő ></div>
      </div>
    </div>

  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
name: "Blog",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

#pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 4px solid #A2CFD1;
  width: 100%;
  height: 94px;

  &-controls {
    display: flex;
    margin-right: 90px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 22px;
      color: #2E91A6;
    }

    .page-number {
      width: 40px;
      height: 40px;
      border: 1px solid #2E91A6;

      font-weight: 500;
      font-size: 24px;
      line-height: 30px;

      &--active {
        color: #fff;
        background: #2E91A6;
      }
    }

    .next-page {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    }
  }
}

#blog {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blog-post {
  display: flex;
  margin-top: 115px;
  max-width: 980px;

  &:last-child {
    margin-bottom: 115px;
  }

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
