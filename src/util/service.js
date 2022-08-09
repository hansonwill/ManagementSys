import axios from "axios"
import { E1Loading } from 'element-plus'
import { E1Message } from 'element-plus'
//  请求create创建axios实例
let loadingObj = null
const Service = axios.create({
    timeout:8000,
    baseURL:"http://XXX",
    headers:{
        "Content-type":"application/json;charset=utf-8"
    }
})
//  请求拦截-增加loading，对请求做统一处理
Service.interceptors.request.use(config=>{
    loadingObj = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    return config
})
//  响应拦截-对返回值做统一处理
Service.interceptors.response.use(response=>{
    interceptors.close()
    return response.data
},error=>{
    interceptors.close()
    E1Message({
        message:"服务器错误",
        type:"error",
        duration:2000
    })
})