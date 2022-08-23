<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar></nav-bar>
    <div class="main">
      <div class="tupian">
        <div class="imgtext">
          <div class="img">
            <!-- <img :src="data[0].img" alt="" /> -->
          </div>
          <div class="text">
            <h3>
              {{ data[0].title }}
            </h3>
            <p>
              <a href="">简介{{ data[0].brief }}</a>
            </p>
            <div class="share">
              <a href="" class="weixin"></a>
              <a href="" class="weibo"></a>
              <a href="" class="qqzone"></a>
              <a href="" class="qq"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="list">
          <ul>
            <li v-for="(item, i) in data" :key="i" @click="goDetail(i)">
              <div class="fixtupian">
                <!-- <img :src="item.img" alt="" /> -->
              </div>
              <div class="list-text">
                <h3 class="title">{{ data[i].title }}</h3>
                <p class="brief">{{ data[i].brief }}</p>
                <div class="time">
                  <span class="date">{{ data[i].createtime }}</span>
                  <span class="via">{{ data[i].via }}</span>
                  <div class="share">
                    <a href="" class="weixin"></a>
                    <a href="" class="weibo"></a>
                    <a href="" class="qqzone"></a>
                    <a href="" class="qq"></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- //分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="queryInfo.pageSize"
      layout="total, prev, pager, next"
      :total="this.data.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  //数据监听：监听组件实例身上的属性的属性值变化
  watch: {
    //监听路由的信息是否发生变化，如果发生变化，再次发起请求
    $route(newValue, oldValue) {
      //再次发起ajax请求
      console.log("now", newValue, "old", oldValue);
      this.getData();
    },
  },
  components: { NavBar },
  data() {
    return {
      data: "",
      type: "",
      queryInfo: {
        currentPage: 1, //当前页数
        pageSize: 10, //当前每页显示多少条数据
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    goDetail(i) {
      let type = this.$route.query.id;
      if (type == 1) {
        this.$router.push("/newsdetails?hotid=" + Number(i + 1));
      }
      if (type == 2) {
        this.$router.push("/rightdetails?rid=" + Number(i + 1));
      }
      if (type == 3) {
        this.$router.push("/newsdetails?intid=" + Number(i + 1));
      }
    },
    getData() {
      console.log("$route", this.$route);
      const to = this.$route.query.id;
      //路由id=1，请求左侧新闻接口
      if (to == 1) {
        console.log("左");
        var url = `/v1/detail/left`;
        this.axios.get(url).then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
      }
      //路由id=2，请求右侧新闻接口
      if (to == 2) {
        console.log("右");
        var url = `/v1/detail/right`;
        this.axios.get(url).then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
      }
      //路由id=3，请求国际新闻接口
      if (to == 3) {
        console.log("国际");
        var url = `/v1/detail/international`;
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
/* 下边 图片文字列表 */
.time {
  margin-top: 35px;
  font-size: 14px;
  line-height: 26px;
  height: 25px;
  width: 100%;
  color: #999999;
  width: 860px;
  .date {
    margin-right: 40px;
    float: left;
    font-family: "microsoft yahei";
  }
  .via {
    margin-right: 40px;
    height: 25px px;
    float: left;
    width: 208px;
    overflow: hidden;
  }
  .share {
    width: 129px;
    height: 26px;
    float: right;
    position: relative;
    a {
      //   float: left;
      height: 26px;
      width: 26px;
      display: inline-block;
      background-repeat: no-repeat;
      margin-right: 8px;
      background-image: url("../assets/images/weixinqqxiao.png");
    }
    .weixin {
      background-position: 0 0;
    }
    .weibo {
      background-position: -33px 0;
    }
    .qqzone {
      background-position: -68px 0;
    }
    .qq {
      background-position: -103px 0;
      margin-right: 0px;
    }
  }
}
.title {
  width: 850px !important;
  font-size: 20px;
  line-height: 28px;
  color: #333;
  font-weight: normal;
}
h3 {
  margin: 0;
  padding: 0;
}
.brief {
  width: 850px !important;
  font-size: 14px;
  line-height: 26px;
  margin-top: 10px;
  height: 52px;
  overflow: hidden;
}
.list-text {
  float: left;
  width: 877px;
  margin-left: 30px;
}
.fixtupian {
  width: 273px;
  height: 154px;
  position: relative;
  float: left;
  border-radius: 5px;
  margin-left: 20px;

  img {
    width: 100%;
    height: 154px;
    border-radius: 5px;
  }
}

.bottom {
  width: 100%;
  padding-top: 20px;
  background-color: #f3f4f8;
}
.list {
  width: 80%;
  min-width: 1160px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 15px;
  //   display: inline-block;
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    li {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      min-width: 1200px;
      height: 154px;
      display: inline-block;
      background-color: #ffffff;
      //   border-bottom: 1px solid #e4e4e4;
      //   float: left;
      list-style: none;
      padding-top: 20px;
      padding-bottom: 20px;
      //   padding-left: 20px;
      //   position: relative;
    }
    li:hover {
      background-color: #f7f8fb;
    }
  }
}

/* 上边大图片 */
.main {
  width: 100%;
}
.tupian {
  box-sizing: border-box;
  width: 100%;
  height: 512px;
  overflow: hidden;
  padding-top: 25px;
  background-image: linear-gradient(#004aae, #d7ddf4, #ffffff);
}
.imgtext {
  width: 80%;
  min-width: 1200px;
  margin: auto;
}
.img {
  width: 65%;
  float: left;
  height: 480px;
  background-color: #ffffff;
  img {
    height: 100%;
  }
}
.text {
  width: 35%;
  height: 480px;
  float: right;
  background-color: white;
  h3 {
    width: 336px;
    height: 80px;
    overflow: hidden;
    font-size: 26px;
    line-height: 40px;
    color: #333333;
    margin: 0px 40px 13px 40px;
    padding-top: 32px;
  }
  p {
    width: 336px;
    height: 140px;
    overflow: hidden;
    font-size: 14px;
    line-height: 28px;
    color: #333333;
    margin: 0px 40px 0px 40px;
    padding-top: 13px;
    border-top: 1px solid #e9e9e9;
  }
  a {
    text-decoration: none;
    color: #d8d8d9;
  }

  .share {
    width: 190px;
    height: 36px;
    padding-top: 13px;
    margin: 0px 40px 0px 38px;
    position: relative;
    a {
      //   float: left;
      height: 36px;
      width: 37px;
      display: inline-block;
      background-repeat: no-repeat;
      margin-right: 12px;
      background-image: url("../assets/images/weixinqq.png");
    }
    .weixin {
      background-position: 0 0;
    }
    .weibo {
      background-position: -48px 0;
    }
    .qqzone {
      background-position: -96px 0;
    }
    .qq {
      background-position: -147px 0;
      margin-right: 0px;
    }
  }
}
</style>