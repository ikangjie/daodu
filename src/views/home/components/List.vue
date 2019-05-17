<template>
  <div class="wrap-item-list">

    <el-row :gutter="20" type="flex">

      <el-col>
        <div class="grid-content">
          <div class="grid-title">
            <router-link class="text-link" to="">element</router-link>
          </div>
          <div class="grid-desc">
            Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
          </div>
          <div class="grid-toolbar">
            <router-link class="topic-tag" to="">javascript</router-link>
          </div>
        </div>
      </el-col>
      <el-col>
        <div class="grid-content">
          <div class="grid-title">
            <router-link class="text-link" to="">mint-ui</router-link>
          </div>
          <div class="grid-desc">
            基于 Vue.js 的移动端组件库
          </div>
          <div class="grid-toolbar">
            <router-link class="topic-tag" to="">vue</router-link>
          </div>          
        </div>
      </el-col>
      <el-col>
        <div class="grid-content">
          <div class="grid-title">
            <router-link class="text-link" to="">cooking</router-link>
          </div>
          <div class="grid-desc">
            更易上手的前端构建工具
          </div>
          <div class="grid-toolbar">
            <router-link class="topic-tag" to="">vue</router-link>
          </div>
        </div>
      </el-col>

    </el-row>

    <el-row :gutter="20" type="flex">
      <el-col>
        <div class="grid-content">
          <div class="grid-title">
            <router-link class="text-link" to="">node-interview</router-link>
          </div>
          <div class="grid-desc">
            How to pass the Node.js interview of ElemeFE.
          </div>
          <div class="grid-toolbar">
            <router-link class="topic-tag" to="">javascript</router-link>
            <router-link class="topic-tag" to="">nodejs</router-link>
          </div>
        </div>
      </el-col>
      <el-col>
        <div class="grid-content">
          <div class="grid-title">
            <router-link class="text-link" to="">vue-amap</router-link>
          </div>
          <div class="grid-desc">
            基于 Vue 2.x 和高德地图的地图组件
          </div>
          <div class="grid-toolbar">
            <router-link class="topic-tag" to="">vue</router-link>
            <router-link class="topic-tag" to="">地图</router-link>
          </div>          
        </div>
      </el-col>
      <el-col>
        <div class="grid-content">
          <div class="grid-title">
            <router-link class="text-link" to="">v-charts</router-link>
          </div>
          <div class="grid-desc">
            基于 Vue2.0 和 ECharts 封装的图表组件
          </div>
          <div class="grid-toolbar">
            <router-link class="topic-tag" to="">vue</router-link>
            <router-link class="topic-tag" to="">图表</router-link>
          </div>
        </div>
      </el-col>      
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="stylus" scoped>
  .wrap-item-list
    width 980px
    margin 0 auto
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol
    .grid-content
      width 100%
      border: 1px solid #d1d5da
      border-radius: 4px
      min-height: 36px
      padding 16px
      display flex
      flex-direction column
      .grid-title
        .text-link
          color: #0366d6
          font-weight 600
          font-size 14px
          display block
          &:hover
            text-decoration underline
      .grid-desc
        font-size 12px
        margin 8px 0 16px 0
        color #586069
        line-height 1.5
        flex: 1 0 auto
      .grid-toolbar
        font-size 0
        color #586069
        line-height 1.5
        span,a
          display inline-block
          font-size 12px
          vertical-align middle
        .card-type
          margin-right: 16px
          .color
            width 12px
            height 12px
            margin-right 5px
            border-radius: 50%
            background-color: #f1e05a
        .topic-tag
          background-color: #f1f8ff
          border-radius: 3px
          padding: .3em .9em
          white-space: nowrap
          color: #0366d6
          margin-right 5px
          &:hover
            background-color #def
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    display: flex;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-pagination{
    position relative
    left -10px
  }
</style>

