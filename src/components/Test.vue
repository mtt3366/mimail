<template>
  <div>
    <button @click="toggle">click</button>
    <Modal
      :showModal="showModal"
      @submit="showModal = false"
      @cancel="showModal = false"
      :title="'阿啥的看法就拉开第三方了咖啡机'"
      btnType="1"
    >
      <template v-slot:body>
        <span>我是body</span>
        <span>我是body</span>
      </template>
    </Modal>
  </div>
</template>
<script>
  import Modal from "components/Modal"
  export default{
      name:"test",
      components:{
          Modal
      },
      data () {
          return {
            showModal:true
          }
      },
      methods:{
          toggle(){
              this.showModal = true
          }
      }
  }
</script>
<style>

</style>
