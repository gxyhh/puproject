<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="container" v-for="(data, i) in data" :key="i">
      <div class="headline">{{ data.title }}</div>
      <div class="via">
        <span style="margin-right: 10px">来源：{{ data.via }} </span>
        <span> {{ data.createtime }}</span>
      </div>
      <hr />
      <div class="content">
        <img :src="data.img" alt="" />
        <p>{{ data.content }}</p>
      </div>
    </div>
    <div class="button">
      <el-button
        class="btn1"
        type="primary"
        size="small"
        icon="el-icon-s-promotion"
        @click="goback()"
        >点击返回上一页</el-button
      >
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    getData() {
      //路径中读取参数id
      console.log("$route", this.$route);
      const id = this.$route.query.rid;
      var url = `/v1/detail/right/${id}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
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
  width: 1200px;
  margin: auto;
  img {
    display: block;
    margin: auto;
  }
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
}
.home {
  background-color: #f5f5f5;
  min-width: 1200px;
  // padding-top: 15px;
  // padding-bottom: 15px;
}
</style>