<template>
  <div>
      <h1 @touchstart="click">个人</h1>
      <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar.vue"
export default {
    components: {
        tabBar
    },
    methods:{
        click(){
            this.$http.fetchGoodList().then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>