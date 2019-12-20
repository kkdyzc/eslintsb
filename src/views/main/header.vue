<template>
  <div class="nav" style>
    <!-- 使用布局容器 -->
    <!-- 将y-container使用flex容器进行包裹 -->
    <div class="y-container">
      <!-- 设置左右两端对齐 使用要设置两个div 一个在左边 一个在右边 -->
      <div class="left">
        <!-- 使用@/默认指向src目录 -->
        <img src="@/assets/logo.png" alt @click="gohome" />
        <router-link to="/social">社会招聘</router-link>
        <a href="#">校园招聘</a>
        <a href="#">关于大疆</a>
      </div>
      <div class="right">
        <!-- <a href="#" >登陆</a> -->
        <router-link to="/login" v-if="!userName">登陆</router-link>
        <el-dropdown v-else>
          <span style="cursor:pointer;">欢迎您,{{userName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>个人空间</el-dropdown-item>
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userInfo: {}
    };
  },
  //生命周期函数
  mounted() {
    this.fetchUserinfo();
  },
  //计算函数
  computed: {
    userName() {
      //计算用户的用户名
      //判断用户是否为空
      //JSON.stringify判断对象为空
      //直接遍历对象
      //使用的es6的keys判断这个对象的属性的长度是否有
      if (Object.keys(this.userInfo).length) {
        return this.userInfo.username;
      }
      return "";
    }
  },
  methods: {
    //获取用户信息
    //为何登陆成功了还是显示没有登陆
    //在前后端分离的过程中 由于浏览器的限制 每次传递的session值都是不一样的
    //于是后端无法判断是否为同一个用户 所以就会造成session无效
    //解决方法:在每次发送ajax的时候手动传递session值
    fetchUserinfo() {
      this.$api.get("users/userInfo").then(res => {
        let data = res.data;
        //判断状态码
        if (data.code === 0) {
          console.log("服务器返回的值", data.data);
          //重新赋值
          this.userInfo = data.data;
        } else {
          this.$message.error({
            message: data.msg,
            duration: 1000
          });
        }
      });
    },
    gohome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  position: fixed; //固定
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
}
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
</style>