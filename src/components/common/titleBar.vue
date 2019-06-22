<template>
	<div class="hdWrap">
		<header class="hd clearFix">
			<a href="javascript:;" class="fl" @click="goBack">
				<i class="iconfont icon-fanhui"></i>
			</a>
			<a href="javascript:;" class="fr">
				<i class="iconfont icon-gengduo"></i>
			</a>
			<div class="search">
				<i class="iconfont icon-sousuo"></i>
				<span>{{title}}</span>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: ['title'], //接受父级参数
	components: {},
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.hdWrap {
    height: 95 /@rem;
    border-bottom: 0.5px solid #f5f5f9;
	.hd {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 95 / @rem;
		line-height: 95 / @rem;
		padding: 0 75/4 / @rem;
        background-color: white;
        border-bottom: 0.5px solid #f5f5f9;
		z-index: 996;
		font-size: 32 / @rem;
		i {
			font-size: 32 / @rem;
		}
		a {
			padding: 0 10 / @rem;
			color: #2c3e50;
		}
		.search {
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 75%;
			height: 75%;
			background-color: #f5f5f9;
			transform: translateY(-50%);
			line-height: 71 / @rem;
			border-radius: 8px;
			span {
				color: #2c3e50;
				font-size: 30 / @rem;
			}
		}
	}
}
</style>
