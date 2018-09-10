import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<app />' }
const About = { template: '<p> about page </p>' }

const routes = {
  '/': Home,
  '/about': About
}


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
