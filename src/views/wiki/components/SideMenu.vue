<template>
  <div class="side-menubar">

    <el-scrollbar class="el-scrollbar">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="1-1"
            text-color="#2c3e50"
            @open="handleOpen"
            @close="handleClose">

            <el-menu-item class="menu-tools">
              <template slot="title">
                <span class="back-home">
                  <router-link to="/">
                    <el-tooltip class="menu-spare-item" effect="dark" content="回到首页" placement="top-start">
                      <i class="el-icon-s-home"></i>
                    </el-tooltip>
                  </router-link>
                </span>
                <span class="menu-spare">
                  <el-tooltip class="menu-spare-item" effect="dark" content="展开所有导读" placement="top-start">
                    <i class="iconfont iconzhankai"></i>
                  </el-tooltip>
                  <el-tooltip class="menu-spare-item" effect="dark" content="定位当前导读" placement="top-start">
                    <i class="iconfont iconyuandian"></i>
                  </el-tooltip>
                  <el-tooltip class="menu-spare-item" effect="dark" content="收起所有导读" placement="top-start">
                    <i class="iconfont iconshouqi"></i>
                  </el-tooltip>
                </span>
              </template>            
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title">
                <span>Vue 成长之路</span>
              </template>
              <el-menu-item index="1-1">
                <span>入门</span>
                <span class="counter">180</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <span>进阶</span>
                <span class="counter">13</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <span>碎片学习</span>
                <span class="counter">29</span>
              </el-menu-item>
              <el-menu-item index="1-4">
                <span>Vue Router</span>
                <span class="counter">86</span>
              </el-menu-item>
              <el-menu-item index="1-5">
                <span>Vuex</span>
                <span class="counter">134</span>
              </el-menu-item>
              <el-menu-item index="1-6">
                <span>Vue Axios</span>
                <span class="counter">153</span>
              </el-menu-item>
              <el-menu-item index="1-7">
                <template slot="title">
                  <span>Vue CLI 安装</span>
                  <span class="counter">99</span>
                </template>     
              </el-menu-item>
              <el-menu-item index="1-8">
                <span>服务端渲染 (Vue SSR)</span>
                <span class="counter">75</span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="2">
              <template slot="title">
                <span>Vue UI 框架大全</span>
                <span class="counter">66</span>
              </template>

            </el-menu-item>

            <el-menu-item index="3">
              <template slot="title">
                <span>Vue 组件资源</span>
                <span class="counter">8</span>
              </template>            
            </el-menu-item>

          </el-menu>
        </el-col>
      </el-row>
    </el-scrollbar>

  </div>

</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" scoped>
  .side-menubar
    width 250px
    height 100%
    position fixed
    overflow hidden
  .el-scrollbar
    height 100%
    overflow-x hidden
  .el-col-12
    width 100%
    height 100%
    .el-menu
      border none 
    .el-menu-item
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      span 
        vertical-align middle
      .counter
        background-color: rgba(27,31,35,.08)
        border-radius: 20px
        display: inline-block
        font-size: 12px
        line-height: 1
        padding: 2px 5px
        margin-left 5px
        color #586069
  >>> .el-submenu__icon-arrow
        font-weight 900
        color #303133
  >>> .el-scrollbar__wrap
        overflow-x hidden
      .menu-tools
        cursor: inherit
        background-color #fff
        display flex
        padding-right 0
        .back-home,
        .menu-spare
          flex 1
        .back-home
          position relative
          a 
            position absolute
            top 50%
            transform translateY(-50%)
          .el-icon-s-home
            font-size 20px
            color #409EFF
            &:hover 
              color #0366d6
        .menu-spare
          text-align right
          .iconzhankai
          .iconshouqi,
          .iconyuandian
            font-size 20px
            margin-left 8px
            color #409EFF
            cursor pointer
            &:hover 
              color #0366d6
        &:hover,
        &:focus,
        &.is-active
          background-color #fff
  >>> .el-menu-item.is-active
        background-color #ecf5ff
        .counter
          color #fff
          transition all .2s ease
</style>
