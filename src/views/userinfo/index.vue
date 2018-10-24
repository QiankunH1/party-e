<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div class="content-wrap">
            <div class="changestate"   >
                <div  v-if="ischange" @click='editstate'>
                   编辑
                </div>
                <div v-else @click="savestate">
                    保存
                </div>
            </div>
            <!-- <div class="item">
                <span>姓名</span>
                <input type="text" :disabled='ischange' v-model="userinfo.username">
            </div> -->
            <div class="item">
                <span>头像</span>
               <label for="ava" class="label_wraper"   @change="changepic">
                     <img :src="userinfo.header" alt=""  id='showimg'>
                     <input type="file" id="ava" :disabled='ischange' class="input_img" />
               </label>
                
            </div>
            <div class="item">
                <span>姓名</span>
                <input type="text" :disabled='ischange' v-model="userinfo.username">
            </div>
            <div class="item">
                <span>身份证</span>
                <input type="text" :disabled='ischange' v-model="userinfo.idCard">
            </div>
            <div class="item">
                <span>家庭住址</span>
                <input type="text" :disabled='ischange' v-model="userinfo.hometown">
            </div>
            <div class="item">
                <span>工作地址</span>
                <input type="text" :disabled='ischange' v-model="userinfo.address" >
            </div>
            <div class="item">
                <span>民族</span>
                <input type="text" :disabled='ischange' v-model="userinfo.nation">
            </div>
            <div class="item">
                <span>微信号</span>
                <input type="text" :disabled='ischange' v-model="userinfo.wxNum">
            </div>
            <div class="item">
                <span>QQ号</span>
                <input type="text" :disabled='ischange' v-model="userinfo.qqNum">
            </div>
            <div class="item">
                <span>性别</span>
                <div>
                    <span v-if="ischange">{{userinfo.sex ? '男':'女'}}</span>
                    <div v-else class="sexchange">
                        <label for="man" >男</label>
                        <input class="sexinput" type="radio" value="1" id="man" v-model="userinfo.sex">
                        <label for="women">女</label>
                        <input class="sexinput" type="radio" value="0" id="women" v-model="userinfo.sex">
                    </div>
                </div>   
            </div>
            <div class="item">
                <span>最高学历</span>
                <input type="text" :disabled='ischange' v-model="userinfo.education">
            </div>
            <div class="item">
                <span>职称</span>
                <input type="text" :disabled='ischange' v-model="userinfo.jobRank">
            </div>
            <div class="item">
                <span>薪资水平</span>
                <input type="text" :disabled='ischange' v-model="userinfo.salary">
            </div>
            <div class="item">
                <span>入党时间</span>
                <input type="text" :disabled='ischange' v-model="userinfo.joinPartyTime">
            </div>
            <div class="item">
                <span>党费最后缴纳时间</span>
                <input type="text" :disabled='ischange' v-model="userinfo.lastPayTime">
            </div>
            <div class="item">
                <span>当前身份</span>
                <div >
                <input type="text" :disabled='ischange' v-model="userinfo.partyIdentity" v-if="ischange">
                <select name="" id="" v-model="userinfo.partyStatus" v-else>
                    <option value="0">积极分子</option>
                    <option value="1">预备党员</option>
                    <option value="2">党员</option>
                </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  data() {
    return {
      ischange: true,
      userinfo: {}
    };
  },
  components: {
    Header
  },
  methods: {
    editstate() {
      this.ischange = false;
    },
    getuserinfo() {
      this.$axios.post(`/hhdj/user/userInfo.do`).then(res => {
        console.log(res);
        this.userinfo = res.data.data;
      });
    },
    savestate() {
      this.ischange = true;

      let from = new FormData();
      from.append("username", this.userinfo.username);
      from.append("hometown", this.userinfo.hometown);
      from.append("address", this.userinfo.address);
      from.append("nation", this.userinfo.nation);
      from.append("wxNum", this.userinfo.wxNum);
      from.append("qqNum", this.userinfo.qqNum);
      from.append("sex", this.userinfo.sex);
      from.append("education", this.userinfo.education);
      from.append("jobRank", this.userinfo.jobRank);
      from.append("salary", this.userinfo.salary);
      from.append("joinPartyTime", this.userinfo.joinPartyTime);
      from.append("lastPayTime", this.userinfo.lastPayTime);
      // from.append('partyIdentity',this.userinfo.partyIdentity)
      from.append("partyStatus", this.userinfo.partyStatus);
      from.append("header", this.userinfo.url);
      this.$axios.post("hhdj/user/modifyInfo.do", from).then(res => {
        console.log(res);
        console.log("修改成功");
        // this.$router.push(`/userinfo`);
        console.log(this.userinfo);
        this.$store.commit("CHANGE_userinfo", this.userinfo);
      });
    },
    changepic(e) {
      let _this = this;
      var file = e.target.files[0];
      //file是一个二进制
      let reader = new FileReader();
      reader.onload = function() {
        console.log(reader);
        // 把图片转为base64码加载显示
        let imgsrc = reader.result.split(",")[1];
        let form = new FormData();
        form.append("myFile", imgsrc);
        _this.$axios.post("/hhdj/image/uploadBase64.do", form).then(res => {
          console.log(res);
          _this.userinfo.url = res.data.url;
          _this.userinfo.header = reader.result;
          //获取imginput
        });
      };
      reader.readAsDataURL(file);
    }
  },
  created() {
    this.getuserinfo();
    // this.userinfo=this.$store.state.userinfo
    // console.log(this.userinfo)
  }
};
</script>

<style scoped lang='scss'>
.label_wraper {
  display: inline-block;
  // height: 48px;
  width: 48px;
  border: 1px solid #ddd;
}
.input_img {
  display: none;
}
.wrap {
  font-size: 14px;
  color: #666;
  .head-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .content-wrap {
    margin-top: 44px;
    padding: 0 10px;
    input {
      background: none;
      outline: none;
      border: 0px;
    }
    .changestate {
      color: #fff;
      font-size: 16px;
      position: fixed;
      top: 13px;
      right: 10px;
    }
    .item {
      height: 48px;
      padding: 10px 0px;
      display: flex;
      justify-content: space-between;
      img {
        width: 48px;
        height: 100%;
      }
      input {
        text-align: right;
      }
    }
  }
}
</style>