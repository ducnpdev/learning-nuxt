<template>
  <div>
    <h1 style="display: none">
      It doesn’t matter what your role is. You’ll be supported to do your best
      work, enjoy your day-to-day life at Seal and get where you want to go...
      We created an environment where Enthusiastic people are Empathized and
      Empowered.
    </h1>

    <section class="py-56 desk:py-112 relative text-20">
      <div class="container">
        <div class="flex flex-col ipad:flex-row -mx-16">
          <div class="w-full pb-16 pc:pb-0 pc:w-7/12 px-16">
            <!--
            <h2>{{ $t('home_page.empowering') }} <br class="tab:hidden"/> {{ $t('home_page.e_Commerce') }} <br> {{ $t('home_page.experience') }}</h2>
          --></div>
          <div class="w-full pc:w-5/12 px-16">
            <p>
              {{ $t('home.title_sub') }}
            </p>
          </div>
        </div>
      </div>
      <!--
      <img v-lazy="'/images/Team_Pattern.svg'" width="135" height="270" class="absolute left-0 top-0 hidden desk:block image-parten"/>
      -->
    </section>

    <Solutions />

  <!--
    <ClientTestimonial
      class="my-56 desk:my-112"
      :title="$t('home.title')"
    />
    -->
  </div>
</template>

<script>
import Logo from "~/components/logo.vue";
import ClientTestimonial from "~/components/client/testimonial";
import Solutions from "~/components/solution";

export default {
  components: {
    Logo,
    ClientTestimonial,
    Solutions
  },
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
