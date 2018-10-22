<template>
  <div class="tabs">
    <router-link class="tabs-item" :class="{active: $route.name === 'home'}" to="/home">
      <i class="iconfont icon-party"></i>
      <div class="tabs-title">
        首页
      </div>
    </router-link>
    <router-link class="tabs-item" :class="{active: $route.name === 'zhidao'}" to="/zhidao">
      <i class="iconfont icon-xiaoxi4"></i>
      <div class="tabs-title">
        通知早知道
      </div>
    </router-link>
    <router-link class="tabs-item" :class="{active: $route.name === 'dangjian'}" to="/dangjian">
      <i class="iconfont icon-wodedangxuan"></i>
      <div class="tabs-title">
        我的党建
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {
      }
    }
  }
</script>


<style scoped lang="scss">
.tabs {
  // border-top: 1px solid #f1f1f1;
  height: 46px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #fafbfe;
  // padding-top: 2px;
  .tabs-item {
    height: 100%;
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .iconfont {
    font-size: 22px;
    // padding: 10px 0px;
  }
  a{
    color: #333;
  }
  .active {
  border-top: 2px solid #c7000a;
  color: #c7000a;
}
}

</style>