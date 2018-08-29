<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {

  /*测试
  async mounted(){
      const result = await reqAddress('41.10038,116.36867')
      console.log(result)
    },*/
  mounted(){
    this.$store.dispatch('getAddress')
  },
    components:{
      FooterGuide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
