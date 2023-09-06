<template>
  <div>
    <main
      class="-mt-3 max-w-[100vw] text-base text-black dark:bg-[#050514] dark:text-slate-100"
    >
      <h2 class="pt-7 text-lg font-semibold uppercase tab:py-4 tab:text-sm">
        CONTACT US
      </h2>
      <div
        id="contactuspage"
        class="flex min-h-[78vh] flex-wrap justify-center gap-x-[10em] gap-y-4 px-8 py-4 tab:min-h-[86vh] tab:flex-col tab:gap-y-[2em]"
      >
        <div id="contactform">
          <form class="text-left">
            <label for="name">Name</label><br />
            <input
              class="border border-solid border-black p-1 text-black tab:w-[20em]"
              type="text"
              id="name"
              size="40"
              required
            /><br />
            <label for="email">E-mail Address</label><br />
            <input
              class="border border-solid border-black p-1 text-black tab:w-[20em]"
              type="email"
              id="email"
              size="40"
              required
            /><br />
            <label for="telephone">Phone Number</label><br />
            <input
              class="border border-solid border-black p-1 text-black tab:w-[20em]"
              type="text"
              id="telephone"
              size="40"
              required
            /><br />
            <label for="feedback">Message</label><br />
            <textarea
              class="border border-solid border-black p-1 text-black tab:w-[20em]"
              placeholder="Type your message here..."
              id="feedbackmsg"
              cols="42"
              rows="10"
              required
            ></textarea
            ><br />
            <router-link  to="/feedback">
              <input
              class="w-[7em] place-self-center rounded-xl bg-[#feed49] py-2 text-black transition hover:scale-110 tab:hover:scale-100"
              type="submit"
              value="SUBMIT"
            />
            </router-link>
            
          </form>
        </div>

        <div id="map" class="h-[28em] w-[40em] tab:h-[15em] tab:w-[20em]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.179167160275!2d3.4918676113055!3d6.624654221950417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bed5c544073bd%3A0x924dd9c7bacf16e0!2sNew%20Horizons%20Computer%20Learning%20Center%20Ikorodu!5e0!3m2!1sen!2sng!4v1688325991951!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          style="width: 100%; display: flex; justify-content: center"
          id="address"
        >
          <address>
            Visit us @ New Horizons Computer Learning Center Ikorodu, 112, Lagos
            road, beside FIRS building, Haruna Bus stop Ikorodu, 104211, Lagos
          </address>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ContactUsContent",
};
</script>

<style></style>
