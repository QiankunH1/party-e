<template>
    <div class="inner" >
        <!-- 头部 -->
        <div class="header">
            <div class="headwrap">
                <div class="img">
                        <img src="../../style/imgs/header-dangjian.png" alt="">
                </div>
                <div class=" login flex-item" @click="handlelogin">登录</div>
            </div>    
        </div>
        
        <!-- 轮播图 -->
        <div class="swipe-wrap">
            <van-swipe :autoplay="3000">
                <van-swipe-item  class="img-wrap" v-for="(item,index) in rows" :key='index' >
                    <router-link to="">    
                        <img :src='item.imgUrl'>
                        <span class="img-wrap-text">{{item.title}}</span>
                    </router-link>                      
                </van-swipe-item>
               
            </van-swipe>
        </div>
        
        <!-- 中间6部分功能 -->
        <div class="list-wrap">
            <div class="list ">
                <router-link class="flex-item" to="/news">
                    <div><img src="../../style/imgs/list.png" alt=""></div>
                    <div>信工新闻眼</div>
                </router-link>
               <router-link class="flex-item" to="/life">
                    <div><img src="../../style/imgs/list.png" alt=""></div>
                    <div>掌上组织生活</div>
               </router-link>
                <router-link class="flex-item" to="/exchange">
                    <div><img src="../../style/imgs/list.png" alt=""></div>
                    <div>党员云互动</div>
                 </router-link>
            </div>
            <div class="list ">
                 <router-link class="flex-item" to="/onepass">
                    <div><img src="../../style/imgs/list.png" alt=""></div>
                    <div>党建一点通</div>
                 </router-link>
                 <router-link class="flex-item" to="/identity">
                    <div><img src="../../style/imgs/list.png" alt=""></div>
                    <div>党员亮身份</div>
                </router-link>
                <router-link class="flex-item" to="/today">
                    <div><img src="../../style/imgs/list.png" alt=""></div>
                    <div>党史上的今天</div>
                </router-link>
            </div>
        </div>
        <!-- 中间图片 -->
        <div class="center-img-wrap">
            <img src="../../style/imgs/lead.png" alt="">
        </div>
        <!-- 特色建党 -->
        <div class="feature-wrap">
            <div class="feature">
                <div class="part-list" ></div>
                <div class="part-list" >
                    <router-link class="part part-top" to="/study"></router-link>
                    <router-link class="part part-bottom" to="/system"></router-link>
                </div>
                <div class="part-list">
                    <router-link class="part part-top" to="/photo"></router-link>
                    <router-link class="part part-bottom" to="/active"></router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
   import axios from 'axios' 
    export default {
        data(){
            return{
               rows:[],
            }
        },
        components: {
        axios,
        },
        methods:{
            handlelogin(){
                this.$router.push('/login')
            },
            getdata(){
                axios.get('http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0').then(res=>{
                    console.log(res)
                   this.rows=res.data.rows
                   console.log(this.rows)
                })
            }
            
        },
        created(){
           this.getdata()
        }
    }
</script>

<style scoped lang='scss'>
.inner{
    margin: 50px 0px 46px;
}

.header{
 position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99;

 
}

.headwrap{
    // position: absolute;
    display: flex;
    width: 100%;
    height:50px;
    padding: 4px;
    background-color: #c50206;
    align-items: center;
    justify-content: space-between;
    
    
}
.img img{
    height: 40px;
}
.login{
    font-size: 16px;
    color: #fff;
}
.swipe-wrap{
    height: 200px;
}
.van-swipe{
    height: 100%;
}
.img-wrap{
    width: 100%;
    height: 100%;
    position: relative;
    .img-wrap-text{
        position: absolute;
        bottom: 0;
        left: 0; 
        height: 25px;
        line-height: 25px;
        padding-left: 5px;
        font-size: 12px;
        color: #fff;
        background: rgba($color: #000000, $alpha: 0.6)
    }
}
.img-wrap img{
    width: 100%;
    height: 100%;
}
.list-wrap{
    height: 200px;
    background:url('../../style/imgs/bt_bg.png') no-repeat;
    background-size: 100% 100%;
    width:100%;
    .list{
        display: flex;
        font-size: 12px;
        height: 100px;
        align-items: center;
    }
        .flex-item{
            height: 60px;
            flex: 1;
            text-align: center;
            img{
                width: 40px;
                height: 40px;
            }
        }     
        
        }
    .center-img-wrap{
        height: 100px;
        img{
            height: 100%;
            width:100%;
        }       
    }
    .feature-wrap{
        height: 200px;
        background: url('../../style/imgs/feature.png') no-repeat;
        background-size: 100% 100%;
    }
    .feature{
        display: flex;
        // align-items: center;
        height: 200px;
        width:100%;
        .part-list{  
            flex:1;
            height:200px;
            // background-color: pink;
            display: flex;
            flex-direction: column;              
                .part-top{
                    height: 100px;
                    width: 100%;
                    // background: #c50206;
                }
                .part-bottom{
                    height: 100px;
                    width: 100%;
                    // background:greenyellow;
                }
           
        }
    }
</style>
