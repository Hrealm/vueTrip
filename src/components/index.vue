<template>
	<div class="high">

        <!-- header -->
        <header></header>
        <header class="clearFix hd">
            <div class="location">
                <i class="iconfont icon-dingwei tbActive"></i>
                <span>{{location}}</span>
            </div>
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索喜欢的内容</span>
            </div>
        </header>
        <!-- header -->

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
            location: '佛山',
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
    padding: 0 75/4 /@rem;
    header{
        height: 110/@rem;
    }
    header.hd{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100/@rem;
        padding: 0 75/4 /@rem;
        margin-top: 10/@rem;
        background-color: white;
        z-index: 999;
        .location{
            float: left;
            height: 100%;
            text-align: center;
            font-size: 44 /@rem;
            line-height: 90/@rem;
            i{
                font-size: 60 /@rem;
                vertical-align: middle;
            }
            span{
                font-size: 30 /@rem;
                // vertical-align: middle;
            }
        }
        .search{
            position: absolute;
            right: 0;
            top: 50%;
            height: 70%;
            width: 73%;
            margin-right: 75/4 /@rem;
            border-radius: 35px;
            transform: translateY(-50%);
            background-color:#F5F4F9;
            text-align: center;
            color:#C3C3C5;
            font-size: 44 /@rem;
            line-height: 68/@rem;
            i{
                font-size: 30 /@rem;
                vertical-align: middle;
                margin-right: 10/@rem;
            }
            span{
                font-size: 30 /@rem;
                vertical-align: middle;
            }
        }
    }
	.banner {
        height: 400 / @rem;
        margin-top: 10/@rem;
        border-radius: 9.375/@rem;
	}
}
</style>
