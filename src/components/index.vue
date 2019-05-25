<template>
	<div class="high">
		<!-- banner -->
        <!-- 初始化图片，没有服务器的一种暴力解决方法 -->
         <div style="display: none;">
            <img src="../node/img/banner/1.jpg" alt="">
            <img src="../node/img/banner/2.jpg" alt="">
            <img src="../node/img/banner/3.jpg" alt="">
        </div>
		<mt-swipe :auto="4000" :class="[banner]">
			<mt-swipe-item v-for="(item,index) in bannerImg" :key="index">
                <img class="bannerImg" :src="item.picUrl" alt="" width="100%" height="100%">
            </mt-swipe-item>
		</mt-swipe>
		<!-- banner -->
	</div>
</template>

<script>
export default {
	data() {
		return {
            banner: 'banner',
            bannerImg: []
		}
	},
    components: {},
    created(){
        this.$ajax.get('http://localhost:6789/banner')
            .then((res)=>{
                console.log(res.data)
                this.bannerImg = res.data
            })
    }
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high {
    padding: 75/4 /@rem;
	.banner {
        height: 400 / @rem;
         border-radius: 9.375/@rem;
        // .bannerImg{
        //     // border-radius: 9.375/@rem;
        // }
	}
}
</style>
