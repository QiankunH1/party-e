<template>
    <div class="wrap">
        <div class="head-wrap">
             <Header></Header>
        </div>
       
        <div>
            <div class="img-wrap">
                <img src="../../../style/imgs/lead.png" alt="">
            </div>
            <div class="list">
                <router-link class="item" to="/politics" >                 
                        <div>
                            <i class="iconfont icon-shoujianxiang-hongqiyoujian"></i>
                        </div>
                        <div>
                            政治学习
                        </div>
                   
                </router-link >
                <router-link  class="item" to="">
                   <div>
                       <i class="iconfont icon-beianxinxiyuandi"></i>
                   </div>
                   <div>
                       思想汇报
                   </div>
                </router-link>
                <router-link  class="item" to="">
                   <div>
                       <i class="iconfont icon-jiaonafeiyong"></i>
                   </div>
                   <div>
                       心得总结
                   </div>
                </router-link>
                <router-link  class="item" to="/minzhupingyi">
                   <div>
                       <i class="iconfont icon-minzhupingyi"></i>
                   </div>
                   <div>
                       民主评议
                   </div>
                </router-link>
                <router-link  class="item" to="/organization">
                   <div>
                       <i class="iconfont icon-zuzhijiegou"></i>
                   </div>
                   <div>
                      流动党员找组织
                   </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from'@/components/Header'
    export default {
        components:{
            Header,
        }
    }
</script>

<style scoped lang="scss">
.wrap{
    margin-top: 44px;
    font-size: 14px;
    .img-wrap{
        height: 186px;
        width: 100%;
        img{
            height: 100%;
            width: 100%;
        }
    }
    // 固定头部
    .head-wrap{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width:100%;
        box-sizing: border-box;
        .item{
            padding-top: 20px;
            flex-basis: 33.33334%;
             height: 144px;
             box-sizing: border-box;
             text-align: center;
        }
        //小图标
        .iconfont{
            font-size: 85px;
        }
        .icon-shoujianxiang-hongqiyoujian{
            color: #e11b1c;
        }
        .icon-beianxinxiyuandi{
            color: #85cb68;
        }
        .icon-jiaonafeiyong{
            color: #fda005;
        }
        .icon-minzhupingyi{
            color: #ff7461;
        }
        .icon-zuzhijiegou{
            color: #02d2bc;
        }
    }
    
}
</style>