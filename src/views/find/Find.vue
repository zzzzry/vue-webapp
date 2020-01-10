<template>
    <div id="find">
        <h1>发现</h1>
        <MySwipe></MySwipe>
        <tabBar></tabBar>
    </div>
</template>

<script>
    import tabBar from "@/components/tabBar.vue";
    const MySwipe = () => import("@/components/swipe.vue");
    export default {
        components: {
            MySwipe,
            tabBar
        }
    };
</script>

<style lang="scss" scoped>
</style>
