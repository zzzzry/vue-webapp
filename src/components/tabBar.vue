<template>
    <div class="tabBar">
        <!-- <router-link to="/" tag="div" active-class="on" exact>首页</router-link>
        <router-link to="/find" tag="div" active-class="on" exact>发现</router-link>
        <router-link to="/user" tag="div" active-class="on" exact>个人</router-link> -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/find">发现</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o" to="/user">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                active:1
            }
        }
    };
</script>

<style lang="scss" scoped>
.tabBar {
    background: #ccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    font-size: 0.533333rem;
    & > div {
        flex: 1;
        height: 1.333333rem;
        line-height: 1.333333rem;
        &.on {
            background: cadetblue;
            color: #fff;
        }
    }
}
</style>