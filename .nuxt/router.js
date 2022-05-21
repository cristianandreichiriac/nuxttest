import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a34133c4 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _587c2ad4 = () => interopDefault(import('..\\pages\\fun.vue' /* webpackChunkName: "pages/fun" */))
const _18e8c5fc = () => interopDefault(import('..\\pages\\more-fun\\index.vue' /* webpackChunkName: "pages/more-fun/index" */))
const _544b87eb = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _1d6f20a9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a34133c4,
    name: "about"
  }, {
    path: "/fun",
    component: _587c2ad4,
    name: "fun"
  }, {
    path: "/more-fun",
    component: _18e8c5fc,
    name: "more-fun"
  }, {
    path: "/users/:id?",
    component: _544b87eb,
    name: "users-id"
  }, {
    path: "/",
    component: _1d6f20a9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
