<template>
  <section class="page-header p-40">
    <div class="container">
      <h2 class="page-title">{{ title }}</h2>
    </div>
  </section>
</template>

<script>
export default {
name: "PageHeader",
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';

.page-header {
  background: url('../assets/images/page_header_background.svg') top left no-repeat;
  background-size: cover;
  border-bottom: 4px solid #A2CFD1;

  @include tablet {
    height: 150px;
  }

  @include tablet-small {
    height: 100px;
  }

  @include phone {
    height: 75px;
  }
}

.page-title {
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  color: #FFFFFF;

  @include tablet {
    font-size: 36px;
  }
  @include tablet-small {
    font-size: 36px;
  }
  @include phone {
    font-size: 32px;
  }
}
</style>
