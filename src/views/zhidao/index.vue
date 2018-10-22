<template>
    <div class="wrap">
        <!-- 头部 -->
        <Header></Header>
        <!-- 内容区域 -->
        <van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
  :immediate-check=false
  :offset=0
>
            <div class="content-wrap" v-for="(item,index) in info" :key="index" @click="tonewsdetail(item.newsId)" >
                <div class="content-left">
                    <i class="iconfont icon-laba1"></i>
                </div>
                <div class="content-right">
                    <div>{{item.title}}</div>
                    <div>
                       <span>{{item.currentTime}}</span>
                    </div>
                </div>
            </div>
         </van-list>
        <!-- 没有加载内容了 -->
        <div class="none">
            我也是有底线的
        </div>
    </div>
</template>

<script>
    import Header from'@/components/Header'
    import axios from 'axios'
    export default {
        data(){
            return{
               meta:'',
                type:2,
                page:1,
                pn:0,
                i:1,
                rows:10,
                info:[],
                total: 0,
                arr:[],
                list: [],
                loading: false,
                finished: false
            }
        },
        components:{
            Header,     
        },
        methods:{
            // onRefresh() {
            //     // this.getnews()
            //    setTimeout(() => {
            //     this.$toast('刷新成功');
            //     this.isLoading = false;
            //     this.count++;
            // }, 500);
            // },
        getnews(){
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${this.type}`).then(res=>{
                console.log(res)
                this.info=res.data.rows

            })
        },
        getmorenews(){
            this.page +=1;
             axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${this.type}`).then(res=>{
                 let newarr = [...this.info,...res.data.rows]
                    this.info =newarr
             })
        },
         //   加载更多
            onLoad() {
        setTimeout(() => {
           this.i =this.i+1
        if(this.i<=this.pn) {
         this.getmorenews()
        }
         this.loading = false;
         if(this.i>=this.pn) {
         this.finished = true;
        }
          }, 2000);     
    },





        tonewsdetail(id){
            this.meta=this.$route.meta.title
          this.$store.commit('getmeta',this.meta)
            this.$router.push(`/news/detail/${id}`)
        },
        
        },
        created(){
        //    this.aboutrouter()
            this.getnews()
            // this.getmorenews()
        }
    }
</script>
<style scoped lang='scss'>
.wrap{
    font-size: 18px;
    .content-wrap{
        padding: 10px;
        display: flex;
        align-items: center;
        height: 96px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        .content-left{
            flex:1;
            text-align: center;
            padding-top: 20px;
            height: 100%;
            line-height: 100%;
            .iconfont{
                font-size: 35px;
                color: #c50206;
            }
        }
        .content-right{
            font-size: 15px;
            color:#333;
            flex:4;
            span{
                font-size: 12px;
            }
        }   
    }
    .none{
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        color: #333;
    }
}

</style>