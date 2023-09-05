<template>
  <div>
    <HeaderSection />
    <IndexMainSection />
    <FooterSectionVue />
  </div>
</template>

<script>
import FooterSectionVue from "../FooterSection.vue";
import HeaderSection from "../HeaderSection.vue";
import IndexMainSection from "../IndexMainSection.vue";

export default {
  name: "IndexPage",
  components: {
    HeaderSection,
    FooterSectionVue,
    IndexMainSection,
  },
};
</script>
