<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <ul class="content-wrap">
            <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
                :offset=0
                :immediate-check='first'
                >
            <li class="content" v-for="(item,index) in formdata" :key="index">
                <div class="user-info clearfix">
                    <div class="flr interact">
                        党员互动
                    </div>
                    <div class="fll img-wrap">
                        <img :src="item.header" alt="">
                    </div>
                    <div class="fll">
                        <div>{{item.username}}</div>
                        <div class="time-info">
                            <i class="iconfont icon-shijian"></i>
                            <span>{{item.currentTime}}</span>
                            <i class="iconfont icon-laba88"></i>
                            <span>公开</span>
                        </div>
                    </div>
                    
                </div>
                <div class="text">
                    {{item.content}}
                </div>
                <div class="reply clearfix">
                    <span class="flr">
                        <i class="iconfont icon-xinxi"></i>
                        <span @click="toreply(item)">回复</span>
                    </span>
                </div>
            </li> 
            </van-list>         
        </ul> 
        <div class='no-more' v-if="finished">
            没得更多数据了
        </div>
        <div @click="iconwrap">
            <i class="iconfont icon-tianjia"></i>
        </div>
        <div class="publishWrap" v-show="isshow">
            <div class="areaWrap">
               <textarea class="area" v-model="content"></textarea>
            </div>
            <div class="clearfix">
                <button class="publish" @click="publish">发布</button>
                <button class="cancle flr" @click="mengceng">取消</button>
            </div>
        </div>
        <div class="mengceng" v-show="isshow" @click="mengceng">

        </div>
    </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
export default {
  data() {
    return {
      formdata: {},
      type: 0,
      page: 1,
      rows: 10,
      pn: 1,
      loading: false,
      finished: false,
      first: false,
      isshow:false,
      content:'',
    };
  },
  components: {
    Header
  },
  methods: {
    getdata() {
      this.$axios
        .get(
          `/hhdj/forum/forumList.do?page=${this.page}&rows=${this.rows}&type=${
            this.type
          }&cates=0`
        )
        .then(res => {
          console.log(res);
          this.formdata = res.data.rows;
          this.pn = Math.ceil(res.data.total / this.rows);
          console.log(this.pn);
        });
    },
    getmoredata() {
      return new Promise((resolve, reject) => {
        this.page = this.page + 1;
        if (this.page > this.pn) {
          this.finished = true;
        }
        this.$axios
          .get(
            `/hhdj/forum/forumList.do?page=${this.page}&rows=${
              this.rows
            }&type=${this.type}&cates=0`
          )
          .then(res => {
            console.log(res);
            let arr = [...this.formdata, ...res.data.rows];
            this.formdata = arr;
            resolve();
          });
      });  
    },

    onLoad() {
      this.loading = true;
      this.getmoredata().then(() => {
        this.loading = false;
      });
    },
    iconwrap(){
      this.isshow=true
    },
    mengceng(){
      this.isshow=false
    },
     //点击发布事件
  publish(){
    console.log('aaa')
    let form =new FormData()
    form.append('content',this.content)
    this.$axios.post(`/hhdj/forum/saveForum.do`,form).then(res=>{
      console.log(res)
      this.isshow=false,
       this.getdata()
    })
  },
  //跳转回复详情页
  toreply(item){
    this.$router.push({name:'reply', params:{item}})
  }
  // toreply(){
  //   this.$router.push('/reply')
  // }
  },
  created() {
    this.getdata();
  },
 
};
</script>

<style scoped lang='scss'>
.wrap {
  //页面样式
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  font-size: 16px;
  color: #616161;
  background: #efeff4;
  padding-top: 50px;
  //浮动样式
  .fll {
    float: left;
  }
  .flr {
    float: right;
  }
  .clearfix {
    &::after {
      content: "";
      display: block;
      clear: both;
      visibility: hidden;
    }
  }
  // 头部固定定位
  .head-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .content-wrap {
    .content {
      margin-bottom: 10px;
      padding: 15px;
      background-color: #fff;
      .img-wrap {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .text {
        padding: 10px 0px;
      }
      .time-info {
        font-size: 12px;
      }
      .interact {
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
    .reply {
      font-size: 14px;
    }
  }
  .no-more {
    text-align: center;
  }
  //图标样式
  .icon-shijian,
  .laba88 {
    font-size: 12px;
  }
  .icon-xinxi {
    font-size: 14px;
  }
  .icon-tianjia {
    font-size: 50px;
    color: #da1f1f;
    position: fixed;
    z-index: 99;
    bottom: 80px;
    right: 20px;
  }
  //发布框样式
  .publishWrap{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 160px;
    padding: 10px;
    z-index: 999;
    background-color: #ebebeb;
    .area{
      width: 100%;
      height: 100px;
      border-radius: 4px;
      font-size: 14px;
      color: #333;
      // margin: auto auto;
    }
    .publish,.cancle{
      outline: none;
      border: none;
      border-radius: 4px;
      background-color: rgb(248, 64, 64);
      padding: 5px;
      height: 30px;
      font-size: 12px;
      color: #fff;
      margin-top: 4px;
    }
    .cancle{
      background-color: #fff;
      color: #000;
    }
  }
  //遮罩层样式
  .mengceng{
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background: rgba($color: #000000, $alpha: .5)
  }
}
</style>