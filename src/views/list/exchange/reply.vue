<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
           <ul class="content-wrap"> 
            <li class="content" >
                <div class="user-info clearfix">
                    <div class="flr interact">
                        党员互动
                    </div>
                    <div class="fll img-wrap">
                        <img :src="formdata.header" alt="">
                    </div>
                    <div class="fll">
                        <div>{{formdata.username}}</div>
                        <div class="time-info">
                            <i class="iconfont icon-shijian"></i>
                            <span>{{formdata.currentTime}}</span>
                            <i class="iconfont icon-laba88"></i>
                            <span>公开</span>
                        </div>
                    </div>             
                </div>
                <div class="text">
                    {{formdata.content}}
                </div>
            </li>    
        </ul> 
           <ul class="content-wrap"> 
                <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
                :offset=0
                :immediate-check='first'
                >   
            <li class="content" v-for="(item,index) in formdata2" :key="index">
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
            </li>  
          </van-list>      
        </ul> 
        <div class='no-more' v-if="finished">
            没得更多数据了
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      formdata: [],
      formdata2: {},
      type: 0,
      page: 1,
      rows: 10,
      pn: 1,
      loading: false,
      finished: false,
      first: false,
      isshow: false,
      content: ""
    };
  },
  components: {
    Header
  },
  methods: {
    getdata() {
        let id = this.$route.params.id
      this.$axios
        .get(
          `/hhdj/forum/forumCommentList.do?page=${this.page}&rows=${this.rows}&forum_id=${id}`
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
          `/hhdj/forum/forumCommentList.do?page=${this.page}&rows=${this.rows}&forum_id=${id}`
        )
          .then(res => {
            console.log(res);
            let arr = [...this.formdata, ...res.data.rows];
            this.formdata2 = arr;
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
  },
  created() {
      this. getdata()
      this.formdata=this.$route.params.item[0],
      console.log(this.formdata)
    
  }
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
}
</style>