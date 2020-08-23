import Vue from "vue";
import Router from "vue-router";
import Home from "pages/Home";
import Login from "pages/Login";
import Index from "pages/Index";
import Product from "pages/Product";
import Detail from "pages/Detail";
import Cart from "pages/Cart";
import Order from "pages/Order";
import OrderConfirm from "pages/OrderConfirm";
import OrderList from "pages/OrderList";
import OrderPay from "pages/OrderPay";
import AliPay from "@/pages/AliPay";
import TestIndex from "pages/Test/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index", //默认重定向到/index,也就是说打开'/',进入的是'/index'
      children: [
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/product/:id",
          name: "product",
          component: Product
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: Detail
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/cart", //购物车
      name: "cart",
      component: Cart
    },
    {
      path: "/order", //
      name: "order",
      component: Order,
      children: [
        {
          path: "list",
          name: "order-list",
          component: OrderList
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay
        },
        {
          path: "alipay",
          name: "ali-pay",
          component: AliPay
        }
      ]
    },
    {
      path: "/test", //
      name: "test",
      component: TestIndex
    }
  ]
});
