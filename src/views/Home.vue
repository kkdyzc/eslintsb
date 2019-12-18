<template>
  <div class="home">
    <nav>
      <div class="y-container">
        <div class="left">
          <img src="@/assets/logo.png" alt />
          <a href>社会招聘</a>
          <a href>校园招聘</a>
          <a href>关于大疆</a>
        </div>
        <div>
          <a href>登陆</a>
        </div>
      </div>
    </nav>

    <div class="main">
      <div >
        <p>未来无所不能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
    <footer>
      <div class="y-container">
        <a href>Copyright @ 2019 DJI 大黄创新 版权所有</a>
        <a href>为何这么帅 |</a>
        <a href>赞助我们 |</a>
        <a href>加入我们 |</a>
        <a href>腾讯公众号 |</a>
        <a href>阿里巴巴 |</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  overflow: hidden;
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    .y-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      div {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          margin-right: 50px;
          cursor: pointer;
          height: 100%;
        }
        a {
          color: #3b3e40;
          font-size: 14px;
          margin-right: 34px;
        }
        a:hover {
          color: #44a8f2;
        }
      }
    }
  }
  .main {
    height: 100%;
    background-size: cover;
    background-position: 50%;
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
    font-size: 33px;
    color: #fff;
    line-height: 1.5;
    text-align: center;
    padding-top: 5 0px;
    div{
      padding:200px;
    }
  }
  footer {
    background-color: #fff;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    .y-container {
      height: 100%;
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: #979797;
      p {
        margin-right: 34px;
      }
      a {
        color: #979797;
        margin-right: 4px;
        font-size: 13px;
      }
    }
  }
}
</style>