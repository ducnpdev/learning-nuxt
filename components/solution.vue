<template>
  <section class="solutions text-white">
    <div class="grid grid-cols-1 ipad:grid-cols-2">

      <a
        background-image ="'images/home/Banner-07.png'"
        data-aos="fade-up"
        href="https://gempages.net/"
        target="_bank"
        class="solutions-item hover:text-white flex flex-col justify-end pc:p-80 tab:p-32 p-24 pt-56 bg-cover bg-bottom bg-no-repeat"
      >
        <img src="images/home/Banner-11.png" width="600" height="300" class="w-full item-img" />
        <div class="mt-32 relative tab:flex items-center">
          <img
            src="images/logo/gempages.png"
            width="60"
            height="60"
            class="w-46 mb-16 tab:mb-0 tab:w-60 mr-32"
            alt="Gempages Logo"
          />
          <h4 class="tab:mt-15 text-white">
            The ultimate drag & drop Page Builder on Shopify. Click to see more!
          </h4>
        </div>
      </a>

      <a
     background-image="'/images/home/Banner-08.png'"
        href="https://ecomsolid.com/"
        target="_bank"
        data-aos="fade-up"
        data-aos-delay="300"
        class="solutions-item hover:text-white flex flex-col justify-end pc:p-80 tab:p-32 p-24 pt-56 bg-cover bg-bottom bg-no-repeat"
      >
        <img src="images/home/Banner-12.png" width="600" height="300" class="w-full item-img" />
        <div class="mt-32 relative tab:flex items-center">
          <img
            src="images/logo/ecomsolid.png"
            width="60"
            height="60"
            class="w-46 mb-16 tab:mb-0 tab:w-60 mr-32"
            alt="Ecomsolid Logo"
          />
          <h4 class="tab:mt-15 text-white">
            The all in one Store Design Solution. Click to see more!
          </h4>
        </div>
      </a>

    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.solutions-item {
  .item-img {
    transition: all 0.3s;
  }
  &:hover {
    .item-img {
      transform: scale(1.1);
    }
  }
}
</style>
