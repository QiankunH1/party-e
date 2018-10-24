<template>
    <div class="wrap">
        <!-- 加载测试 -->
        <!-- <div>
            <van-loading />
            <van-loading color="white" /> 
        </div> -->
        

        <!-- 头部 -->
        <div class="head-wrap">
            <Header></Header>
        </div>
        
        <!-- 内容区域 -->
        <div>
            <van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
  :immediate-check=false
  :offset=0
>
            <div class="content-wrap" v-for="(item,index) in info" :key="index" @click="tonewsdetail(item.newsId)">
                <div class="content-left">
                    <img :src='item.pic'>
                </div>
                <div class="content-right">
                    <div class="content-title">{{item.title}}</div>
                    <div class="content-info">
                        <div class="time">
                            <span>{{item.currentTime}}</span>
                        </div>
                        <div class="look-nun">
                            <span>
                                <i></i>
                            </span>
                            <span>
                               {{item.count}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            

        </van-list>
        </div>
        <!-- 没有加载内容了 -->
        <div class="none">
            我也是有底线的
        </div>
        <!-- 下拉刷新测试 -->
        <!-- <van-pull-refresh v-model="isLoading" @refresh="getnews">
        <p>刷新次数: {{ count }}</p>
        </van-pull-refresh> -->
    </div>
    
</template>

<script>
    import Header from'@/components/Header'
    import axios from 'axios'
    export default {
        data(){
            return{
                meta:'',
                type:0,
                page:1,
                pn:0,
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
                this.info=res.data.rows
                this.pn =Math.ceil((res.data.total)/(this.rows)) 
            })
        },
        getmorenews(){
             return new Promise((resolve, reject) => {
            this.page +=1;
             if(this.page>this.pn){
                this.finished=true;
            }
             axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=${this.rows}&type=${this.type}`).then(res=>{
                 let newarr = [...this.info,...res.data.rows]
                    this.info =newarr
                    console.log(res)
                    resolve()
             })
            })
        },
        tonewsdetail(id){
            this.meta=this.$route.meta.title
          this.$store.commit('getmeta',this.meta)
            this.$router.push(`/news/detail/${id}`)
        },

    //   加载更多
             onLoad() {
      // 异步更新数据
    //   setTimeout(() => {
    //       let i = 1;
    //       i= i+1
         
    //     if (i<=this.pn) {
    //      this.getmoredata()
    //     }
    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (i>this.pn) {
    //       this.finished = true;
    //     }
    //   }, 2000);
        // console.log(1232132131)
        this.loading = true;
        this.getmorenews().then(()=> {
            this.loading = false
        })      
    },



 

          //根据路由判断需要加载那些新闻
          aboutrouter(){
              let name = this.$route.name
              switch(name){
                  case 'newseyes'://信工新闻眼
                         this.type= 0
                       
                         break;
                         case 'onepass'://党建一点通
                         this.type = 3
                          
                         break;
                         case 'identity'://党员亮身份
                         this.type = 5
                      
                         break;
                         case 'active'://特色活动
                         this.type = 1
                         
                         break;
                         case 'study'://随时随地学
                         this.type = 6; 
                          break;
                         case 'system':
                         this.type = 4;//特色建设
                         break;
                         case 'politics':
                         this.type = 8;//政治学习
                         break;
                         case 'zhidao':
                         this.type = 2;//通知早知道
                         break;
                         case 'photo':
                         this.type = 7;//随时随地拍
                         break;

              }
          }
        },
        created(){
           this.aboutrouter()
            this.getnews()
            // this.getmorenews()
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    font-size: 18px;
    padding-top:44px; 
    // 头部固定
        .head-wrap{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
    .content-wrap{
        padding: 10px;
        display: flex;
        align-items: center;
        height: 100px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        .content-left{
            width: 80px;
            height: 100%;
            margin-right: 10px;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content-right{
            font-size: 15px;
            color:#333;
            flex:3;
            .content-title{
                margin-bottom:10px;
            }
            span{
                font-size: 12px;
            }
            .content-info{
                display: flex;
                justify-content: space-between;

            }
        }   
    }
    .none{
        text-align: center;
        margin: 10px 0px;
        font-size: 14px;
        color: #333;
    }
}

</style>