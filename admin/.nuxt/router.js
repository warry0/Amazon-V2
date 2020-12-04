import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e81151c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _071c2882 = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _5f67e142 = () => interopDefault(import('../pages/owner.vue' /* webpackChunkName: "pages/owner" */))
const _5aa7b3e8 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _463cdf60 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _2e38efe1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0e81151c,
    name: "about"
  }, {
    path: "/category",
    component: _071c2882,
    name: "category"
  }, {
    path: "/owner",
    component: _5f67e142,
    name: "owner"
  }, {
    path: "/products",
    component: _5aa7b3e8,
    name: "products"
  }, {
    path: "/products/:id",
    component: _463cdf60,
    name: "products-id"
  }, {
    path: "/",
    component: _2e38efe1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
