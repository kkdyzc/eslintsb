<template>
  <div class="login">
    <!-- 使用el的布局容器 -->
    <div class="main">
      <el-row class="row">
        <!-- 在el中栅格为24 -->
        <el-col :span="12" class="left">
          <div>
            <el-carousel height="600px">
              <el-carousel-item v-for="item in 3" :key="item">
                <div :class="['carousel-img','item'+item]">
                  <div>
                    <p>钟情</p>
                    <p>思</p>
                  </div>
                </div>
                <img src="@/assets/logo.png" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="12" class="right">
          <transition name="el-fade-in-linear" :duration="400">
          
         <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>

    <div class="footer">
      <p>牛皮牛皮牛皮牛皮牛皮牛皮牛皮牛皮牛皮牛皮牛皮</p>
      <p>牛皮牛皮牛皮牛皮牛皮牛皮牛皮牛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      val1:"",
      val2:"",
    }
  },
  methods: {
    login(){
      //  使用路由跳转
      // this.$router.push('/');
      //发送post请求
      this.$api.post('http://172.16.14.44:3000/user/login',{
        userName:this.val1,
        password:this.val2
        })
        .then(res=>{
          if(res.data.code===0){
            console.log('登陆成功'); 
          }else{
            console.log(res.data.msg)
          }
/*         console.log(res.data);
 */
      })

    },
    //跳转到注册页面
    goReg(){
      // this.$router.push()
      //字符串|对象
      //路径  |  {path:路径, name:路由的名字 , params：路由的参数 咯不到的 ，query :地址栏上的出色} 
      this.$router.push('/reg')
    }
  },
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为现在sass改名字了 scss*/
/* 使用scss的高级css语法  */
.login {
  background-color: rgb(237, 237, 237);
  min-height: 100%;
  //设置父元素为flex布局
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-top: 50px;
  .main {
    //等同于 .login .mian
    width: 1100px;
    margin: 0 auto;
    //设置最小高度
    min-height: 600px;
    border: 1px solid #ccc;
    //设置阴影 x y 半径 颜色
    box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
    border-radius: 4px;
    //忽略边框
    box-sizing: border-box;
    .row {
      height: 100%;
      .left,
      .right {
        height: 600px;
      }
      .left {
        & > div {
          position: relative;
          img {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 40px;
            left: 40px;
            z-index: 99;
          }
          .carousel-img {
            height: 100%;
            background-size: cover;
            //  设置图片大小
            //  设置背景图片居中显示
            &.item1 {
              // .carousel-img.item1
              background-image: url("https://account.djicdn.com/pc/static/img/1.e61fc72.jpg");
            }
            &.item2 {
              background-image: url("https://account.djicdn.com/pc/static/img/2.643c4c1.jpg");
            }
            &.item3 {
              background-image: url("https://account.djicdn.com/pc/static/img/3.61f61fa.jpg");
            }
            div {
              position: absolute;
              right: 40px;
              bottom: 100px;

              p {
                color: #fff;
                font-size: 28px;
                font-weight: 600;
                line-height: 1.3;
                text-align: right;
              }
              p:last-child {
                font-size: 14px;
                margin-top: 5px;
              }
            }
          }
        }
      }

      .right {
        background-color: rgb(255, 255, 255);
        & > div {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          form {
            width: 70%;

            h2 {
              text-align: center;
              font-size: 30px;
              font-weight: bold;
              margin: 45px;
            }
          }
        }
      }
    }
  }
  .footer {
    color: rgb(167, 166, 166);
    font-size: 12px;
    //设置字体居中
    text-align: center;
    line-height: 2;
  }
}
</style>