<template>
  <div>
    <HeaderSection />
    <main
      class="-mt-3 min-h-[87vh] max-w-[100vw] px-8 py-4 text-base text-black dark:bg-[#050514] dark:text-slate-100 tab:min-h-[91vh]"
    >
      <h1 align="center" style="font-size: 20pt; margin: 20% 10%">
        THANK YOU FOR YOUR FEEDBACK
      </h1>
    </main>
    <FooterSectionVue />
  </div>
</template>

<script>
import FooterSectionVue from "../FooterSection.vue";
import HeaderSection from "../HeaderSection.vue";

export default {
  name: "FeedbackPage",
  components: {
    HeaderSection,
    FooterSectionVue,
  },
};
</script>
