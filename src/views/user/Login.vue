<template>
  <!-- 使用el的布局容器 -->
  <div id="login">
    <!-- 在el中栅格为24 -->
    <el-form label-width="80px">
      <h2>登陆</h2>
      <el-form-item label="用户名:">
        <el-input type="text" placeholder="请输入用户名或手机号" v-model="val1" />
      </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" placeholder="请输入密码" v-model="val2" />
      </el-form-item>
      <el-form-item>
        <el-Button style="width:100%" type="primary" @click="login">登陆</el-Button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center">
          <el-button type="text" @click="goReg">没有账号?立即注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      val1: "",
      val2: "",
    };
  },
  methods: {
    login() {
      //先判断文本框是否有内容
      if (!this.val1) {
        //使用el提供的友好提示
        this.$message.error({
          message: "用户名或手机号不能为空",
          duration: 1000
        });
        return;
      }
      if (!this.val2) {
        this.$message.error({
          message: "密码不能为空",
          duration: 1000
        });
        return;
      }
      //向后台发送请求进行登陆
      //axios
      //配置axios默认请求地址
      //post传递参数
      this.$api
        .post("/users/login", { userName: this.val1, password: this.val2 })
        .then(res => {
          //取出请求返回的值
          var data = res.data;
          //判断服务器返回的code码 只要为0 代表请求成功
          if (data.code === 0) {
            console.log("服务器返回的值", data.data);
            //登陆成功跳转首页
            this.$notify({
              title: "登陆成功",
              message: "正在进入主页",
              type: "success",
              duration: 1000, //显示的时间
              onClose: () => {
                this.$router.push("/");
              }
            });
          } else {
            this.$message.error({
              message: data.msg,
              duration: 1000
            });
          }
        });

      //  使用路由跳转
      // this.$router.push('/');
      //发送post请求
      /*   this.$api.post('http://172.16.14.44:3000/user/login',{
        userName:this.val1,
        password:this.val2
        })
        .then(res=>{
          if(res.data.code===0){
            console.log('登陆成功'); 
          }else{
            console.log(res.data.msg)
          } */
      /*         console.log(res.data);
       */
    },
    //跳转到注册页面
    goReg() {
      // this.$router.push()
      //字符串|对象
      //路径  |  {path:路径, name:路由的名字 , params：路由的参数 咯不到的 ，query :地址栏上的出色}
      this.$router.push("/reg");
    }
  }
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为现在sass改名字了 scss*/
/* 使用scss的高级css语法  */
#login {
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
</style>