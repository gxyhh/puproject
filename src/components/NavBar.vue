<template>
  <!-- 导航栏 -->
  <div class="menu">
    <ul>
      <li>
        <a href="/"
          ><img src="../assets/images/panda.png" alt="" style="width: 40px"
        /></a>
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
      <li v-if="$store.state.userState" class="huanying">
        欢迎：{{ $store.state.userState }}
      </li>
      <li @click="clear()" v-if="$store.state.userState" class="huanying">
        退出
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
// 欢迎
.huanying {
  color: #004aae;
  font-size: 18px;
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
  cursor: pointer;
}
.menu ul li:first-child:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>