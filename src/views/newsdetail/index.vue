<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>
        </div>
        <div class="title">
            {{news.title}}
            <!-- <div>
                <img :src="news.pic" alt="">
            </div> -->
           
        </div>
        <div v-html='news.content' class="content">
              
        </div>
        
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import axios from 'axios'
    export default {
        data(){
            return{
                id:0,
                news:{},
                meta:'',
                type:0
            }
        },
        components:{
            Header,
        },
        methods:{
            getdata(){
               console.log(this.$route.params.id)
               this.id = this.$route.params.id
            //    axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${this.id}`).then(res=>{
            //     console.log(res)
            //     this.news= res.data.data
               
            //    })
               this.$axios.get(`/hhdj/news/newsContent.do?newsId=${this.id}`).then(res=>{
                console.log(res.data)
                this.news= res.data.data
               
               })
            },


        
        },

       
        created(){
            this.getdata()
           
        },
      
    }
</script>

<style scoped lang="scss">
.wrap{
    margin-top: 44px;
    padding: 0px 10px;
    .head-wrap{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
    .title{
        font-size: 26px;
    }
    .content{
        font-size: 12px;
        line-height: 2;
        color: #000;
     /deep/  img{
    display: block;
    max-width: 100%;
    margin: 20px auto;
    // margin-bottom: 20px; 
        }
    }
}
</style>