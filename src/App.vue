<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
// import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
  },
  mounted() {
    let url = '/api/common/adver-getadver'
    axios.get(url).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style>
</style>
