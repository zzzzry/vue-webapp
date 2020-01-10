<template>
	<div>
		<van-swipe :autoplay="3000" class="swipe">
			<van-swipe-item
				v-for="(image, index) in images"
				:key="index"
				@touchstart="click(index)"
			>
				<img :src="image" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: [
				"https://img.yzcdn.cn/vant/apple-1.jpg",
				"https://img.yzcdn.cn/vant/apple-2.jpg"
			]
		};
	},
	methods: {
		click(idx) {
			this.$router.push("/details/" + idx);
		}
	}
};
</script>

<style lang="scss" scoped>
#find {
	.swipe {
		width: 100%;
		img {
			width: 100%;
		}
	}
}
</style>
