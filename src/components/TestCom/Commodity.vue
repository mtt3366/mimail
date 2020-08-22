<template>
  <div @click="handleClick" class="wrapper">
    <div class="title">{{mydatamrops}}</div>
    <div class="img-wrapper"><img src="/imgs/ads/ads-1.png" alt=""></div>
  </div>
</template>

<script>
    export default {
        name: "Commodity",
        props: {
            mydatamrops:String
        },
        methods: {
            handleClick() {
                this.$emit('clickCommodity')
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixin.scss';

  .wrapper {
    width: 100px;

    .img-wrapper {
      @include flex(center, center);

      img {
        width: 100px;
      }
    }
  }
</style>
