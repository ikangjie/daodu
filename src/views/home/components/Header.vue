<template>
  <div class="home-header">
    <div class="container">
      <div class="org-table">
        <div class="logo">
          <img src="https://avatars2.githubusercontent.com/u/12810740?s=200&amp;v=4" width="66" height="66" alt="@导读">
        </div>
        <div class="org-item">
          <h1 class="blog-name">Daodu</h1>
          <p class="description">work hard, play harder</p>
        </div>
      </div>
      <div class="org-nav">
        <div class="org-tabs">
          <router-link class="item-tabs selected" to="">
            <span>Repositories</span>
            <span class="counter">6</span>
          </router-link>
        </div>
        <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
        <el-button type="primary" icon="el-icon-search" style="height:40px;margin-left:5px">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-header
    padding-top 20px
    border-bottom 1px solid #eee
    color #666
    margin-bottom 20px
    background-color #fafbfc
    font-family -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol
    .container
      width 980px
      margin 0 auto
      .org-table
        display flex
        padding-bottom 20px
        .logo
          width 66px
          margin-right 20px
          img 
            max-width 100%
        .org-item
          flex 1
          .blog-name
            color #333
            font-weight 400
            line-height 1.25
            font-size 28px
          .description
            padding-top 8px
            color #666
            font-size: 14px
            line-height: 1.5
      .org-nav
        padding-top 10px
        position relative
        top 1px
        font-size 0
        display flex
        .org-tabs
          width 600px 
          a
            display inline-block
            padding: 8px 15px 11px
            border: 1px solid transparent
            border-radius: 3px 3px 0 0
            border-top: 3px solid transparent
            font-size: 14px
            line-height: 1.5
            &.selected
              background-color: #fff
              border-color: #3a8ee6 #e1e4e8 transparent
              color: #24292e
              font-weight: 600
            span 
              vertical-align middle
              &.counter
                background-color: rgba(27,31,35,.08)
                border-radius: 20px
                color: #586069
                display: inline-block
                font-size: 12px
                font-weight: 600
                line-height: 1
                padding: 2px 5px
                margin-left 5px
        .el-input
          flex 1
</style>
