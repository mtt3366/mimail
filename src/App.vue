<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data (){
    return {
      res: {}
    }
  },
  mounted() {
      this.axios.get('/user/login').then((res)=> {
          this.res = res
      })
  }
}
</script>

<style>
  @import "~@/assets/sass/reset.scss";
  @import "~@/assets/sass/config.scss";
</style>
