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
  </div>
</template>

<script>
import TestAlert from "components/TestAlert"

export default {
  name: "Test",
  components: {
    TestAlert
  }
}
</script>

<style scoped>

</style>
