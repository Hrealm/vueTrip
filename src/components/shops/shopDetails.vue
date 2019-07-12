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
					<img
						:src="shopDetails.imgUrl || 'https://static.oschina.net/uploads/space/2012/1111/054329_vbJd_63477.gif'"
						height="100%"
						width="100%"
						alt
					/>
				</div>
				<div class="detailInfo">
					<p class="money">
						<span class="symbol" v-text="shopDetails.symbol || '¥'"></span>
						<span class="price" v-text="shopDetails.price || 'NaN'"></span>
					</p>
					<p class="desc" v-text="shopDetails.des || '请求数据失败'"></p>
					<div class="courier clearFix">
						<span class="fl">快递：免运费</span>
						<span class="fr" v-text="shopDetails.alreadyPaid || 'NaN人付款'"></span>
					</div>
				</div>
			</div>
			<div class="discount">
				<ul>
					<li class="clearFix">
						<span class="fl">优惠</span>
						<p class="fr"><span>领劵</span><i class="iconfont icon-iconfontyoujiantou"></i></p>
						<p class="discountInfo">领劵后至少可减<span class="discountPrice">¥ 5</span></p>
					</li>
					<li class="clearFix">
						<span class="fl">服务</span>
						<p class="fr"><i class="iconfont icon-iconfontyoujiantou"></i></p>
						<p class="discountInfo">48小时内发货 · 无忧退货</p>
					</li>
				</ul>
			</div>
			<div class="buyNum clearFix">
                <p class="fl buyCount">购买数量</p>
                <p class="fr addNum">
                    <a href="javascript:;" :class="{activeReduce: isActive}" class="reduce" @click="shopReduce">-</a>
                    <a href="javascript:;" class="num">{{num}}</a>
                    <a href="javascript:;" class="add" @click="shopAdd">+</a>
                </p>
            </div>
            <div class="buy">
                <a href="javascript:;" class="addCart" @click="addCart">加入购物车</a>
                <router-link :to="{name:'market',query:{title:'likeYou'}}" class="nowBuy">立即购买</router-link>
            </div>
		</div>
	</div>
</template>

<script>
import shopTools from '../common/shopTools'
import connect from '../common/connect'
import {Toast} from 'mint-ui'
export default {
	data() {
		return {
            shopDetails: {},
            num: 1,
            isActive: false
		}
	},
	created() {
		let index = this.$route.query.id
		if (index) {
			let title = this.$route.query.title
			let url ='http://tanzhouweb.com/vueProject/vue.php' + '?title=' + title + index
			this.$ajax.get(url).then(res => {
                res.data['id'] = index;
				this.shopDetails = res.data
				// console.log(res.data);
			})
		}
	},
	methods: {
		goBack() {
			this.$router.go(-1)
        },
        shopReduce(){
            if(this.num>1) this.num--;
            if(this.num==1) this.isActive=false;
        },
        shopAdd(){
            if(this.num<99) this.num++;
            if(this.num>1) this.isActive=true;
        },
        addCart(){
            connect.$emit('addCart',this.num)
            shopTools.addUpdate({
                id : this.shopDetails.id,
                num : this.num
            })
            Toast({
                message: '添加成功',
                position: 'bottom',
                duration: 3000
            });
        }
	},
	components: {}
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high {
	// padding: 0 75/4 /@rem;
	background-color: #f7f7fa;
	header {
		height: 95 / @rem;
	}
	.hd {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 95 / @rem;
		line-height: 95 / @rem;
		padding: 0 75/4 / @rem;
		background-color: white;
		border-bottom: 0.5px solid #f5f5f9;
		font-size: 32 / @rem;
		z-index: 999;
		i {
			font-size: 32 / @rem;
		}
		a {
			padding: 0 10 / @rem;
			color: #2c3e50;
		}
	}
	.shopDetails {
		.shopInfo {
			background-color: white;
			padding-bottom: 20 / @rem;
			.shopPic {
				width: 100%;
				height: 650 / @rem;
			}
			.detailInfo {
				padding: 0 75/4 / @rem;
				padding-top: 25 / @rem;
				border-top: 1px solid #f5f5f9;
				.money {
					text-align: start;
					color: #ff5000;
					font-size: 32 / @rem;
					.price {
						font-size: 44 / @rem;
						margin: 0 10 / @rem;
						font-weight: 400;
					}
				}
				.desc {
					margin-top: 8 / @rem;
					text-align: start;
					font-size: 30 / @rem;
					color: #333;
					font-weight: bold;
				}
				.courier {
					margin-top: 20 / @rem;
					font-size: 26 / @rem;
					color: #999;
				}
			}
		}
		.discount {
			padding: 0 75/4 / @rem;
			margin-top: 25 / @rem;
			// height: 200 /@rem;
			background-color: white;
			font-size: 28 / @rem;
			ul {
                padding-top: 20 /@rem;
				li {
					padding-bottom: 20 / @rem;
                    text-align: start;
                    line-height: 39 /@rem;
					span {
						color: #999;
					}
					i {
						color: #999;
						font-size: 26 / @rem;
                        margin-left: 15 / @rem;
					}
					.discountInfo {
                        color: #333;
						margin-left: 100 / @rem;
						.discountPrice {
							margin-left: 10 / @rem;
							color: #ff5000;
						}
					}
				}
			}
        }
        .buyNum{
            margin-top: 25 /@rem;
            background-color: white;
            padding: 20 /@rem 75/4 /@rem;
            font-size: 28 /@rem;
            .buyCount{
                color: #333;
            }
            .addNum{
                font-size: 0;
                a{
                    display: inline-block;
                    width: 45 /@rem;
                    height: 39 /@rem;
                    line-height: 39 /@rem;
                    font-size: 28 /@rem;
                    background-color: #F5F5F5;
                }
                .reduce{
                    color: #C9C9C9;
                    background-color: #F9F9F9;
                }
                .activeReduce{
                    color: #999;
                    background-color: #F5F5F5;
                }
                .num{
                    margin: 0 10 /@rem;
                    color: #3E4144;
                }
                .add{
                    color: #999;
                }
            }
        }
        .buy{
            // position: fixed;
            // left: 0;
            // right: 0;
            // bottom: 0;
            padding: 10/@rem 75/4 /@rem 15/@rem;
            background-color: white;
            font-size: 0;
            .addCart{
                display: inline-block;
                font-size: 32 /@rem;
                width: 50%;
                height: 80  /@rem;
                line-height: 80/@rem;
                background: linear-gradient(to right, #F7CC45, #F09937);
                color: #fff;
                border-radius: 30px 0 0 30px;
            }
            .nowBuy{
                display: inline-block;
                font-size: 32 /@rem;
                width: 50%;
                height: 80/@rem;
                line-height: 80/@rem;
                background: linear-gradient(to right, #EE7F30, #EB5828);
                color: #fff;
                border-radius: 0 30px 30px 0;
            }
        }
	}
}
</style>
