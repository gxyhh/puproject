<template>
  <div>
    <my-header v-show="!$route.meta.hideHeader" />
    <router-view />
    <my-footer v-show="!$route.meta.hideFooter" />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader, MyFooter },
};
MyFooter;
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
</style>