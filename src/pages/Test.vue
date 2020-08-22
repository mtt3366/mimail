<template>
  <div>
    <test-alert>
      <template #header="{users:person}">
        <h1>im header</h1>
        {{person.lastName}}
      </template>
      <template #footer="slotProps">
        <h1>im footer</h1>
        <h2>{{slotProps.user.lastName}}</h2>
      </template>
    </test-alert>
    <a-button type="primary" @click="showMsg">Button</a-button>
  </div>
</template>

<script>
    import TestAlert from "components/TestAlert"

    export default {
        name: "Test",
        components: {
            TestAlert
        },
        methods: {
            showMsg() {
                this.$message.info('This is a normal message');
            }
        }
    }
</script>

<style scoped>

</style>
