<template>
  <section class="relative">
    <div class="container">
      <h2 v-if="title" class="mb-56 desk:mb-110">{{ title }}</h2>
      <Swiper
        ref="mySwiper"
        :options="swiperOptions"
        @slideChange="slideChange"
      >
        <template v-for="(item, index) in sliderItems">
          <SwiperSlide :key="index" class="h-full">
            <div class="bg-grey p-24 desk:p-48">
              <i class="seal-icon-quotation-mark text-40 text-main-light" />
              <p style="min-height: 230px" class="mt-16 text-20">
                {{ item.content }}
              </p>
              <div class="flex items-center mt-32">
                <img
                  v-lazy="item.image"
                  width="50"
                  height="50"
                  class="w-50 avatar"
                />
                <div class="px-16">
                  <b>{{ item.name }}</b>
                  <div>{{ item.department }}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </template>
        <div slot="pagination" class="swiper-pagination mt-24" />
      </Swiper>
    </div>
  </section>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper.scss";
// import SwiperCore, { Autoplay } from "swiper/core";

// SwiperCore.use([Autoplay]);
export default {
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      sliderItems: [
        {
          image: "/images/testimonial4.jpg",
          content:
            "I am so lucky to apply successfully to Seal Commerce, because it is a workplace where all employees want to experience: an enthusiastic leader, energetic team members and managers who always consider that empathy comes first…",
          name: "Seb (Anh Tuan)",
          department: "UI/UX Designer",
        },
        {
          image: "/images/testimonial5.jpg",
          content:
            "I remembered that it took exactly 1hour 30 minutes for the interview to apply in Seal Commerce. It means that the working procedure and working style is quite meticulous and professional. I like the working environment like that.",
          name: "Leo (Thanh Sang)",
          department: "UI/UX Designer",
        },
        {
          image: "/images/testimonial6.jpg",
          content:
            "When I’m looking for an ideal working environment, I always try to find one that fosters positive, professional working relationships, and mutual respect. After 2 months working at Seal Commerce, I strongly believe that I’ve made the right decision. I can do what I love and love what I do here.",
          name: "Lucy",
          department: "HR executive",
        },
        {
          image: "/images/testimonial.png",
          content:
            "The working environment is quite comfortable, colleagues are funny but very enthusiastic to support, here we work hard and play hard.",
          name: "Victor Le",
          department: "Front-End Developer",
        },
        {
          image: "/images/testimonial2.png",
          content:
            "There’s just plenty of room for growth at Seal Commerce. Explore new aspects, test out solutions, lead sprint items - the managers are all for it - as long as you’re ready.",
          name: "Cassie Phan",
          department: "Content Manager",
        },
        {
          image: "/images/testimonial3.png",
          content:
            "I like the flexibility of the remote working policy. 15 – minute daily scrum meetings help me to focus on my team’s goals without missing any deadlines. It looks fantastic when I don’t need to go out and stuck in traffic jams these days",
          name: "Elle Duong",
          department: "HR Team",
        },
      ],
      swiperOptions: {
        autoplay: {
          delay: 5000,
        },
        pagination: {
          clickable: true,
          el: ".swiper-pagination",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1450: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      },
      activeSide: 0,
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   },
  // },
  methods: {
    // activeSider(index) {
    //   if (this.activeSide != index) {
    //     this.swiper.slideTo(index);
    //     this.activeSide = index;
    //   }
    // },
    slideChange() {
      this.activeSide = this.swiper.activeIndex;
    },
  },
};
</script>
