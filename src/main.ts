import { createApp } from 'vue'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

import './service/axios_demo'
import hyRequest from './service'

import App from './App.vue'

import router from './router/index'
import store from './store/index'
import { setupStore } from './store/index'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
registerApp(app)
setupStore()
app.use(router)
app.use(store)

app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    method: 'GET',
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     console.log('单独请求的config')
    //     return config
    //   },
    //   responseInterceptor: (res) => {
    //     console.log('单独响应的response')
    //     return res
    //   }
    // },
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
