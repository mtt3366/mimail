<template>
  <div>
    <div v-for="(column, index) in columnList" :key="index">
        <commodity-list :commodities="column.commodityList" >
          <template v-slot:header>
            <h2>{{column.columnName}}</h2>
          </template>
          <!-- 这里只需要给Commodity组件传入数据，响应Commodity组件的clickCommodity事件即可。
              事件不必携带参数，完全符合父到子的数据流向，而不会发生子组件又给父组件反向发数据的情况 -->
          <template v-slot:eachcommodity="{eachcommodity}">
            <commodity :mydatamrops="eachcommodity" @clickCommodity="onCommodityClick(eachcommodity)"></commodity>
          </template>

        </commodity-list>
    </div>
  </div>
</template>

<script>
    import CommodityList from "./CommodityList"
    import Commodity from "./Commodity"

    export default {
        name: "ColumnList",
        components: {
            CommodityList,
            Commodity
        },
        data() {
            return {
                columnList: [{
                    columnName: '我是卡片组1',
                    commodityList: ['卡片1', '卡片2', '卡片3']
                }, {
                    columnName: '我是卡片组2',
                    commodityList: ['卡片1', '卡片2', '卡片3']
                }, {
                    columnName: '我是卡片组3',
                    commodityList: ['卡片1', '卡片2', '卡片3']
                }]
            }
        },
        methods: {
            onCommodityClick(eachcommodity) {
                console.log('eachcommodity',eachcommodity)
            }
        }

    }
</script>

<style scoped>

</style>
