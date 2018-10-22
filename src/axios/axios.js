import axios from 'axios'

var baseURL =  "http://211.67.177.56:8080"
var instance = axios.create({
    baseURL,
    timeout: 1500,
  });
   const xhr={
   get(){
       return new Promise ((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })   
       })

    },
   post(){
       return new Promise ((resolve,reject)=>{
            instance.post(url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })   
       })

    }
}
export default xhr
