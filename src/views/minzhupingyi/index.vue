<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div class="btn-wrap">
            <router-link to="summary">
                    <div class="btn">
                    个人总结
                    </div>
    
            </router-link>
            <router-link to="pingyi">
                <div class="btn">
                民主评议
                </div>
            </router-link>
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
    color: #fff;
    .headwrap{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .btn-wrap{
        position: absolute;
        top:40%;
        width: 100%;
        // transform: translateY(50%);
        .btn{
            width: 50%;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-radius: 4px;
            background-color: rgb(213, 37, 37);
            margin: 15px auto;
            color: #fff;
        }
    }
}

</style>