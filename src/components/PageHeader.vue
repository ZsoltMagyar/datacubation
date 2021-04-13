<template>
  <div class="page-header">
    <div class="page-header-content">
      <h2>{{ title }}</h2>
    </div>
  </div>
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
  height: 200px;
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

.page-header-content {
  height: 100%;
  padding-left: 250px;
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: #FFFFFF;
  }

  @include tablet {
    padding-left: 100px;

    h2 {
      font-size: 36px;
    }
  }

  @include tablet-small {
    padding-left: 45px;

    h2 {
      font-size: 36px;
    }
  }

  @include phone {
    padding-left: 25px;

    h2 {
      font-size: 32px;
    }
  }

}

</style>
