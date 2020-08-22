<template>
  <div>
    <test-slot>
      <template #header="{users:person}">
        <h1>im header</h1>
        {{person.lastName}}
      </template>
      <template #footer="slotProps">
        <h1>im footer</h1>
        <h2>{{slotProps.user.lastName}}</h2>
      </template>
    </test-slot>
  </div>
</template>

<script>
    import TestSlot from "./TestSlot"

    export default {
        name: "TestFather",
        components: {
            TestSlot
        }
    }
</script>

<style scoped>

</style>
