import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './types'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? false
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求成功拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器：请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应成功拦截')

        // 将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 500)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应失败拦截')
        // 将loading移除
        this.loading?.close()
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)

          this.showLoading = true

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
