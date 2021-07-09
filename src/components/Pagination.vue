<template>
  <section class="blue-top-border p-20">

    <div class="container flex justify-end">

        <div id="pagination-controls">
          <div class="page-number page-number--active">1</div>
          <div class="page-number">2</div>
          <div class="page-number">3</div>
          <div class="next-page">Következő ></div>
        </div>

    </div>

  </section>

</template>

<script>
export default {
  name: "Pagination"
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

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 22px;
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
