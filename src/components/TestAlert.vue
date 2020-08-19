<template>
  <div>
    <slot name="header" :users="user"></slot>
    <slot name="header" :users="user"></slot>

    <div>中间再加些内容</div>

    <slot name="footer" :user="user"></slot>
  </div>
</template>
<script>
export default {
  name: "test-alert",
  components: {},
  data() {
    return {
      user: {
        firstname: 'ma',
        lastName: 'taotao',
      }
    }
  },
  methods: {}
}
</script>
<style>

</style>
