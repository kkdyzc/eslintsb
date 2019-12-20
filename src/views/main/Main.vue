<template>
    <div class="main">
      <div class="title">
        <p>未 来 无 所 不 能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
</template>

<script>
//导入header和footer组件

export default {
 
}
</script>

<style lang="scss" scoped>
//设置home容器高度占满全屏

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
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
    .title {
      /* 设置字体居中 */
      text-align: center;
      padding-top: 200px;
      color: #fff;
      font-size: 34px;
      line-height: 1.5;
      p:first-child {
        //设置字体间隔
        letter-spacing: 2px;
      }
      p:last-child {
        font-size: 22px;
      }
    }
  }
  //设置底部样式
</style>