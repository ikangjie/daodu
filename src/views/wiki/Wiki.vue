<template>
    <div class="wiki">
      <div class="container">
        <wiki-side-menu></wiki-side-menu>
        <wiki-content></wiki-content>
        <wiki-scroll-top></wiki-scroll-top>
      </div>
    </div>
</template>

<script>
import WikiSideMenu from './components/SideMenu'
import WikiContent from './components/Content'
import WikiScrollTop from '@/common/scrolltop/ScrollTop'
export default {
  name: 'Wiki',
  components: {
    WikiSideMenu,
    WikiContent,
    WikiScrollTop
  },
  mounted () {
    // this.$axios.get("/yuanlaijike/article/details/80522621")
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
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
