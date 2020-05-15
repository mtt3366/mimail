<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="`/#/pruduct/${item.id}`">
              <img :src="item.img" alt="">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner-box"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
  import ServiceBar from "components/ServiceBar"
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
      name: 'index',
      components: {
          ServiceBar,
          Swiper,
          SwiperSlide
      },
      directives: {
          swiper: directive
      },
      data() {
          return {
              swiperOptions:{
                  pagination: {
                      el: '.swiper-pagination',
                      clickable:true
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
                  autoplay:true,
                  loop:true,
                  effect:'cube',//切换效果
                  cubeEffect: {//切换效果的配置
                      slideShadows: true,
                      shadow: true,
                      shadowOffset: 100,
                      shadowScale: 0.6
                  },
              },
              slideList:[
                  {
                      id:'42',
                      img:'/imgs/slider/slide-1.jpg'
                  },
                  {
                      id:'45',
                      img:'/imgs/slider/slide-2.jpg'
                  },
                  {
                      id:'46',
                      img:'/imgs/slider/slide-3.jpg'
                  },
                  {
                      id:'47',
                      img:'/imgs/slider/slide-4.jpg'
                  },
                  {
                      id:'48',
                      img:'/imgs/slider/slide-5.jpg'
                  }
              ],
          }
      }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/base.scss';
</style>
