<template>
  <div class="home">
    <div class="main_nav">
      <div>
        <ul>
          <li>您好！欢迎使用</li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <span class="iconfont iconyonghu"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="iconfont icontuichu"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <SearchMain />
    <div class="footer">
      <span>版本号：</span>
      <span>1.0.1</span>
    </div>
  </div>
</template>
<script>
import SearchMain from "@/components/searchIndex.vue";

export default {
  name: "searchIndex",
  components: {
    SearchMain
  }
};
</script>
<style lang="less">
.home {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main_nav {
  width: 100%;
  height: 60px;
  background-color: #017398;
}

.main_nav > div {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  line-height: 60px;
}

.main_nav ul {
  height: 60px;
  display: flex;
  color: #fff;
}

.main_nav ul:nth-child(1) {
  float: left;
}

.main_nav ul:nth-child(2) {
  float: right;
}

.main_nav a,
.main_nav span {
  color: #fff;
  font-size: 20px;
}

.main_nav ul:nth-child(2) li {
  padding-left: 15px;
}
.footer {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e7e7e7;
}
</style>


