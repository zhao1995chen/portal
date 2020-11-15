import Vue from 'vue' // 引用 Vue
import App from './App.vue' // 引用 App.vue
import ElementUI from 'element-ui' // 引用 Element 套件
import 'element-ui/lib/theme-chalk/index.css' // 引用套件的 CSS
import locale from 'element-ui/lib/locale/lang/zh-TW' // 設定地區語言
import router from './router' // 引用路由

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })  // 讓 ElementUI 在 Vue 裡有被使用

new Vue({
  render: h => h(App), // 將 App.vue
  router // 加入路由
}).$mount('#app') // 渲染到 HTML 的 id="app" 的範圍裡
