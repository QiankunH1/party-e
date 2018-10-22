<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div>
            我是民主评议
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

  
}

</style>