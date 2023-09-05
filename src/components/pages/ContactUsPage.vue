<template>
  <div>
    <HeaderSection />
    <contact-us-content />
    <FooterSectionVue />
  </div>
</template>

<script>
import ContactUsContent from "../ContactUsContent.vue";
import FooterSectionVue from "../FooterSection.vue";
import HeaderSection from "../HeaderSection.vue";

export default {
  name: "ContactUsPage",
  components: {
    HeaderSection,
    FooterSectionVue,
    ContactUsContent,
  },
};
</script>
