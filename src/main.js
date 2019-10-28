import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import router from './router/index.js'

// 导入文件的时候，默认导入的是目录下的索引文件（index.js index.vue index.json）。
// @是webpack指定的路径别名  @===‘/src’   绝对路径
import router from '@/router'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
