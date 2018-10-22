<template>
    <div class="wrap">
      <router-view/>
      <div class="footer">
      <Footer></Footer>
      </div> 
    </div>
</template>

<script>
import Footer from'@/components/Footer'
    export default {
        components:{
            Footer,
            }
    }
</script>

<style scoped>
/* .wrap{
    position: relative;
} */
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>