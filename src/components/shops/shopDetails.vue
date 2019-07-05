<template>
	<div class="high">
		<!-- header -->
        <header></header>
		<header class="hd clearFix">
			<a href="javascript:;" class="fl" @click="goBack">
				<i class="iconfont icon-fanhui"></i>
			</a>
			<a href="javascript:;" class="fr">
				<i class="iconfont icon-leimupinleifenleileibie2"></i>
			</a>
			<div class="details">
				<span>商品详情</span>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	},
	components: {}
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high {
    padding: 0 75/4 /@rem;
    header{
        height: 95 /@rem;
    }
	.hd {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 95 /@rem;
        line-height: 95 /@rem;
        padding: 0 75/4 /@rem;
        background-color: white;
        border-bottom: 0.5px solid #f5f5f9;
        font-size: 32 /@rem;
        z-index: 999;
        i {
            font-size: 32 /@rem;
        }
        a {
			padding: 0 10 / @rem;
			color: #2c3e50;
		}
	}
}
</style>
