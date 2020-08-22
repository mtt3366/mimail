<template>
  <div>
    <slot name="header"></slot>
    <div v-for="(item, index) in commodities" :key="index">
      <slot name="eachcommodity" :eachcommodity="item"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CommodityList",
        components: {
        },
        props: {
            commodities: Array
        },
        data() {
            return{

            }
        }
    }
</script>

<style scoped>

</style>
