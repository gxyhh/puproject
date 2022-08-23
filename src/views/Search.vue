<template>
  <div class="home">
    <div class="container" v-if="this.searchData">
      <div class="tip">
        <span> {{ input }} 全部网页结果共 {{ searchData.length }} 条</span>
      </div>
      <div class="outer">
        <ul>
          <li v-for="(data, i) in searchData" :key="i">
            <div class="tright">
              <h3 class="tit" @click="Judge(i)">简介：{{ data.title }}</h3>
              <p class="pre">
                <img :src="data.img" alt="" />
                {{ data.brief }}
              </p>
              <div class="src-tim">
                <span class="src">来源：{{ data.via }}</span>
                <span class="tim">发布时间：{{ data.createtime }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container2" v-else>
      <div class="nodata">
        <h3 class="tit" style="color: black">
          抱歉，没有找到“{{ input }}”的相关网页结果
        </h3>
        <div class="jianyi">
          <span>建议您：</span>
          <ul>
            <li>检查输入的关键词是否有误</li>
            <li>缩短关键词</li>
            <li>使用相近，相同或其他语义的关键词</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { input: {} },
  data() {
    return {
      searchData: "",
    };
  },
  //监听器,input变化重新发请求
  watch: {
    input() {
      this.getdata();
    },
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      const input = this.$route.params.input;
      console.log("$route", this.$route);
      var url = "/v1/option/searchnews";
      var params = `search=${input}`;
      console.log(params);
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == "200") {
          this.searchData = res.data.data;
          console.log(this.searchData);
        } else {
          console.log(this.searchData);
        }
      });
    },
    Judge(i) {
      if (this.searchData[i].sort == "hot") {
        this.$router.push("/newsdetails?hotid=" + this.searchData[i].hotid);
      } else if (this.searchData[i].sort == "int") {
        this.$router.push("/newsdetails?intid=" + this.searchData[i].hotid);
      } else if (this.searchData[i].sort == "soc") {
        this.$router.push("/newsdetails?rid=" + this.searchData[i].hotid);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.jianyi {
  margin-top: 20px;
  font-size: 15px;
  color: #666;
  span {
    margin-bottom: 10px;
  }
  li {
    padding-left: 15px;
    line-height: 20px;
    // list-style: none;
  }
}
.src {
  float: left;
}
.tim {
  float: right;
}
.src-tim {
  margin-top: 10px;
  font-size: 12px;
  color: #9f9f9f;
  font-family: "宋体";
  overflow: hidden;
}
.pre {
  font-size: 14px;
  color: #666;
  line-height: 20px;
  font-family: "宋体";
  overflow: hidden;
  img {
    float: left;
    margin-right: 10px;
    border-radius: 5px;
    width: 120px;
    height: 70px;
  }
}
.tit {
  display: inline-block;
  font-size: 23px;
  font-weight: normal;
  color: #073f80;
  margin-bottom: 10px;
  user-select: none;
}
.tright {
  h3:hover {
    color: #051d39;
  }
}
h3 {
  margin: 0;
  padding: 0;
}
.outer {
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }
}
.tip {
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  border-bottom: 2px solid #033266;
  padding-bottom: 2px;
  padding-left: 10px;
  margin-bottom: 20px;
}
.container {
  width: 80%;
  min-width: 1200px;
  margin: 20px auto;
  background-color: #f0eeee;
}

.container2 {
  width: 80%;
  min-width: 1200px;
  margin: 20px auto;
  background-color: #ffffff;
}
</style>