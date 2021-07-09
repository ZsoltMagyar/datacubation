<template>
  <PageHeader title="A programról"></PageHeader>

  <ProgramAbout></ProgramAbout>

  <ProgramBenefits></ProgramBenefits>

  <ProgramToWhom></ProgramToWhom>

  <ProgramSupport></ProgramSupport>

  <ProgramJoin></ProgramJoin>

  <ProgramRoadmap></ProgramRoadmap>

</template>

<script>
import PageHeader from "../components/PageHeader";
import ProgramAbout from "@/pages/program-sections/ProgramAbout";
import ProgramBenefits from "@/pages/program-sections/ProgramBenefits";
import ProgramToWhom from "@/pages/program-sections/ProgramToWhom";
import ProgramSupport from "@/pages/program-sections/ProgramSupport";
import ProgramJoin from "@/pages/program-sections/ProgramJoin";
import ProgramRoadmap from "@/pages/program-sections/ProgramRoadmap";
export default {
name: "Program",
  components: {
    PageHeader,
    ProgramAbout,
    ProgramBenefits,
    ProgramToWhom,
    ProgramSupport,
    ProgramJoin,
    ProgramRoadmap,
  }
}
</script>

<style scoped lang="scss">
</style>
