<template>
  <div id="reg">
    <el-form label-width="80px">
      <h2>注册</h2>
      <el-form-item label="用户名:">
        <el-input type="text" placeholder="请输入用户名" v-model="val1" />
      </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" placeholder="请输入密码" v-model="val2" />
      </el-form-item>
      <!--   <el-form-item label="确认密码:">
        <el-input type="password" placeholder="请输入密码" v-model="val2" />
      </el-form-item>-->
      <el-form-item>
        <el-Button style="width:100%" type="primary" @click="reg">立即注册</el-Button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center">
          <el-button type="text" @click="goLogin">立即登陆</el-button>
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
      val2: ""
    };
  },
  methods: {
    reg() {
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
      //注册
      this.$api
        .post("users/reg", { userName: this.val, password: this.val2 })
        .then(res => {
          //取出请求返回的值
          var data = res.data;
          //判断服务器返回的code码 只要为0 代表请求成功
          if (data.code === 0) {
            console.log("服务器返回的值", data.data);
            this.$message.success({
              message: "注册成功",
              duration: 1000,
              onColse: () => {
                this.$router.push("/login");
              }
            });

            //登陆成功跳转首页
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
      /*    this.$api
        .post("http://172.16.14.44:3000/user/login", {
          userName: this.val1,
          password: this.val2
        })
        .then(res => {
          if (res.data.code === 0) {
            console.log("登陆成功");
          } else {
            console.log(res.data.msg);
          }
          /*         console.log(res.data);
         
        }); */
    },
    goLogin() {
      this.$router.push("/Login");
    }
  }
};
</script>

<style lang="scss" scoped>
#reg {
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