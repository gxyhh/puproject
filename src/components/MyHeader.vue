<template>
  <div style="width: 100%">
    <!-- 首页导航-->
    <div class="top_line"></div>
    <div id="header">
      <div class="main">
        <a href="#" class="imglogo"
          ><img
            src="../assets/images/logo2.png"
            width="430"
            height="110"
            class="png"
        /></a>
        <!-- 搜索区 -->
        <div class="search bar">
          <form>
            <input
              v-model="input"
              type="text"
              placeholder="请输入您要搜索的内容..."
              @keyup.enter="search()"
            />
            <el-button
              icon="el-icon-search"
              circle
              size="medium"
              type="primary"
              @click="search()"
            ></el-button>
          </form>
          <div class="mobile" v-if="$store.state.userState" @click="gohome()">
            欢迎：{{ $store.state.userState }}
            <span class="tuichu" @click="clear()">退出</span>
          </div>
          <div class="mobile" v-else>
            <div class="mblog">
              <a href="#"
                ><img
                  src="../assets/images/weibo.png"
                  width="25px"
                  height="25px"
                />
                &nbsp;&nbsp;微博</a
              >
            </div>
            <div class="line">|</div>
            <div class="wechat">
              <a href="#"
                ><img
                  src="../assets/images/weixin.png"
                  width="20px"
                  height="20px"
                />
                &nbsp;&nbsp;微信</a
              >
            </div>
            <div class="line">|</div>
            <router-link to="/login">登录</router-link>
            <div class="line">|</div>
            <router-link to="/register">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="menu">
      <ul>
        <li>
          <router-link to="/"
            ><img src="../assets/images/panda.png" alt="" style="width: 40px"
          /></router-link>
        </li>
        <li><a @click="getleft()">新闻</a></li>
        <li><a @click="getright()">社会</a></li>
        <li><a @click="getinternational()">国际</a></li>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      searchData: "",
    };
  },
  methods: {
    gohome() {
      this.$route.push("/gohome");
    },
    getleft() {
      this.$router.push("/sub?id=1");
    },
    getright() {
      this.$router.push("/sub?id=2");
    },
    getinternational() {
      this.$router.push("/sub?id=3");
    },
    clear() {
      this.$store.commit("logout");
    },
    search() {
      console.log(this.input);
      if (this.input == "") {
        return;
      } else {
        const path_now = this.$route.path;
        const path_to = "/search/" + this.input;
        console.log(path_now, path_to);
        if (path_now == path_to) return;
        this.$router.push(`/search/${this.input}`);
      }
    },
  },
};
</script>


<style scoped>
.tuichu {
  user-select: none;
  margin-left: 10px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  color: #696868;
  font-size: 14px;
}
.top_line {
  width: 100%;
  min-width: 1200px;
  height: 5px;
  line-height: 0;
  font-size: 0;
  background: #333333;
}
#header {
  overflow: hidden;
  width: 100%;
  min-width: 1200px;
  margin-top: 10px;
}
.main {
  width: 1080px;
  margin: 0 auto;
  clear: both;
}
#header .main a {
  margin-bottom: 2px;
  float: left;
  display: inline;
}
.imglogo {
  margin-top: 15px;
}
a {
  text-decoration: none;
  outline: 0;
  color: #606060;
}
.main img {
  float: left;
}
/* 搜索区 */
.search {
  float: right;
  padding: 30px 0;
}
form {
  position: relative;
  width: 250px;
  margin: 0 auto;
}
input,
button {
  border: none;
  outline: none;
}
.bar input {
  border: 2px solid #333333;
  border-radius: 5px;
  /* background: #F9F0DA; */
  color: #9e9c9c;
  width: 100%;
  height: 42px;
  padding-left: 13px;
}
.bar button {
  top: 0;
  right: 0;
  background: #333333;
  border-radius: 0 5px 5px 0;
  height: 42px;
  width: 42px;
  cursor: pointer;
  position: absolute;
}
.bar button:active {
  opacity: 0.8;
}
.bar button:before {
  font-family: FontAwesome;
  font-size: 16px;
  color: #f9f0da;
}
.search .mobile {
  width: 260px;
  margin: 12px 0 0 0;
  overflow: hidden;
}
.mobile .mblog {
  font-size: 16px;
  color: #333333;
  float: left;
}
.mobile .line {
  float: left;
  width: 20px;
  text-align: center;
  color: #333333;
}
.search .mobile .wechat {
  font-size: 16px;
  color: #333333;
  float: left;
  cursor: pointer;
  position: relative;
}
/* 导航栏 */
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none;
}
.menu {
  width: 100%;
  background: #333333;
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
  overflow: hidden;
  color: #fff;
  font-family: Microsoft Yahei;
  display: block;
  font-size: 16px;
}
.menu a:hover {
  color: rgb(154, 52, 52);
  position: relative;
  left: 1px;
  cursor: pointer;
}
.menu ul li:first-child:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>