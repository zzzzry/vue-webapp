<template>
    <div>
        <h1>首页</h1>
        <van-cell title="选择日期区间" :value="date" @click="show = true" />
        <van-calendar v-model="show" type="range" @confirm="onConfirm" />
        <tabBar></tabBar>
    </div>
</template>

<script>
import tabBar from "@/components/tabBar.vue"
    export default {
        data() {
            return {
                date: "",
                show: false
            };
        },
        components: {
          tabBar  
        },
        methods: {
            formatDate(date) {
                return `${date.getMonth() + 1}/${date.getDate()}`;
            },
            onConfirm(date) {
                const [start, end] = date;
                this.show = false;
                this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
            }
        }
    };
</script>

<style>
</style>