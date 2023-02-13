import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./firebase"

window.toastr = require("toastr")
toastr.options = {
  preventDuplicates: true,
  showDuration: 500,
  positionClass: "toast-top-right"
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
