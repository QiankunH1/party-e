<template>
    <div class="wrap">
        <div class="head-wrap">
            <Header></Header>  
        </div>
        <van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
  :immediate-check=false
  :offset=0
>
            <div class="list">
                <div class="item" v-for="(item,index) in info" :key="index" @click="tonewsdetail(item.newsId)">                 
                        <div class="img-wrap">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="text-wrap">
                            {{item.title}}}
                        </div>              
                </div >
            </div>
            </van-list>
            <div class="no-more">
                没有数据了
            </div>            
    </div>
</template>

<script>
  import Header from'@/components/Header'
    import axios from 'axios'

    export default {
        data(){
            return{
                 type:7,
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
            getnews(){
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${this.type}`).then(res=>{
                console.log(res)
                this.info=res.data.rows
                this.pn =Math.ceil((res.data.total)/(this.rows)) 
            })
        },
        getmorenews(){
            this.page +=1;
             axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${this.type}`).then(res=>{
                 let newarr = [...this.info,...res.data.rows]
                    this.info =newarr
                    console.log(res)
             })
        },
        tonewsdetail(id){
            this.meta=this.$route.meta.title
          this.$store.commit('getmeta',this.meta)
            this.$router.push(`/news/detail/${id}`)
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
      },
      created(){
           this.getnews()
      }
    }
</script>

<style scoped lang='scss'>
.wrap{
    margin-top: 50px;
    font-size: 14px;
    width: 100%;
    color: #666;
    // 固定头部
    .head-wrap{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
    //图片布局
    .list{
        display: flex;
        flex-wrap: wrap;
        // align-items: center;
        width:100%;
        box-sizing: border-box;
        .item{
            padding: 16px;
            flex-basis: 50%;
            //  height: 144px;
             box-sizing: border-box;
             text-align: center;
             img{
                 width: 100%;
                 height: 116px;
             }
             .text-wrap{
                font-size: 13px;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
             }
        }
    }
    .no-more{
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
        
}
    

</style>