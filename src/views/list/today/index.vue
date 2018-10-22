<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
             <div v-html='data' class="content">
              
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
    export default {
        data(){
            return{
                data:''
            }
        },
        components:{
            Header,
        },
        methods:{
            getnews(){
                axios.get('http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70506%2Findex.html').then(res=>{
                    console.log(res.data)
                    this.data=res.data
                })
            }
        },
        created(){
            this.getnews()
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    padding-top: 50px;
    //固定头部
    .head-wrap{
        position: fixed;
        top: 0;
        width: 100%;
    }
     .content{
        font-size: 12px;
        line-height: 2;
        color: #000;
     /deep/  img{
    display: block;
    max-width: 100%;
    margin: 20px auto;
    // margin-bottom: 20px; 
        }
    }
}
</style>