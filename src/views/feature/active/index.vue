<template>
    <div class="wrap">
        <!-- 头部 -->
        <div class="head-wrap">
            <Header></Header>
        </div>
        
        <!-- 内容区域 -->
        <div>
            <div class="content-wrap">
                <div class="content-left">
                    <img src="../../../style/imgs/lunbo2.jpg" alt="">
                </div>
                <div class="content-right">
                    <div class="content-title">关于我院党总支近期将举办党的十九大知识竞赛的通知</div>
                    <div class="content-info">
                        <div class="time">
                            <span>2017-06-14</span>
                            <span>14.53.56</span>
                        </div>
                        <div class="look-nun">
                            <span>
                                <i></i>
                            </span>
                            <span>
                                727
                            </span>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
        <!-- 没有加载内容了 -->
        <div class="none">
            我也是有底线的
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

<style scoped lang='scss'>
.wrap{
    font-size: 18px;
    padding-top:50px; 
    // 头部固定
        .head-wrap{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
    .content-wrap{
        padding: 10px;
        display: flex;
        align-items: center;
        height: 100px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        .content-left{
            width: 80px;
            height: 100%;
            margin-right: 10px;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content-right{
            font-size: 15px;
            color:#333;
            flex:3;
            .content-title{
                margin-bottom:10px;
            }
            span{
                font-size: 12px;
            }
            .content-info{
                display: flex;
                justify-content: space-between;

            }
        }   
    }
    .none{
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        color: #333;
    }
}

</style>