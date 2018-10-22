<template>
    <div class="wrap">
        <Header></Header>
        <div class="top-img">
             <img src="../../style/imgs/header-dangjian.png" alt="">
        </div>
        <div class="login-content">
            <form action="">
                <input class="input-top"  placeholder="身份证号"  type="text" v-model="formdata.idNum">
                <input class='input-bottom'  placeholder="密码"  type="text" v-model="formdata.password">
                <button class="btn" @click="login">登录</button>
            </form>
            <!-- <button class="btn" @click="login">登录</button> -->
           
        </div>      
    </div>
</template>

<script>
    import Header from'@/components/Header'
    import axios from 'axios'
    export default {
        data(){
            return{
                formdata:{
                     idNum:'',
                     password:'',
                    
                }
              
            }
        },
        components:{
            Header,    
        },
        methods:{
            login(){
            let from = new FormData()
            from.append('id_card',this.formdata.idNum)
            from.append('password',this.formdata.password)
            axios.post('http://211.67.177.56:8080/hhdj/user/userLogin.do',from).then(res=>{
                if(res.data.code==1){
                     this.$dialog.alert({
                        message: '登录成功'
                        });
                        console.log(res.data)
                        this.$store.commit('CHANGE_userinfo',res.data.data)

                    this.$router.push('/dangjian')
                }else{
                    this.$dialog.alert({
                        message: '账号或密码不正确'
                        });
                }
            })
               
            }

            
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    width: 100%;
    height: 100vh;
    font-size: 14px;
    background:#c50206;
}
.top-img{
    width: 100%;
    margin: 30px auto;
    text-align: center;
    vertical-align: middle;
    // line-height: 1;
    img{
        width: 204px;
        height: 50px;
    }
}
.login-content{
    width: 100%;
    background-color: #c50206;
    width: 300px;
    margin: 0 auto;
}
    form{
        color: #fff;
        input{
            width: 100%;
        border: 1px solid #ff0;
        border-radius: 4px;
        overflow: hidden;
        padding: 2px 10px;
        height: 40px;
        width:100%; 
        background-color: #c50206;
        margin-bottom: 10px;
        color: #fff; 
        box-sizing: border-box;   
    }
    .btn{
        height: 40px;
        width:100%;
        border:none;
        border-radius: 4px ;
        outline: none;
        text-align: center;
        color: #fff;
        background-color: #e3574f; 
    }
    input::-webkit-input-placeholder {
        color: #fff;
    }

    }
     
   
</style>