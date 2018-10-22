<template>
    <div class="wrap">
        <div class="head-wrap">
           <Header></Header> 
        </div>
        <div class="password-wrap">
            <form action="">
                <div>
                    <div>旧密码:</div>
                    <input type="text" v-model="oldpass">
                </div>
                <div>
                    <div>新密码:</div>
                    <input type="text" v-model="newpass">
                </div>
                <div>
                    <div>请确认密码:</div>
                    <input type="text">
                </div>
                <button class="btn" @click="changepassword">
                    确认修改
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from'@/components/Header'
import axios from 'axios'
    export default {
        data(){
            return{
                oldpass:'',
                newpass:''

            }
        },
        components:{
            Header,
        },
        methods:{
            changepassword(){
                axios.get(`http://211.67.177.56:8080/hhdj/user/updatePwd.do?newPwd=${this.newwpass}&oldPwd=${this.oldpass}`).then(res=>{
                    window.alert('账号密码不正确')
                    console.log(res)
                    if(res.code==1){
                        this.$router.push('/login')
                    }
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
.password-wrap{
    font-size: 18px;
    width: 100%;
   
    color: #999;
     form{
         
         padding: 50px 30px 0px;
        // color: #999;
        font-size: 16px;
        font-weight: 400;
        input{
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #999;
        border-radius: 4px;
        overflow: hidden;
        padding: 2px 10px;
        height: 40px;
        // width:100%; 
        // background-color: #c50206;
        margin-bottom: 10px;
        color: #666; 
        box-sizing: border-box;
        margin: 10px 0px;   
        }
        .btn{
            // display: block;
            color: #fff;
            background-color: rgb(216, 26, 26);
            height: 50px;
            width: 100%;
            outline: none;
            border: none;
            border-radius: 4px;
        }
}
}
</style>