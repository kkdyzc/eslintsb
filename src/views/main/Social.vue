<template>
  <div class="mian">
    
  </div>
</template>
<script>
arr: {
  ["职位类别:"],
    ["所有类别"],
    ["市场销售类"],
    [" 运营类"],
    ["互联网类"],
    ["职能类"],
    [" 研发类服务类"],
    [" 信息安全类"],
    ["设计类"],
    [" 财务类"],
    ["地产类"];
}
export default {
  name: "social",
  methods: {}
};
</script>
<style lang="scss" scoped>
.main {
  //设置高度默认占满全屏
  height: 100%;
  //设置图片居中
  background-size: cover;
  //设置图片偏移 保证宽度图片都能居中
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;
  margin-bottom: -50px;
  //这些边距会被增大 增加div的框高
  box-sizing: border-box;
  .img {
    display: flex;
    background-position: 50%;
    justify-content: space-between;
    background-image: url(https://we2.djicdn.com/hire/public/img/search-banner.c9d5236.jpg);
    width: 1200px;
    height: 300px;
    background-size: cover;
    margin-bottom: -50px;
    margin: 0 auto;
  }
}
</style>