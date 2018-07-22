<template>
  <div id="app">
    <nav id="navigation">
      <h2 class="title">Mocking</h2>
      <el-menu
        default-active="1"
        router
      >
        <el-menu-item index="home">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-menu-item index="server">
          <i class="el-icon-menu"></i>
          <span slot="title">服务管理</span>
        </el-menu-item>
        <el-menu-item index="api">
          <i class="el-icon-sort"></i>
          <span slot="title">接口管理</span>
        </el-menu-item>
        <el-submenu index="data">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </nav>
    <div id="main"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 240px;
  height: 100%;

  .title {
    text-align: center;
  }

  .el-menu {
    height: 100%;
  }
}

#main {
  margin-left: 250px;
  margin-top: 90px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
