<template>
  <div class="bg">
    <div class="main">
      <div class="img"></div>
      <div class="middle">
        <ul>
          <li class="table">
            <label> 
              <div class="Header" >
                职位类别:
                <a href="#">所有类别</a>
                <a href="#">市场销售类</a>
                <a href="#">运营类</a>
                <a href="#">互联网类</a>
                <a href="#">职能类</a>
                <a href="#">研发类</a>
                <a href="#">服务类</a>
                <a href="#">信息安全类</a>
                <a href="#">设计类</a>
                <a href="#">财务类地产类</a>
              </div>
              <div class="Header Header2">
                工作城市:
                <a href>所有城市</a>
                <a href>北京市</a>
                <a href>杭州市</a>
                <a href>南京市</a>
                <a href>上海市</a>
                <a href>深圳市</a>
                <a href>西安市</a>
                <a href>香港</a>
              </div>
            </label>
            <hr />
          </li>
        </ul>
        <div class="six">
          <el-input class="input" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input2"></el-input>
          <div>
            <a href="#">职院招聘</a>
            <a href="#">嵌入式</a>
            <a href="#">算法</a>
            <a href="#">机械</a>
            <a href="#">采购</a>
            <a href="#">运维</a>
            <a href="#">开发</a>
            <a href="#">实习生</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
   arr:{['职位类别:'],['所有类别'],['市场销售类'],[' 运营类'],
      ['互联网类'],['职能类'],[' 研发类服务类'],[' 信息安全类'],['设计类'],[' 财务类'],['地产类']}
export default {
  name: "social",
  methods: {}
};
</script>
<style lang="scss" scoped>
.bg {
  background-color: rgb(247, 245, 247);
}
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
  .middle {
    background-color: #fff;
    width: 1120px;
    padding: 40px;
    margin: 30px auto;
    .table {
      justify-content: space-between;
      display: inline;
      .Header {
        font-size: 14px;
        color: #7f8382;
        justify-content: space-between;
        a {
          color: #7f8382;
          position: relative;
          display: inline-block;
          margin-left: 24px;
        }
        a:hover {
          color: #232526;
        }
      }
      .Header2 {
        padding-top: 25px;
      }
      hr {
        border: 1px solid rgb(243, 237, 237);
        margin: 15px;
      }
    }
    .six {
      position: relative;
      .input {
        margin: 12px;
        margin-left: 785px;
        width: 320px;
        height: 32px;
      }
      a {
        font-size: 12px;
        color: #7f8382;
        position: relative;
        display: inline-block;
        margin-left: 14px;
        left: 750px;
      }
      a:hover {
        color: #232526;
      }
    }
  }
}
</style>