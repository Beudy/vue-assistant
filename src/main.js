// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-material/dist/vue-material.css'

var VueMaterial = require('vue-material')

Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: {
      color: 'blue',
      hue: 700
    },
    accent: 'red'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
