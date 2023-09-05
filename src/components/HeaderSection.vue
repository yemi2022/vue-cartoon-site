<template>
  <header
    class="absolute top-0 flex h-12 w-[100%] items-center justify-between bg-[#feed49] shadow-3xl dark:bg-[#c11e27] tab:px-1"
  >
    <router-link to="/">
      <div id="logoandname" class="ml-[20em] flex items-center gap-2 tab:ml-4">
        <img
          id="headerlogo"
          class="w-8 rounded-md tab:w-5"
          src="../assets/cinema-photo2.jpg"
          alt="logo"
        />
        <h1
          id="headermaintext"
          class="text-2xl font-semibold text-[#c11e27] dark:text-slate-100 tab:text-sm"
        >
          CARTOON MOVIE CINEMA
        </h1>
      </div>
    </router-link>
    <nav
      class="text-md mr-10 flex flex-row gap-1 dark:text-slate-100 tab:hidden"
    >
      <router-link
        class="rounded-3xl px-4 py-2 transition hover:scale-95 hover:bg-black hover:font-semibold hover:text-[#feed49] dark:hover:bg-slate-100 dark:hover:text-[#c11e27]"
        to="/"
        >HOME</router-link
      >
      <router-link
        class="rounded-3xl px-4 py-2 transition hover:scale-95 hover:bg-black hover:font-semibold hover:text-[#feed49] dark:hover:bg-slate-100 dark:hover:text-[#c11e27]"
        to="/contact"
        >CONTACT US</router-link
      >
      <router-link
        class="rounded-3xl px-4 py-2 transition hover:scale-95 hover:bg-black hover:font-semibold hover:text-[#feed49] dark:hover:bg-slate-100 dark:hover:text-[#c11e27]"
        to="/about"
        >ABOUT US</router-link
      >
    </nav>
    <div id="for-mobile" class="lg:hidden">
      <button
        id="hamburger-button"
        @click="toggleMenu"
        class="relative h-8 w-8 cursor-pointer text-2xl text-[#c11e27] transition dark:text-slate-100 lg:hidden"
      >
        &#9776;
      </button>
      <button
        id="close-button"
        @click="toggleMenu"
        class="relative hidden h-8 w-8 cursor-pointer text-3xl text-[#c11e27] transition dark:text-slate-100 lg:hidden"
      >
        &times;
      </button>
      <nav
        id="hidden-nav"
        class="text-md absolute left-[70vw] top-12 hidden w-[30vw] flex-col gap-3 bg-black px-4 py-4 text-xs text-slate-100 opacity-90"
      >
        <router-link class="" to="/">HOME</router-link>
        <router-link class="" to="/contact">CONTACT US</router-link>
        <router-link class="" to="/about">ABOUT US</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    toggleMenu() {
      document.getElementById("hidden-nav").classList.toggle("hidden");
      document.getElementById("hidden-nav").classList.toggle("flex");
      document.getElementById("close-button").classList.toggle("hidden");
      document.getElementById("close-button").classList.toggle("flex");
      document.getElementById("hamburger-button").classList.toggle("hidden");
      document.getElementById("hamburger-button").classList.toggle("flex");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
