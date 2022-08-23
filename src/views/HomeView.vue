<template>
  <div class="home" v-if="leftlist">
    <div class="container">
      <!-- 头条&轮播 -->
      <div class="headline">
        <div class="head_top">
          <strong @click="goDetails(0)"
            ><span style="color: #bf0614">头条 · </span
            >{{ leftlist[0].title }}</strong
          >
        </div>
        <div class="head_bot">
          <a @click="goDetails(1)">{{ leftlist[1].title }} </a>|
          <a @click="goDetails(2)">{{ leftlist[2].title }} </a>|
          <a @click="goDetails(3)">{{ leftlist[3].title }}</a>
        </div>
      </div>
      <div class="imgbox">
        <swiper
          @mouseover.native="stopSwiper"
          class="swiper"
          ref="swiper"
          :options="swiperOption"
        >
          <swiper-slide><img src="/img/rota001.jpg" /></swiper-slide>
          <swiper-slide><img src="/img/rota002.jpg" /></swiper-slide>
          <swiper-slide><img src="/img/rota003.jpg" /></swiper-slide>
          <swiper-slide><img src="/img/rota004.jpg" /></swiper-slide>
          <swiper-slide><img src="/img/rota005.jpg" /></swiper-slide>
          <swiper-slide><img src="/img/rota006.jpg" /></swiper-slide>
        </swiper>
        <div class="tu_list">
          <ul>
            <li
              v-for="(nav, index) in rota"
              :key="index"
              :class="{ active: nowIndex == index }"
              @mouseover="nowIndex = index"
            >
              <span> {{ nav.rotatitle }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 要闻 -->
    <div class="main">
      <div class="yaowen">
        <span>要闻</span>
      </div>
      <div class="main_lr">
        <div class="m_left">
          <div class="m_l_top">
            <div>
              <h2>
                <a @click="goDetails(4)">{{ leftlist[4].title }}</a>
              </h2>
            </div>
            <ul class="viceHead">
              <li>
                <span class="att">新闻+</span
                ><a @click="goDetails(5)">{{ leftlist[5].title }}</a>
              </li>
              <li>
                <span class="att">快评</span
                ><a @click="goDetails(6)">{{ leftlist[6].title }}</a>
              </li>
            </ul>
          </div>
          <div class="m_l_bottom">
            <div class="m_l_b_left">
              <ul>
                <li
                  v-for="(left, index) in leftlist.slice(7, 16)"
                  :key="index"
                  @click="goDetails(index + 7)"
                >
                  {{ left.title }}
                </li>
                <!-- <li>中共中央台办发言人受权就发表白皮书发表谈话</li>
                <li>东部战区在台岛周边组织的军事行动成功完成各项任务</li>
                <li>国防部就我军在台岛周边组织的联合军事行动答记者问</li>
                <li>全国累计报告接种新冠疫苗34亿剂次</li>
                <li>北京累计判定密接人员124人</li>
                <li class="bold">
                  国防部就我军在台岛周边组织的联合军事行动答记者问
                </li>
                <li>全国累计报告接种新冠疫苗34亿剂次</li>
                <li>北京累计判定密接人员124人</li> -->
              </ul>
            </div>
            <div class="m_l_b_right">
              <div class="m_lbr_top">
                <ul>
                  <li
                    v-for="(left, index) in leftlist.slice(16, 19)"
                    :key="index"
                    @click="goDetails(index + 16)"
                  >
                    {{ left.title }}
                  </li>
                  <!-- <li>为了胜利的一次“出手”</li>
                  <li>2022世界5G大会在哈尔滨开幕</li> -->
                </ul>
              </div>
              <div class="pictitle">
                <ul class="ptul">
                  <li>
                    <img src="/img/1660114680565_41.jpg" alt="" />
                    <div class="text">
                      <a href="">何博：因为热爱，所以坚持</a>
                    </div>
                    <div class="textbox">
                      <a href="">国内新闻</a>
                    </div>
                  </li>
                  <li>
                    <img src="/img/1660111966189_237.jpg" alt="" />
                    <div class="text">
                      <a href="">何博：因为热爱，所以坚持</a>
                    </div>
                    <div class="textbox">
                      <a href="">人物新闻</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="m_l_bottom">
            <div class="m_l_b_right">
              <div class="pictitle">
                <ul class="ptul">
                  <li>
                    <img src="/img/1660099073382_923.jpg" alt="" />
                    <div class="text">
                      <a href="">欧盟削减天然气用量协议正式生效</a>
                    </div>
                    <div class="textbox">
                      <a href="">国际新闻</a>
                    </div>
                  </li>
                  <li>
                    <img src="/img/1660099232995_642.jpg" alt="" />
                    <div class="text">
                      <a href="">数据显示美国在叙利亚非法驻军掠夺大量石油</a>
                    </div>
                    <div class="textbox">
                      <a href="">国际新闻</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="m_l_b_left">
              <ul>
                <li
                  v-for="(international, index) in international.slice(0, 5)"
                  :key="index"
                  @click="goInternational(index)"
                >
                  {{ international.title }}
                </li>
                <!-- <li>中共中央台办发言人受权就发表白皮书发表谈话</li>
                <li>东部战区在台岛周边组织的军事行动成功完成各项任务</li>
                <li>国防部就我军在台岛周边组织的联合军事行动答记者问</li>
                <li>全国累计报告接种新冠疫苗34亿剂次</li> -->
              </ul>
            </div>
          </div>
        </div>
        <!-- 右侧列表 -->
        <div class="m_right">
          <div class="con">
            <ul v-for="(r, i) in right.slice(0, 8)" :key="i">
              <li>
                <div class="image">
                  <img :src="r.img" alt="" @click="gorightDetails(i)" />
                </div>
                <div class="title">
                  <p @click="gorightDetails(i)">
                    <a>
                      {{ r.title }}
                    </a>
                  </p>
                  <div class="textbox">
                    <a href="">{{ r.via }}</a>
                  </div>
                </div>
              </li>
            </ul>
            <!-- <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>海南抓实抓细疫情防控措施</p>

                  <div class="textbox">
                    <a href="">新闻联播</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>全民健身，让体育成为刚需</p>
                  <div class="textbox">
                    <a href="">焦点访谈</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>国家卫生健康委：将阿兹夫定片纳入新冠肺炎诊疗方案</p>
                  <div class="textbox">
                    <a href="">共同关注</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>海南抓实抓细疫情防控措施</p>
                  <div class="textbox">
                    <a href="">新闻联播</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>海南抓实抓细疫情防控措施</p>
                  <div class="textbox">
                    <a href="">新闻联播</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>海南抓实抓细疫情防控措施</p>
                  <div class="textbox">
                    <a href="">新闻联播</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="image">
                  <img src="/img/1660099073382_923.jpg" alt="" />
                </div>
                <div class="title">
                  <p>海南抓实抓细疫情防控措施</p>
                  <div class="textbox">
                    <a href="">新闻联播</a>
                  </div>
                </div>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  // watch: {
  //   "this.$refs.swiper.$swiper.activeIndex"(to, from) {
  //     console.log("现在", to, "以前", from);
  //   },
  // },
  mounted() {
    this.getSwiper();
    this.getLeft();
    this.getInternational();
    this.getRight();
  },

  methods: {
    gorightDetails(index) {
      this.$router.push("/rightdetails?rid=" + Number(index + 1));
    },
    goInternational(i) {
      this.$router.push("/newsdetails?intid=" + Number(i + 1));
    },
    goDetails(i) {
      // alert("当前点击新闻index:" + i);
      this.$router.push("/newsdetails?hotid=" + Number(i + 1));
    },
    getSwiper() {
      var url = "/v1/index/rota";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.rota = res.data.data;
      });
    },
    stopSwiper() {
      console.log(this.$refs);
    },
    getRight() {
      var url = "/v1/index/right";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.right = res.data.data;
      });
    },
    getInternational() {
      var url = "/v1/index/international";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.international = res.data.data;
      });
    },
    getLeft() {
      var url = "/v1/index/leftlist";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.leftlist = res.data.data;
      });
    },
  },

  name: "swiper-example-vertical",
  title: "Vertical slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    //slideChange事件函数。在当前Slide切换到另一个Slide时执行(activeIndex发生改变)，一般是在点击控制组件、释放滑动的时间点。
    // var mySwiper = new Swiper(".swiper", {
    //   on: {
    //     slideChange: function () {
    //       alert("改变了，activeIndex为" + this.activeIndex);
    //     },
    //   },
    // });
    return {
      right: "",
      international: "",
      rota: "",
      leftlist: "",
      nowIndex: 0,
      // navList: [
      //   { index: 0, title: "随着人们生活水平不断提高和遗传等因素的影响" },
      //   { index: 1, title: "随着人们生活水平不断提高和的影响" },
      //   { index: 2, title: "随着人们生活水平不断提高和遗传等素的影响" },
      //   { index: 3, title: "随着人们生活水平不断提高和因素的影响" },
      //   { index: 4, title: "随着人平不断提高和遗传等因素的影响" },
      //   { index: 5, title: "随着人们生不断提高和遗传等因素的影响" },
      // ],

      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        autoplay: { delay: 5000 },
        disableOnInteraction: true,
      },
    };
  },
};
</script>
<style scoped lang="scss">
.m_right {
  .con {
    padding: 8px 15px;
    ul {
      padding: 7px 0;
    }
    li {
      height: 84px;
      padding: 8px, 0;
      display: flex;
      .image {
        width: 150px;
        height: 84px;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          transition: 0.6s;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
      .title {
        width: 190px;
        height: 84px;
        line-height: 26px;
        margin-left: 16px;
        position: relative;
        p {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
      .textbox {
        position: absolute;
        bottom: 2px;
        a {
          background-color: #bf0614;
          border-radius: 0 7px 0 0;
          color: white;
          padding: 3px;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
}

.pictitle {
  .ptul {
    display: flex;
    justify-content: space-between;
    li {
      background-color: #fff;
      width: 185px;
      overflow: hidden;
      img {
        width: 100%;
        transition: 0.6s;
        &:hover {
          transform: scale(1.1);
        }
      }
      .text {
        width: 155px;
        margin: 10px 15px;
        font-size: 13px;
        line-height: 26px;
      }
      .textbox {
        width: 155px;
        margin: 20px 15px;
        font-size: 13px;
        line-height: 26px;
        a {
          color: rgb(115, 114, 114);
          &:hover {
            color: #bf0614;
          }
        }
      }
    }
  }
}

.m_l_b_right {
  width: 390px;
  margin-bottom: 18px;
  .m_lbr_top {
    background-color: #fff;
    margin-bottom: 20px;
    ul {
      padding: 8px 14px 9px 14px;
      overflow: hidden;
      li {
        line-height: 41px;
        font-size: 13px;
        &:hover {
          color: #bf0614;
        }
      }
      li:nth-child(1) {
        line-height: 42px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}

.m_l_b_left {
  width: 390px;
  margin-bottom: 18px;
  background-color: #fff;
  ul {
    padding: 8px 14px 9px 14px;
    overflow: hidden;
    li {
      line-height: 41px;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        color: #bf0614;
      }
    }
    li:nth-child(1),
    li:nth-child(6) {
      line-height: 42px;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
.m_l_bottom {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.viceHead {
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  li {
    font-size: 14px;
    padding: 0 15px;
    width: 330px;
    height: 28px;
    line-height: 28px;
  }
}
.main_lr .m_left .m_l_top {
  background: white;
  margin-bottom: 20px;
  h2 {
    font-weight: normal;
    line-height: 52px;
    padding: 14px;
    font-size: 30px;
    padding-bottom: 8px;
  }
  .att {
    background: #bf0614;
    border: 1px solid #bf0614;
    border-radius: 0 10px 0 10px;
    color: white;
    padding: 3px;
    margin-right: 10px;
  }
}

.home .main {
  width: 80%;
  margin: auto;
  min-width: 1200px;
  .yaowen {
    margin-top: 20px;
    margin-bottom: 15px;
    span {
      color: #333;
      font-size: 30px;
      line-height: 60px;
      font-weight: bold;
    }
  }
  .main_lr {
    min-width: 1200px;
    display: flex;
    justify-content: space-between;
    .m_left {
      width: 800px;
      // background-color: #fff;
    }
    .m_right {
      width: 370px;
      background-color: #fff;
      margin-bottom: 20px;
    }
  }
}

.imgbox {
  width: 100%;
  height: 550px;
  position: relative;

  .swiper {
    width: 100%;
    height: 550px;
    img {
      position: absolute;
    }
  }
  .tu_list {
    position: absolute;
    top: 0;
    left: 73%;
    z-index: 10;
    width: 294px;
    height: 550px;
    background: rgba($color: #232323, $alpha: 0.7);
    ul {
      padding: 18px 0;
      list-style: none;
      li {
        height: 55px;
        line-height: 55px;
        padding: 15px 15px;
        vertical-align: middle;
        font-size: 14px;
        user-select: none;
        color: white;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        &.active {
          background: linear-gradient(to right, #bf0614, #232323);
          font-size: 16px;
          font-weight: 600;
          font-family: "黑体";
        }
        span {
          line-height: normal;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}
.home {
  background-color: #f5f5f5;
  min-width: 1200px;
  // padding-top: 15px;
  // padding-bottom: 15px;
}
.container {
  background-color: white;
  width: 90%;
  min-width: 1200px;
  margin: auto;
}
.headline {
  padding-top: 20px;
  user-select: none;
  text-align: center;
  .head_top {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
    &:hover {
      color: #bf0614;
    }
  }
  .head_bot {
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: black;
      font-size: 16px;
      &:hover {
        color: #bf0614;
      }
    }
  }
}
* {
  margin: 0;
  padding: 0;
}
a {
  user-select: none;
  text-decoration: none;
  color: black;
  &:hover {
    color: #bf0614;
  }
}
li {
  list-style: none;
  user-select: none;
}
</style>