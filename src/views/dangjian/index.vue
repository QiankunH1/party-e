<template>
    <div class="wrap">
       <Header></Header>
       <!-- 个人登录信息 -->
       <div class="userinfo">
           <div class="user-img">
               <img v-if="!$store.state.userinfo" src="../../style/imgs/bt_bg.png" alt="">
               <img  v-else :src="$store.state.userinfo.header" alt="">
           </div>
           <div v-if="!$store.state.userinfo" class="user-text" @click="handlelogin">
               <span>你还没有登录，请点击登录</span>
           </div>
           <div class="user-text" v-else>
                <p>{{$store.state.userinfo.username}}</p>
            </div>
       </div>
       <!-- 个人信息清单 -->
       <div class="list">
           <router-link class="info person-info" to="/userinfo">
               <div class="info-left">
                   <div>
                        <i class="iconfont icon-beianxinxiyuandi"></i>
                   </div>
                    <div class="text">
                        个人信息
                    </div>
               </div>
               <div>
                   <i class="iconfont icon-iconfontyoujiantou-copy"></i>
               </div>
           </router-link>

           <router-link class="info score" to="/jifen">
               <div class="info-left">
                    <div>
                        <i class="iconfont icon-zhangdan"></i>
                    </div>
                    <div class="text">
                        个人量化积分
                    </div>
                </div>
                <div>
                    <i class="iconfont icon-iconfontyoujiantou-copy"></i>
                </div>
           </router-link>

           <router-link class="info password" to="/changepassword">
               <div class="info-left">
                    <div>
                        <i class="iconfont icon-suo"></i>
                    </div>
                    <div class="text">
                        修改密码
                    </div>
               </div>
               <div>
                   <i class="iconfont icon-iconfontyoujiantou-copy"></i>
               </div>
           </router-link>
           <router-link class="info pay" to="">
               <div class="info-left">
                    <div>
                        <i class="iconfont icon-jiaonafeiyong"></i>
                    </div>
                    <div class="text">
                        党费缴纳
                    </div>
               </div>               
               <div>
                   <i class="iconfont icon-iconfontyoujiantou-copy"></i>
               </div>
           </router-link>
           
       </div >  
       <div class="btn-wrap">
         <button  v-if="$store.state.userinfo" class="logout"  @click="logout">退出登录</button>  
      </div>                              
               
     </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      login: false,
      userinfo: null
    };
  },
  components: {
    Header
  },
  methods: {
    handlelogin() {
      this.$router.push("/login");
    },
    logout() {
      console.log(this.$store.state.userinfo);
      // this.$store.commit("CHANGE_userinfo", this.userinfo);
      this.$store.commit('CHANGE_userinfo',this.userinfo)
    }
  },
  created() {
 
  }
};
</script>

<style scoped lang='scss'>
.wrap {
  font-size: 14px;
  color: #666;

  .header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #c50206;
    color: #fff;
    font-size: 18px;
  }
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    background-color: #c50206;
    .user-img {
      width: 62px;
      height: 62px;

      // border-radius:50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-text {
      width: 200px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      margin-top: 5px;
    }
  }
  //个人信息列表
  .list {
    .info {
      padding: 10px;
      border-bottom: 1px solid rgb(221, 221, 221);
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      height: 54px;
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
    .icon-beianxinxiyuandi {
      color: #e96566;
    }
    .icon-zhangdan {
      color: #f1bb46;
    }
    .icon-suo {
      color: #9ccf50;
    }
    .icon-jiaonafeiyong {
      color: #fda005;
    }
    .icon-iconfontyoujiantou-copy {
      color: rgb(221, 221, 221);
      font-size: 22px;
    }
  }
  .btn-wrap {
    padding: 0px 10px;
    height: 40px;
    width: 100%;
    margin: 50px 0px;

    // text-align: center;
    color: #fff;

    .logout {
      height: 100%;
      width: 100%;
      background-color: #e3574f;
      border: none;
      outline: none;
      border-radius: 4px;
    }
  }
}
</style>