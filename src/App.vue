<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #8f8f8f;
  background-color: #fcfcfd;
  #app{
    height: inherit;
  }
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
