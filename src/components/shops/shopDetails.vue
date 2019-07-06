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
        <!-- content -->
        <div class="shopDetails">
            <div class="shopInfo">
                <div class="shopPic">
                    <img :src="shopDetails.imgUrl || 'https://static.oschina.net/uploads/space/2012/1111/054329_vbJd_63477.gif'" height="100%" width="100%" alt="">
                </div>
                <div class="detailInfo">
                    <p class="money">
                        <span class="symbol" v-text="shopDetails.symbol || '¥'"></span><span class="price" v-text="shopDetails.price || 'NaN'"></span>
                    </p>
                    <p class="desc" v-text="shopDetails.des || '请求数据失败'"></p>
                    <div class="courier clearFix"><span class="fl">快递：免运费</span><span class="fr" v-text="shopDetails.alreadyPaid || 'NaN人付款'"></span></div>
                </div>
            </div>
            <div class="discount"></div>
            <div class="buy"></div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            shopDetails:{}
        }
    },
    created(){
        let index = this.$route.query.id;
        if(index){
            let title = this.$route.query.title;
            let url = 'http://tanzhouweb.com/vueProject/vue.php' + '?title=' + title + index;
            this.$ajax.get(url)
                .then((res)=>{
                    this.shopDetails = res.data;
                    console.log(res.data);
                })
        }
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
    // padding: 0 75/4 /@rem;
    background-color: #F7F7FA;
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
    .shopDetails{
        .shopInfo{
            background-color: white;
            padding-bottom: 20 /@rem;
            .shopPic{
                width: 100%;
                height: 650 /@rem;
            }
            .detailInfo{
                padding: 0 75/4 /@rem;
                padding-top: 25 /@rem;
                border-top: 1px solid #f5f5f9;
                .money{
                    text-align: start;
                    color: #FF5000;
                    font-size: 32 /@rem;
                    .price{
                        font-size: 44 /@rem;
                        margin: 0 10 /@rem;
                        font-weight: 400;
                    }
                }
                .desc{
                    margin-top: 8 /@rem;
                    text-align: start;
                    font-size: 30 /@rem;
                    color: #333;
                    font-weight: bold;
                }
                .courier{
                    margin-top: 20 /@rem;
                    font-size: 26 /@rem;
                    color: #999;
                }
            }
        }
        .discount{
            margin-top: 25 /@rem;
            height: 200 /@rem;
            background-color: white;
        }
    }
}
</style>
