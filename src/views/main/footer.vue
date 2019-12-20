<template>
     <div class="footer" id="footer">
      <!-- 使用布局容器包裹 -->
      <div class="y-container">
        <!-- 设置左右两端对齐 使用要设置两个div 一个在左边 一个在右边 -->
        <div class="left">
          <!-- 使用@/默认指向src目录 -->
          <p>Copyright @ 2019 Yzc 杨子辰创新 版权所有 |</p>
          <a href="#">Yzc 杨子辰网新官网 |</a>
          <a href="#">天空的城 |</a>
          <a href="#">关于子辰 |</a>
          <a href="#">子辰公众号</a>
        </div>
        <div class="right">
          <a href="#">简体中文</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'Footer',
}
</script>

<style lang="scss" scoped>
.nav,
.footer {
  height: 60px;
  background-color: #fff;
  .y-container {
    height: 100%;
    display: flex;
    //设置flex容器的排序方式 水平还是垂直 主轴是水平 x
    justify-content: space-between; //两端对齐中间平分
    //设置垂直方向排列
    align-items: center;
    .left {
      //设置left为flex容器
      display: flex;
      //设置为垂直方向居中
      align-items: center;
      img {
        width: 34px;
        height: 34px;
        margin-right: 56px;
        cursor: pointer;
      }
    }
    a {
      color: #232526;
      font-size: 14px;
      margin-right: 30px;
    }
    a:last-child {
      margin-right: 0px;
    }
    a:hover {
      color: #44a8f2;
    }
  }
  
}
  #footer {
    height: 50px;
    color: #707473;
    p {
      font-size: 12px;
      margin-right: 26px;
    }
    a {
      color: #707473;
      font-size: 12px;
      margin: 4px;
    }
  }


</style>