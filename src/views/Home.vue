<template>
  <div class="home">
    <!-- 每个组件有且只有跟元素 -->
    <!-- 这是导航 -->
    <HeaderCom></HeaderCom>
    <!-- 这是内容 -->
    <router-view></router-view>
    <!-- 这是导航 -->
    <FooterCom></FooterCom>
    <!-- 这是足部 -->
    
  </div>
</template>

<script>
//导入header和footer组件
import HeaderCom from "./main/header";
import FooterCom from "./main/footer";

export default {
   components: {
    HeaderCom,
    FooterCom
  }
}
</script>

<style lang="scss" scoped>
//设置home容器高度占满全屏
.home {
  height: 100%;
  background-color: #fff;
 
  }
  //设置底部样式
</style>