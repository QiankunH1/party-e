<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <ul class="content-wrap">
            <li class="content">
                <div class="user-info clearfix">
                    <div class="flr interact">
                        党员互动
                    </div>
                    <div class="fll img-wrap">
                        <img src="../../../style/imgs/touxiang.png" alt="">
                    </div>
                    <div class="fll">
                        <div>用户名</div>
                        <div class="time-info">
                            <i></i>
                            <span>2018-10-7 20:32:56</span>
                            <i></i>
                            <span>公开</span>
                        </div>
                    </div>
                    
                </div>
                <div>
                    回复内容区域：中国人民安定繁荣回复内容区域：中国人民安定繁荣回复内容区域：中国人民安定繁荣回复内容区域：中国人民安定繁荣
                </div>
                <div class="reply clearfix">
                    <span class="flr">
                        <i></i>
                        <span>回复</span>
                    </span>
                </div>
            </li>          
            <li class="content">
                <div class="user-info clearfix">
                    <div class="flr interact">
                        党员互动
                    </div>
                    <div class="fll img-wrap">
                        <img src="../../../style/imgs/touxiang.png" alt="">
                    </div>
                    <div class="fll">
                        <div>用户名</div>
                        <div class="time-info">
                            <i></i>
                            <span>2018-10-7 20:32:56</span>
                            <i></i>
                            <span>公开</span>
                        </div>
                    </div>
                    
                </div>
                <div>
                    回复内容区域：中国人民安定繁荣回复内容区域：中国人民安定繁荣回复内容区域：中国人民安定繁荣回复内容区域：中国人民安定繁荣
                </div>
                <div class="reply clearfix">
                    <span class="flr">
                        <i></i>
                        <span>回复</span>
                    </span>
                </div>
            </li>          
        </ul> 
        <div class='no-more'>
            没得更多数据了
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
    import Header from '@/components/Header'
    export default {
        components:{
            Header,
        },
        methods:{
            getdata(){
                axios.get(`http://211.67.177.56:8080/hhdj/forum/forumList.do?page=1&rows=10&type=0&cates=0`)
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    //页面样式
    position: absolute;
    top:0;
    bottom: 0;
    width:100%;
    font-size:16px;
    color: #616161;
    background: #efeff4;
    padding-top:50px;
    //浮动样式
    .fll{
        float: left;
    }
    .flr{
        float: right;
    }
    .clearfix{
    &::after{
        content:'';
        display: block;
        clear: both;
        visibility: hidden;
    }
}
// 头部固定定位
    .head-wrap{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }

.content-wrap{
    .content{
        margin-bottom:10px;
        padding: 15px;
        background-color: #fff;
        .img-wrap{
            width: 35px;
            height: 35px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
                border-radius:50%;
            }
        }
        .time-info{
            font-size: 12px;
        }
        .interact{
            // font-size: 12px;
            // color: #c50206;
            // // height: 26px;
            // // line-height: 26px;
            // // padding: 3px 0;
            // width: 66px;
            // border: 1px solid #c50206;
            // border-radius: 15%/50%;
                font-size: 12px;
                padding: 4px 8px;
                color: red;
                border: 1px solid red;
                border-radius: 15%/50%;
                    }
                }
                .reply{
                font-size: 14px;
              }
            }
            .no-more{
                text-align: center;
            }
          

}
</style>