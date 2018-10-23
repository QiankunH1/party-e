import store from '../vuex/index'

import axios from 'axios'

const env = process.env.NODE_ENV
let baseURL = env=='development'?'/api':'/'

// let baseURL = '/api'
const instance = axios.create({
    baseURL:'/api',
    timeout:1500,
})
const xhr = {
    get(url,data,config){
        return new Promise ((resolve,reject)=>{
            console.log(store.state.token)
            if(store.state.token){
                config = {
                    ...config,
                    headers: {
                        'token': store.state.token
                    }
                }
            }

            console.log(config)
            instance.get(url,{params:data, ...config}).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            if(store.state.token){
                config = {
                    ...config,
                    headers: {
                        'token': store.state.token
                    }
                }
            }
            instance[methods](url,data,config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,data,config){
        return this.fetch(url,data,config,'post')
    }

}
export default xhr