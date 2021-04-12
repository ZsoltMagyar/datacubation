<template>
  <div id="pagination">
    <div id="pagination-controls">
      <div class="page-number page-number--active">1</div>
      <div class="page-number">2</div>
      <div class="page-number">3</div>
      <div class="next-page">Következő ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped lang="scss">
#pagination {
  margin-top: 85px;
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
</style>
