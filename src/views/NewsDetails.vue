<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar />
    <div class="container" v-for="(data, i) in data" :key="i">
      <div class="headline">
        {{ data.title }}
      </div>
      <div class="via">
        <span style="margin-right: 10px"
          >来源：
          {{ data.via }}
        </span>
        <span>
          {{ data.createtime }}
        </span>
        <!-- //收藏按钮 -->
        <el-button
          v-if="id"
          icon="el-icon-star-off"
          @click="checkstate()"
        ></el-button>
      </div>
      <hr />
      <div class="content" v-html="data.content">
        <p>
          <!-- {{ data.content }} -->
        </p>
      </div>
    </div>

    <div class="button">
      <el-button
        class="btn1"
        type="primary"
        size="small"
        icon="el-icon-s-promotion"
        @click="gohome()"
        >点击返回上一页</el-button
      >
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  //根据路由传入的index值，发请求获取对应的新闻信息
  data() {
    return {
      data: "",
      userinfo: "",
      userid: "",
      id: "",
    };
  },
  mounted() {
    this.getData();
    this.judgeId();
  },
  methods: {
    judgeId() {
      if (this.$route.query.hotid) {
        this.id = 1;
      } else {
        this.id = 0;
      }
    },
    async checkstate() {
      //判断当前用户登录状态
      if (this.$store.state.userState == null) {
        console.log("没有登录啊");

        //没有登录
        this.$message({
          message: "登录后可收藏",
          type: "warning",
          offset: 300,
        });
      } else {
        //登录查出当前用户id
        await this.checkuser();
        console.log("已查出用户id");
        //存储新闻id和用户id到收藏表
        await this.store();
      }
    },
    async store() {
      const newsid = this.$route.query.hotid;
      const userid = this.userid;
      var url = "/v1/option/store";
      var params = `user=${userid}&&news=${newsid}`;
      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == "200") {
          console.log("已收藏");
        } else {
        }
      });
    },
    checkuser() {
      var name = this.$store.state.userState;
      var url = "/v1/user/checkuserid";
      var params = `username=${name}`;
      return this.axios.post(url, params).then((res) => {
        console.log(res);
        console.log(res.data.data[0].uid);
        this.userid = res.data.data[0].uid;
      });
    },
    gohome() {
      this.$router.go(-1);
    },
    getData() {
      //路径中读取参数lid
      console.log("$route", this.$route);
      const hotid = this.$route.query.hotid;
      const intid = this.$route.query.intid;

      if (hotid) {
        var url = `/v1/detail/left/${hotid}`;
        this.axios.get(url).then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
      }
      if (intid) {
        var url = `/v1/detail/international/${intid}`;
        this.axios.get(url).then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  min-width: 100%;
  height: 40px;
  position: fixed;
  display: flex;
  // justify-content: flex-end;
  left: 90%;
  top: 30%;
}
.btn1 {
  position: relative;

  margin-right: 0;
  top: 10px;
}
.content {
  width: 1000px;
  margin: auto;
}
.via {
  font-size: 14px;
  margin-top: 10px;
  right: 100px;
  position: absolute;
}
.headline {
  text-align: center;
  font-family: "黑体";
  font-size: 38px;
  padding-top: 30px;
}
hr {
  background-color: #bebebe;
  height: 2px;
  width: 1200px;
  margin: 40px auto;
}
.container {
  width: 90%;
  position: relative;
  min-width: 1200px;
  background-color: white;
  margin: auto;
  padding-top: 30px;
}
.home {
  background-color: #f5f5f5;
  min-width: 1200px;
  // padding-top: 15px;
  // padding-bottom: 15px;
}
</style>