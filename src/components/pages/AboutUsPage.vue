<template>
  <div>
    <HeaderSection />
    <about-us-content />
    <FooterSectionVue />
  </div>
</template>

<script>
import AboutUsContent from "../AboutUsContent.vue";
import FooterSectionVue from "../FooterSection.vue";
import HeaderSection from "../HeaderSection.vue";

export default {
  name: "AboutUsPage",
  components: {
    HeaderSection,
    FooterSectionVue,
    AboutUsContent,
  },
};
</script>
