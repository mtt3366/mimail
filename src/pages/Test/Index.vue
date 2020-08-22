<template>
  <div>
    <div class="link">
      <span v-for="(link,index) in routerLinks" class="route-item" :key="index">
        {{index+1}}. <router-link  :to="link.path" >{{link.desc}}</router-link>
      </span>

    </div>
    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "TestIndex",
        data() {
            return {
                routerLinks:[]
            }
        },
        methods: {
          getAllChildsRoute(){//获取所有的子路由
              let routes = {
                  children: this.$router.options.routes
              };

              const route = this.$route.matched;

              let resultRoutes = []
              route.forEach((ele1)=>{
                  resultRoutes = routes.children.find((ele2) => (ele2.name === ele1.name));
              })
              return resultRoutes.children
          }
        },
        mounted(){
            // console.log(this.$route)//当前路由的信息
            // console.log(this.$router)//所有路由的信息
            console.log(this.getAllChildsRoute())
            const allchildRoute = this.getAllChildsRoute()
            const {fullPath} = this.$route
            this.routerLinks = allchildRoute.map(ele => ({
                path:`${fullPath}/${ele.path}`,
                desc:ele.meta.desc
            }))

        }
    }
</script>

<style scoped>
.route-item{
  margin-right:10px;
}
</style>
