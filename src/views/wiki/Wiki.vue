<template>
    <div class="wiki">
      <div class="container">
        <wiki-side-menu></wiki-side-menu>
        <wiki-content></wiki-content>
      </div>
    </div>
</template>

<script>
import WikiSideMenu from './components/SideMenu'
import WikiContent from './components/Content'
export default {
  name: 'Wiki',
  components: {
    WikiSideMenu,
    WikiContent
  }  
}
</script>

<style lang="stylus" scoped>
  .wiki
    position absolute
    width 100%
    height 100%
    top 0px
    left 0px
    // overflow hidden
  .el-scrollbar
    width 100%
    height 100%
    overflow-x hidden
  .container
    width 980px
    margin auto
  >>> .el-scrollbar__wrap
        overflow-x hidden
</style>
