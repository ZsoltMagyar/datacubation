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

.page-header {
  height: 200px;
  background: url('../assets/images/page_header_background.svg') top left no-repeat;
  background-size: cover;
  border-bottom: 4px solid #A2CFD1;
}

.page-header-content {
  //max-width: 1440px;
  height: 100%;
  padding: 0 250px;
  //margin: 0 auto;
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    /*font-family: Encode Sans Expanded;*/
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 60px;

    color: #FFFFFF;
  }
}

</style>
