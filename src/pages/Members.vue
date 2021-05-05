<template>
  <PageHeader title="Tagok"></PageHeader>
  
  <section id="members">
    <template v-for="n in 5" v-bind:key="n">
      <div class="member">
        <div>
          <img src="https://via.placeholder.com/75x75" alt="">
          <h3 class="blue-underline--thin">Tag neve</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ipsum mi feugiat blandit rhoncus gravida. Augue semper mi tristique non eget purus sed. Suspendisse et scelerisque tortor semper. Sed elementum, cras tempus, magna scelerisque arcu nisl nibh vulputate. Gravida tellus tempus dolor lorem nulla id ullamcorper dictum.
          Egestas nascetur massa turpis turpis imperdiet. Aliquet mi quam tristique velit in. Urna sit feugiat dignissim purus.</p>
      </div>
    </template>  
  </section>
  
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "Members",
  components: {PageHeader}
}
</script>

<style scoped lang="scss">

#members {
  max-width: 80%;
  margin: 0 auto;
  padding: 90px 0;
}

.member {
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 40px;
    }
  }

  p {
    padding: 12px 0;
    font-size: 18px;
    line-height: 22px;
    color: #707070;
    border-bottom: 1px solid #2E91A6;
  }
}

</style>
