<template>
    <div>
        <div class="wrap">
           <div class="icon-wrap">
               <i class="iconfont icon-right" @click="$router.back(-1)"></i>
           </div>
            <!-- <div class="title" v-if="right">
                {{this.$route.meta.title}}
            </div> -->
            <div class="title" v-if="this.$route.meta.title">
                {{this.$route.meta.title}}
            </div>
            <div class="title" v-else>
                {{this.$store.state.meta}}
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // right:true,
            }
        },
        methods:{
            // get(){
            //     if(this.$route.meta.title){
            //         this.right=true
            //     }else{
            //         this.right=false
            //     }
            // }
        },
        created(){
            // this.get()
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    height:44px;
    line-height:44px;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 20px;
    display: flex;
    // background-color: #c50206;
    background-color: #02c598;
    padding: 0 5px;
    .icon-right{
        font-size: 22px;
    }
    .icon-wrap{
        z-index: 1;
    }
    .title{
       position: absolute;
       left: 0;
       right: 0;
       text-align: center;
       z-index: 0;
        
        // top: 50%;
    }
}
</style>