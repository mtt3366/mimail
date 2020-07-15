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
      this.getUser();
      this.getCartCount();
  },
   methods:{
       getUser(){
           this.axios.get('/user').then(()=>{
           })
       },
       getCartCount(){
           this.axios.get('/carts/products/sum').then((res)=>{
              console.log(res)
           })
       }
   }
}
</script>

<style>
  @import "~@/assets/scss/reset.scss";
  @import "~@/assets/scss/config.scss";
</style>
