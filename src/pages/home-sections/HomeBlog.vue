<template>
  <section id="home-blog" class="p-40r">

    <div id="blog" class="container flex justify-center">
      <div class="blog-post">
        <h1 class="blue-underline">Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing volutpat diam ut ornare scelerisque mauris dolor lorem arcu. Neque morbi ante integer dolor euismod arcu velit leo congue. Dolor bibendum viverra pellentesque nulla. Eu mauris egestas sit egestas odio ultricies in non.</p>
        <button class="btn btn-orange">További cikkeink</button>
      </div>
      <div class="blog-post" v-for="n in 3" :key="n">
        <img src="https://via.placeholder.com/516x270" alt="blog-image">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quis egestas nullam amet, phasellus gravida gravida ut volutpat. Facilisi laoreet ligula nisi, malesuada mattis amet, sagittis gravida. Euismod adipiscing nunc massa integer elementum blandit feugiat lacinia. Vitae tortor cursus vitae rhoncus sed tempus lorem nisl faucibus.</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "HomeBlog"
}
</script>

<style scoped lang="scss">
#blog {
  display: grid;
  gap: 102px 204px;
  grid-template-columns: repeat(auto-fill, 516px);
}
.blog-post {
  h3 {
    margin-top: 20px;
  }

  p {
    margin: 20px 0;
    color: #707070;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }
}
</style>
