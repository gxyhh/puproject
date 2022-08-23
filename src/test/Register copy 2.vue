<template>
  <div class="home">
    <!-- 导航栏 -->
    <div class="menu">
      <ul>
        <li>
          <a href="/"
            ><img src="../assets/images/panda.png" alt="" style="width: 40px"
          /></a>
        </li>
        <li><a href="#">时政</a></li>
        <li><a href="">新闻</a></li>
        <li><a href="">评论</a></li>
        <li><a href="#">视频</a></li>
        <li><a href="#">文化</a></li>
        <li><a href="#">社会</a></li>
        <li><a href="#">国防</a></li>
        <li><a href="#">国际</a></li>
        <li><a href="#">科教</a></li>
        <li><a href="#">财经</a></li>
        <li><a href="#">体育</a></li>
        <li><a href="#">教育</a></li>
        <li><a href="#">熊猫</a></li>
        <li><a href="#">直播中国</a></li>
      </ul>
    </div>

    <!-- 注册页面 -->
    <div class="container">
      <!-- logo -->
      <div class="login-header">
        <div class="logo">
          <img src="../assets/images/panda.png" alt="" />
        </div>
        <div class="login">
          <a href="/login">返回登录首页</a>
        </div>
      </div>
      <div class="main">
        <div class="weizhi">
          <h2 class="register-title">您正在注册熊猫网</h2>
          <div style="width: 100%; display: flex">
            <div class="register">
              <el-form
                key="ff"
                v-if="role == 1"
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
                <el-form-item label="确认密码" prop="checkpass">
                  <el-input
                    placeholder="再次输入密码"
                    type="password"
                    v-model="ruleForm.checkpass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                  <el-input
                    placeholder="请输入手机号"
                    type="phone"
                    v-model="ruleForm.phone"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>

                <el-form-item label="选择角色：">
                  <el-radio-group v-model="role">
                    <el-radio :label="1">用户</el-radio>
                    <el-radio :label="2">管理员</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit()">注册</el-button>
                  <el-button @click="reset()">重置</el-button>
                </el-form-item>
              </el-form>
              <el-form
                key="hh"
                v-if="role == '2'"
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
                <el-form-item label="确认密码" prop="checkpass">
                  <el-input
                    placeholder="再次输入密码"
                    type="password"
                    v-model="ruleForm.checkpass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="选择角色：">
                  <el-radio-group v-model="role">
                    <el-radio :label="1">用户</el-radio>
                    <el-radio :label="2">管理员</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit()">注册</el-button>
                  <el-button @click="reset()">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="tupian">
              <img src="../assets/images/slogan1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      guan: "",
      yong: "",
      count: "", //倒计时
      role: 1, //绑定登录角色
      ruleForm: {
        name: "", //绑定用户名
        pass: "", //绑定密码
        checkpass: "", //确认密码
        phone: "", //绑定手机号
      },
      rules: {
        //定义表单验证规则
        name: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_]{4,16}$/,
            message: "用户名需4到16位",
            trigger: "blur",
          },
          { validator: this.checkName, trigger: "blur" },
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            pattern: /^.*(?=.{6,}).*$/,
            message: "密码最少6位",
            trigger: "blur",
          },
        ],
        checkpass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" },
        ],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern:
              /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
            message: "检查手机号格式",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    async checkName(rule, value, callback) {
      await this.checkUser();
      await this.checkAdmin();
      console.log(this.yong);
      console.log(this);
      if (this.yong == 1 || this.guan == 1) {
        return callback(new Error("用户名已存在!"));
      } else {
        return callback();
      }
    },
    //验证用户名
    async checkUser() {
      console.log(this.ruleForm);
      var url = "/v1/user/checkuser";
      var params = `username=${this.ruleForm.name}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == "200") {
          console.log("用户名已存在了了");
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
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == "200") {
          this.guan = 1;
        } else {
          this.guan = 0;
        }
      });
    },

    //倒计时 五秒跳转页面
    clickJump() {
      console.log("倒计时了没");
      const timejump = 1;
      if (!this.timer) {
        this.count = timejump;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            const h = this.$createElement;

            //跳转的页面写在此处
            this.$router.push({ path: "/login" });
          }
        }, 3000);
      }
    },

    reset() {
      this.$refs["f1"].resetFields();
    },
    submit() {
      console.log(this.role);
      //点击注册按钮执行，收集所有数据，发请求
      this.$refs["f1"].validate((valid) => {
        if (valid) {
          //验证成功 valid=true
          console.log(this.ruleForm);
          if (this.role == "2") {
            //角色2 管理员 ，请求管理员注册接口
            var url = "/v1/admin/reg";
            var params = `adminname=${this.ruleForm.name}&password=${this.ruleForm.pass}`;
            this.axios.post(url, params).then((res) => {
              console.log(res);
              if (res.data.code == "200") {
                this.$message({
                  message: "管理员注册成功",
                  offset: "300",
                  type: "success",
                });
                this.clickJump();
              }
            });
          } else {
            //角色1用户，请求用户注册接口
            var url = "/v1/user/reg";
            var params = `username=${this.ruleForm.name}&password=${this.ruleForm.pass}&phone=${this.ruleForm.phone}`;
            this.axios.post(url, params).then((res) => {
              console.log(res);
              if (res.data.code == "200") {
                this.$notify({
                  title: "注册成功",
                  message: "即将跳转至登录页面",
                  type: "success",
                  duration: 3000,
                });
                this.clickJump();
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
.el-input {
  width: 250px;
}
.el-notification {
  position: fixed;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}

.el-notification.right {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}

.el-notification.left {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}
.el-button--primary {
  width: 150px;
  margin-right: 10px;
}
</style>
<style lang="scss" scoped>
.tupian {
  width: 30%;
  margin-top: 80px;
  margin-right: 15%;
}
.register {
  width: 35%;
  margin-left: 20%;
}
.register-title {
  font-size: 18px;
  color: #535f6d;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  margin-bottom: 50px;
}
.login {
  width: 100px;
  text-align: right;
  padding-top: 55px;
  a {
    text-decoration: none;
    color: #333;
    font-size: 12px;
    padding: 0 8px;
  }
}

/*注册 */
.main {
  display: flex;
  // margin-bottom: 30px;
  background-color: #f3f4f8;
  height: 600px;
}
.weizhi {
  width: 80%;
  margin: 40px auto;
}
.home {
  min-width: 1200px;
}
.container {
  min-width: 1200px;
  margin: auto;
}

.login-header {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 79px;
  padding-top: 40px;
  // border-bottom: 2px solid #e0e0e0;
  .logo {
    // margin-left: 200px;
    width: 79px;
    height: 79px;
    border: 1px solid;

    -moz-border-bottom-colors: red blue white white black;
  }
  img {
    display: block;
    width: 60px;
    border: 1px solid;
  }
}

/* 导航栏 */
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu {
  width: 100%;
  background: rgb(232, 231, 231);
  min-width: 1200px;
  height: 35px;
  line-height: 35px;
}
.menu ul {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.menu li a {
  text-decoration: none;
  overflow: hidden;
  color: #333;
  font-family: Microsoft Yahei;
  display: block;
  font-size: 16px;
}
.menu a:hover {
  color: rgb(154, 52, 52);
  position: relative;
  left: 1px;
}
.menu ul li:first-child:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>