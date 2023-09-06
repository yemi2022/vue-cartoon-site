<template>
  <div>
    <HeaderSection />
    <main
      class="-mt-3 min-h-[87vh] max-w-[100vw] pb-8 text-base text-black dark:bg-[#050514] dark:text-slate-100 tab:min-h-[91vh]"
    >
      <div>
        <h2 class="pt-7 text-lg font-semibold uppercase tab:py-4 tab:text-sm">
          Coco Movie Trailer
        </h2>
      </div>
      <div class="flex w-[100vw] justify-center px-8 py-4">
        <iframe
          class="h-[30em] w-[60%] tab:h-[15em] tab:w-[100%]"
          src="https://www.youtube.com/embed/xlnPHQ3TLX8?autoplay=1&mute=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div id="rating" class="flex justify-center">
        <form action="/feedback" class="mx-auto text-left">
          <fieldset class="border-2 border-black px-12 py-4">
            <legend>⭐RATE THIS MOVIE</legend>
            <label for="stars">RATING: </label>
            <select
              class="border border-black p-1 text-black"
              name="stars"
              id="stars"
              required
            >
              <option value="">Select a rating...</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
            <br />
            <br />
            <label for="comment">LEAVE A COMMENT:</label>
            <br />
            <textarea
              class="border border-black p-1 text-black"
              name="comment"
              id="comment"
              cols="30"
              rows="5"
              required
            ></textarea>
            <br />
            <br />
            <router-link  to="/feedback">
              <input
              class="w-[7em] place-self-center rounded-xl bg-[#feed49] py-2 text-black transition hover:scale-110 tab:hover:scale-100"
              type="submit"
              value="SUBMIT"
            />
            </router-link>
          </fieldset>
        </form>
      </div>
    </main>
    <FooterSectionVue />
  </div>
</template>

<script>
import FooterSectionVue from "../FooterSection.vue";
import HeaderSection from "../HeaderSection.vue";

export default {
  name: "CocoPage",
  components: {
    HeaderSection,
    FooterSectionVue,
  },
};
</script>
