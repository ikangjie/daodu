<template>
  <div class="home">
    <home-header></home-header>
    <home-list></home-list>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeList from './components/List'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeList
  }
}
</script>
