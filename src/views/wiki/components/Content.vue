<template>
  <div class="content">
    <el-timeline>
      
      <el-timeline-item timestamp="蓝兔 2018/4/12" placement="top">
        <el-card class="card-container">
          <h4>介绍：element ui框架的按钮组件，这款由饿了么前端开源的UI框架，一经面世，就收获大量程序员的芳心。在github 上更是高达29.8k的star早已说明一切。用于开发PC端的页面还是绰绰有余的。如果说你是用vue开发者，却没用过element UI，那你肯定不是合格的vue开发者。</h4>
          <div class="link-share">
            <a href="https://element.eleme.cn/2.8/#/zh-CN" target="_blank">
              <i class="el-icon-link"></i>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
            </a>
          </div>
          <div class="pic-box">
            <el-image src="https://media.ifanrusercontent.com/user_files/trochili/da/a4/daa4ded92b17bb5d3c92eb36ca05c33525b0cce0-8fc3e8a47449678815360a5b8764af36add4f67e.jpg" alt="picname" lazy></el-image>
          </div>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="王小虎 2018/4/3" placement="top">
        <el-card class="card-container">
          <h4>介绍：iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。使用单文件的 Vue 组件化开发模式 基于 npm + webpack + babel 开发，支持 ES2015 高质量、功能丰富 友好的 API ，自由灵活地使用空间，由TalkingData开发维护，有很多知名互联网企业都在使用。</h4>
          <div class="link-share">
            <a href="https://www.iviewui.com/" target="_blank">
              <i class="el-icon-link"></i>一套基于 Vue.js 的高质量UI 组件库
            </a>
          </div>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="虹猫 2018/4/2" placement="top">
        <el-card class="card-container">
          <h4>介绍：基于 Vue.js 的 Bootstrap 组件 该仓库包含一系列基于 Bootstrap 标记和 CSS 的本地 Vue.js 组件。所以不需要 jQuery 和 Bootstrap 的 JavaScript 文件，唯一需要依赖的是: Vue.js Bootstrap CSS ，VueStrap 不依赖某个非常精确的 Bootstrap 版本。如果喜欢bootstrap的小伙伴又不想换jquery的开发方式是不二的选择。</h4>
          <div class="link-share">
            <a href="http://yuche.github.io/vue-strap/" target="_blank">
              <i class="el-icon-link"></i>VueStrap
            </a>
          </div>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="虹猫 2018/4/2" placement="top">
        <el-card class="card-container">
          <h4>介绍：Vuetifyjs 根据材料设计规格提供 UI 布局。 V 1.0 Alpha 版本提供了超过 80个 reusbale 组件，其中包含一个易于记忆的语义设计，它基于名称简单明了 type-as-you 的类型属性。在GitHub 上有超过 7K 的 star</h4>
          <div class="link-share">
            <a href="https://vuetifyjs.com/zh-Hans/" target="_blank">
              <i class="el-icon-link"></i>让Vue和Material Design的强大力量在开发上助您一臂之力
            </a>
          </div>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="虹猫 2018/4/2" placement="top">
        <el-card class="card-container">
          <h4>介绍：cube-ui 是滴滴团队开发的基于 Vue.js 实现的精致移动端组件库。支持按需引入和后编译，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。</h4>
          <div class="link-share">
            <a href="https://didi.github.io/cube-ui/#/zh-CN" target="_blank">
              <i class="el-icon-link"></i>基于 Vue.js 实现的精致移动端组件库
            </a>
          </div>
        </el-card>
      </el-timeline-item>

    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="stylus" scoped>
  .content
    padding 20px 0 0 280px
    .card-container
      h4
        font-weight 400
        color #1f2f3d
        margin 5px 0 15px 0
        line-height 1.7em
      .link-share
        font-size 14px
        color #0366d6
        line-height 1.5em
        margin 10px 0 15px 0
        .el-icon-link
          margin-right 5px
        a
          color #0366d6
          &:hover
            text-decoration underline
      .pic-box
        width 200px
        height 200px
        padding 20px
        border 1px solid #eaeef1
        margin 20px 0 10px 0
        text-align center
        border-radius 3px
        img 
          width 100%
</style>
