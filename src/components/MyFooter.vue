<template>
  <!-- 底部 -->
  <div class="foot_x">
    <div class="foot_main">
      <div class="bottomnav">
        <a href="#" style="border: 0px">网站首页</a>
        <a href="#">网站声明</a>
        <a href="#">移动传媒</a>
        <a href="#">广告营销</a>
        <a href="#">互联网电视</a>
        <a href="#">手机电视</a>
        <a href="#">法律顾问</a>
        <a href="#">人才招聘</a>
        <a href="#">留言反馈</a>
        <a href="#">联系我们</a>
      </div>
      <div class="bootTxt">
        地址：中国·山西·太原山西大学商务学院206室 电话：+86-2018330207
        传真：+86-12345789<br />
        版权所有：一路婷你有限公司 ICP备案编号：<a href="#">
          ICP备2018-2022-guoguo号</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* 底部 */
.foot_x {
  width: 100%;
  min-width: 1200px;
  background: #333;
  color: #dddede;
}
.foot_main {
  width: 1200px;
  margin: 0 auto;
  clear: both;
}
.bottomnav {
  width: 100%;
  height: 15px;
  padding: 28px 0;
  line-height: 15px;
  border-bottom: 1px solid #333;
  font-size: 12px;
  text-align: center;
}
.bottomnav a {
  border-left: 1px solid;
  color: #fff;
  padding: 0 20px;
  font-size: 14px;
}
.bootTxt {
  text-align: center;
  border-top: 1px solid #333;
  line-height: 30px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 50px;
  margin: 0 auto;
  overflow: hidden;
  font-size: 12px;
}
.bootTxt a {
  color: #fff;
}
a {
  text-decoration: none;
  outline: 0;
  color: #606060;
}
</style>