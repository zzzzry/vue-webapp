<template>
    <div id="details">
        <van-nav-bar
            title="Details"
            left-text="返回首页"
            left-arrow
            @click-left="onClickLeft"
        />
        <h2 v-text="$route.params.id"></h2>
        <h3 v-text="msg"></h3>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        computed: {
            ...mapState("test", ["msg"])
        },
        methods: {
            onClickLeft() {
                this.$router.push("/")
            },
        }
    };
</script>

<style>
</style>