<template>
  <div>
    <slot name="header"></slot>
    <slot name="header"></slot>

    中间再加些内容
    <slot></slot>

    <slot name="footer" :user="user"></slot>
  </div>
</template>
<script>
  export default{
      name:"test-alert",
      components:{
      },
      data () {
          return {
            user:{
              firstname:'ma',
              lastName:'taotao',
            }
          }
      },
      methods:{

      }
  }
</script>
<style>

</style>
