<template>
  <PageHeader title="GYIK"></PageHeader>

  <section id="faq">

    <div class="container">

      <template v-for="n in 5" v-bind:key="n">
        <div class="question">
          <h3 class="blue-underline--thin">Kérdés</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ipsum mi feugiat blandit rhoncus gravida. Augue semper mi tristique non eget purus sed. Suspendisse et scelerisque tortor semper. Sed elementum, cras tempus, magna scelerisque arcu nisl nibh vulputate. Gravida tellus tempus dolor lorem nulla id ullamcorper dictum.
            Egestas nascetur massa turpis turpis imperdiet. Aliquet mi quam tristique velit in. Urna sit feugiat dignissim purus.</p>
        </div>
      </template>

    </div>

  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "GYIK",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

.question {

  margin-bottom: 24px;

  p {
    padding: 12px 0;
    font-size: 18px;
    line-height: 22px;
    color: #707070;
    border-bottom: 1px solid #2E91A6;
  }
}

</style>
