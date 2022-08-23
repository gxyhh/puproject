<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar></nav-bar>

    <!-- 登录页面 -->
    <div class="container">
      <!-- logo -->
      <div class="login-header">
        <div class="logo">
          <img src="../assets/images/panda.png" alt="" />
        </div>
      </div>
      <div class="main">
        <div class="login-content">
          <div class="login">
            <h2 class="login-title">登录熊猫新闻，享受精彩服务</h2>
            <!-- 登录表单 -->
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="f1"
              label-width="100px"
            >
              <el-form-item label="账号" prop="name">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="请输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input
                  placeholder="请输入密码"
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit()">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 注册链接 -->
        <div class="register">
          <h2 class="register-title">还没有熊猫网账号？</h2>
          <a href="/register">立即注册</a>
          <div>
            <img src="../assets/images/slogan1.png" alt="" />
          </div>
          <p>
            多屏互通、断点续播，悦享云端体验传 视频、写微博，与网友一起笑傲江湖
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      role: "", //登录者角色
      ruleForm: {
        name: "", //绑定用户名
        pass: "", //绑定密码
      },
      rules: {
        //定义表单验证规则
        name: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          // {
          //   pattern: /^[a-zA-Z0-9_]{4,16}$/,
          //   message: "用户名需4到16位，包含字母，数字，下划线",
          //   trigger: "blur",
          // },
          { validator: this.checkName, trigger: "blur" },
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          // {
          //   pattern: /^.*(?=.{6,}).*$/,
          //   message: "密码最少6位",
          //   trigger: "blur",
          // },
        ],
      },
    };
  },
  methods: {
    async checkName(rule, value, callback) {
      await this.checkUser();
      await this.checkAdmin();
      if (this.yong == 0 && this.guan == 0) {
        return callback(new Error("该账号不存在"));
      } else {
        return callback();
      }
    },
    //验证用户名
    async checkUser() {
      console.log(this.ruleForm);
      var url = "/v1/user/checkuser";
      var params = `username=${this.ruleForm.name}`;
      return this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == "200") {
          console.log("该账号是用户");
          this.yong = 1;
        } else {
          this.yong = 0;
        }
      });
    },
    //验证管理员名是否存在
    checkAdmin() {
      console.log(this.ruleForm);
      var url = "/v1/admin/checkadmin";
      var params = `adminname=${this.ruleForm.name}`;
      return this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == "200") {
          console.log("该账号是管理员");
          this.guan = 1;
        } else {
          this.guan = 0;
        }
      });
    },
    submit() {
      //点击登录按钮执行，收集所有数据，发请求
      this.$refs["f1"].validate((valid) => {
        if (valid) {
          //验证成功 valid=true
          console.log(this.ruleForm);
          if (this.guan == 1) {
            var url = "/v1/admin/login";
            var params = `adminname=${this.ruleForm.name}&password=${this.ruleForm.pass}`;
            this.axios.post(url, params).then((res) => {
              console.log(res);
              if (res.data.code == "200") {
                //访问vuex的updateUserInfo方法，修改用户登录信息
                this.$store.commit("updateUserInfo", this.ruleForm.name);
                this.$router.push("/background");
              } else {
                this.$message.error({
                  message: "用户名或密码错误",
                  offset: "300",
                });
              }
            });
          }
          if (this.yong == 1) {
            var url = "/v1/user/login";
            var params = `username=${this.ruleForm.name}&password=${this.ruleForm.pass}`;
            this.axios.post(url, params).then((res) => {
              console.log(res);
              if (res.data.code == "200") {
                //访问vuex的updateUserInfo方法，修改用户登录信息
                this.$store.commit("updateUserInfo", this.ruleForm.name);
                this.$router.push("/");
              } else {
                this.$message.error({
                  message: "用户名或密码错误",
                  offset: "380",
                });
              }
            });
          }
        } else {
          console.warn("验证失败，检查表单项");
        }
      });
    },
  },
};
</script>
<style >
.el-button--primary {
  background-color: #004aae;
  width: 200px;
}
.el-input {
  width: 250px;
}
</style>
<style lang="scss"  scoped>
/*注册 */
.main {
  display: flex;
  margin-bottom: 30px;
  height: 550px;
}
.register {
  width: 25%;
  background-color: #f3f4f8;
  background-image: linear-gradient(#f3f4f8, #f3f4f8, rgb(254, 254, 254));
  // height: 400px;
  margin-left: 2%;
  padding-top: 80px;
  text-align: center;
  font-size: 14px;
  color: #004aae;
  h2 {
    font-size: 100%;
  }
  .register-title {
    font-weight: 500;
  }
  img {
    display: block;
    width: 70%;
    margin: auto;
  }
}
.register a {
  width: 170px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: #67e869;
  display: block;
  margin: 45px auto 75px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}
.register p {
  font-family: 宋体;
  padding-top: 40px;
  line-height: 26px;
  color: #333;
  width: 85%;
  margin: auto;
}
/*登录 */
.el-button--primary {
  background-color: #004aae;
}
.el-button--primary:active {
  background-color: #044498;
}
.login-title {
  width: 100%;
  line-height: 28px;
  font-size: 18px;
  color: #004aae;
  font-weight: 500;
  margin-bottom: 25px;
  margin-left: 80px;
}
.login-content {
  padding: 100px 0 0 120px;
  width: 50%;
  height: 400px;
  margin-left: 5%;
  // background-color: aqua;
}
.el-form-item__content {
  width: 250px;
}
.home {
  min-width: 1200px;
}
.container {
  width: 80%;
  min-width: 1200px;
  margin: auto;
}

.login-header {
  height: 79px;
  padding-top: 40px;
  border-bottom: 2px solid #e0e0e0;
  .logo {
    margin-left: 200px;
  }
  img {
    display: block;
    width: 60px;
    // border: 1px solid;
    // -moz-border-bottom-colors: 1px solid #a0a #909 #808 #707 #606 #505 #404 #303;
  }
}
</style>