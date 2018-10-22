<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div>
            <div class="pic-wrap">
                <img src="../../style/imgs/jifen.png" alt="">
                <div class="pic-text">68.1</div>
            </div>
             <router-link class="info score-detial" to="/jifen">
               <div class="info-left">
                    <div>
                        <i class="iconfont icon-zhangdan"></i>
                    </div>
                    <div class="text">
                        积分明细
                    </div>
                </div>
                <div>
                    <i class="iconfont icon-iconfontyoujiantou-copy"></i>
                </div>
           </router-link>
             <div class="info rule h34">
               <div class="info-left">
                    <div class="text">
                       积分规则
                    </div>
                </div>
                <div>
                    <i class="iconfont icon-iconfontyoujiantou-copy"></i>
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        登录APP
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        完善个人信息
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        查看积分
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        按时交纳党费
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        查看通知
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        了解学院工作动态
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        上交思想汇报经学院审核通过
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        主动学习相关文件
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        认真撰写心得总结并上交，经审核通过
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        提交个人总结，并参与评议
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        积极参与互动
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        学习党建知识
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        学习党史
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        创先争优事迹
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        学党章，学习近平总书记系列讲话
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        用镜头记录两学一做过程中令人感动的人和事
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                        关注并积极参与特色活动
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
             <div class="info h34">
               <div class="info-left">
                    <div class="text">
                       制度化、常态化建设
                    </div>
                </div>
                <div class="score">
                    5
                </div>
           </div>
            

        </div>
    </div>
</template>

<script>
import Header from "@/components/Header"
    export default {
      components:{
          Header,
      }  
    }
</script>

<style scoped lang='scss'>
.wrap{
    font-size: 14px;
    color: #666;
    .pic-wrap{
        height: 145px;
        width: 100%;
        position: relative;
        img{
            height: 100%;
            width: 100%;
        }
        .pic-text{
            position: absolute;
           /*定位:参照的是父容器*/
            left: 50%;
            top: 50%;
            /*偏移:偏移中的百分比参照的是自身*/
            /*定位加变化是解决居中垂直对齐问题的神器、*/
            transform: translate(-50%,-50%);
            color: #fff;
        }
    }
    .score-detial{
        margin-top: 10px;
        border-top:1px solid #ddd;
        height: 50px;
    }
    .info{
      padding: 0px 10px;
      border-bottom: 1px solid #ddd;
    //   margin: -1px;
      display: flex;
      justify-content: space-between;
    //   box-sizing: border-box;
    //   height: 54px;
      align-items: center;
    }
    .info-left {
      text-align: center;
      height: 100%;
      line-height: 1;
      display: flex;
      align-items: center;
      .text {
        margin-left: 10px;
      }
    }

    .iconfont {
      font-size: 32px;
    }
    .icon-zhangdan {
      color: #f1bb46;
    }
    .icon-iconfontyoujiantou-copy {
      color: rgb(221, 221, 221);
      font-size: 22px;
    }
    .rule{
        background-color:#ddd;
    }
    .h34{
        height: 34px;
        
        .score{
            color: rgb(231, 68, 68);
        }
    }

}
</style>