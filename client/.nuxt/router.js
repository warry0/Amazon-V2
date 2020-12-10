import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25d1aba0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _01bb96a0 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _022808e1 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _49a4ea18 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _236f8719 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _25d1aba0,
    name: "login"
  }, {
    path: "/profile",
    component: _01bb96a0,
    name: "profile"
  }, {
    path: "/signup",
    component: _022808e1,
    name: "signup"
  }, {
    path: "/products/:id?",
    component: _49a4ea18,
    name: "products-id"
  }, {
    path: "/",
    component: _236f8719,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
