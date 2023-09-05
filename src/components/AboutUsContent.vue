<template>
  <div>
    <main
      class="-mt-3 max-w-[100vw] text-sm text-black dark:bg-[#050514] dark:text-slate-100"
    >
      <h2 class="pt-7 text-lg font-semibold uppercase tab:py-4 tab:text-sm">
        ABOUT US
      </h2>
      <div id="aboutdiv" class="min-h-[78vh] px-8 py-4 tab:min-h-[86vh]">
        <div style="width: 100%; display: flex; justify-content: center">
          <img
            class="rounded-lg"
            src="../assets/cinema-photo2.jpg"
            width="100px"
            alt="picture"
          />
        </div>
        <div class="mx-auto my-8 w-[70%] text-base tab:w-[100%]">
          <p id="aboutus">
            At Cartoon Movie Cinema, we believe in the magic of animation and
            its ability to transport us to fantastical worlds, ignite our
            imaginations, and evoke the pure joy of storytelling. Our website is
            dedicated to bringing you the best of the animated world, catering
            to all ages and tastes. Whether you're a nostalgic fan of classic
            cartoons or a young enthusiast excited about the latest releases,
            we've got something special in store for you!
          </p>
        </div>
        <div id="ourpartners" class="flex w-[100%] justify-center gap-2">
          <img
            src="../assets/nickelodeon.jpeg"
            alt="nickelodeon"
            class="w-[100px] rounded-lg"
          />
          <img
            src="../assets/walt-disney.jpg"
            alt="disney"
            class="w-[100px] rounded-lg"
          />
          <img
            src="../assets/warner-bros.jpg"
            alt="warner bros"
            class="w-[100px] rounded-lg"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AboutUsContent",
};
</script>

<style></style>
