<template>
	<div class="high">
		<!-- header -->
		<header></header>
		<header class="hd">
			<span class="fl shopCart">购物车</span>
			<span class="fr tbActive" @click="manage" v-text="this.isRemove ? '完成' : '管理'"></span>
		</header>
		<!-- section -->
        <section>
            <div class="content">
                <ul>
                    <li v-for="(item,index) in shopList" :key="index">
                        <div class="shop clearFix">
                            <div class="pic fl"><img :src="item.imgUrl" alt="" width="100%" height="100%" v-lazy="item.imgUrl"></div>
                            <div class="remove fr" v-if="isRemove"><i class="iconfont icon-lajitong" @click="removeShop(index)"></i></div>
                            <div class="shopInfo">
                                <p class="desc" v-text="item.des || '请求数据失败'"></p>
                                <div class="priceInfo clearFix">
                                    <p class="fl money">
                                        <span class="symbol" v-text="item.symbol || '¥'"></span>
                                        <span class="price" v-text="item.price || 'NaN'"></span>
                                    </p>
                                    <p class="fr addNum">
                                        <a href="javascript:;" class="reduce" @click="reduce(index)">-</a>
                                        <a href="javascript:;" class="num">{{item.num}}</a>
                                        <a href="javascript:;" class="add" @click="addCount(index)">+</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

		<!-- footer -->
		<footer class="totalPrice">
			<p class="total">
				<span>合计:</span>
				<span class="totalMoney">￥{{totalPrice.sum}}</span>
                <span class="discount">优惠 ￥0.00</span>
			</p>
			<div class="Settlement">
				<span class="count">结算</span><span class="num"> ({{totalPrice.num}})</span>
			</div>
		</footer>
	</div>
</template>

<script>
import connect from './common/connect'
import shopTools from './common/shopTools'
export default {
	data() {
		return {
            shopList: [],
            isRemove: false,
            // count: shopTools.getShopCount()
        }
	},
    computed: {
        totalPrice: function(){
            let num = 0,sum = 0;
            this.shopList.forEach((item)=>{
                num += item.num;
                sum += item.num * item.price;
            })
            return {num:num,sum:sum}
        }
    },
    methods:{
        manage(){
            this.isRemove = !this.isRemove;
        },
        reduce(i){
            // console.log(i);
            let shop = this.shopList[i];
            if(shop.num>1){
                shop.num--;
                connect.$emit('addCart',-1);
                shopTools.addUpdate({
                    id : shop.id,
                    num : -1
                })
            }
        },
        addCount(i){
            let shop = this.shopList[i];
            shop.num++;
            connect.$emit('addCart',1);
            shopTools.addUpdate({
                id : shop.id,
                num : 1
            })
        },
        removeShop(i){
            let shop = this.shopList[i];
            shopTools.delete(shop.id);
            connect.$emit('addCart',-shop.num)
            this.shopList.splice(i,1);
        }
    },
	created() {
        connect.$emit('isIndex', true);
        setTimeout(()=>{
            let shop = shopTools.getShop();
            let idArr = Object.keys(shop);  // es6 遍历得到keys
            let title = this.$route.query.title || 'likeYou'
            idArr.forEach((item,index)=>{
                let url ='http://tanzhouweb.com/vueProject/vue.php' + '?title=' + title + item
                this.$ajax.get(url).then((res)=>{
                        this.shopList.push(res.data);
                        this.shopList.forEach((item,index)=>{
                            //给shopList的 item添加属性num 
                            this.$set(item,'num',shop[item.id]);
                        })
                    })
            })
        },0)
        // let shop = shopTools.getShop();
        // let idArr = Object.keys(shop);  // es6 遍历得到keys
        // let title = this.$route.query.title || 'likeYou'
        // idArr.forEach((item,index)=>{
        //     let url ='http://tanzhouweb.com/vueProject/vue.php' + '?title=' + title + item
        //     this.$ajax.get(url).then((res)=>{
        //             this.shopList.push(res.data);
        //             this.shopList.forEach((item,index)=>{
        //                 //给shopList的 item添加属性num 
        //                 this.$set(item,'num',shop[item.id]);
        //             })
        //         })
        // })
        // console.log(this.shopList);


	}
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high {
	padding: 0 75/4 / @rem;
	// background-color: #f7f7fa;
	header {
		height: 105 / @rem;
		border-bottom: 0.5px solid #f5f5f9;
	}
	.hd {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		height: 105 / @rem;
		padding: 0 75/4 / @rem;
		font-size: 32 / @rem;
		line-height: 105 / @rem;
		border-bottom: 0.5px solid #f5f5f9;
		background-color: white;
		z-index: 996;
		span {
			margin: 0 15 / @rem;
			color: #000;
		}
		span.shopCart {
			font-size: 36 / @rem;
			font-weight: 500;
		}
    }
    .content{
        margin: 20 /@rem 0 230 /@rem;
        ul li{
            width: 100%;
            border-radius: 10 / @rem;
			box-shadow: 0px 1px 10px #e8e6e9;
            margin-bottom: 25 / @rem;
            font-size: 32 /@rem;
            background-color: white;
            .shop{
                padding: 15 /@rem;
                .pic{
                    width:180 /@rem;
                    height:180 /@rem;
                    margin-right: 20 /@rem;
                    img{
                        border-radius: 5 /@rem;
                    }
                }
                .shopInfo{
                    text-align: start;
                    .desc{
                        height: 100/@rem;
                        font-size: 28 /@rem;
                    }
                    .priceInfo{
                        margin-top: 35 /@rem;
                        .money{
                            color: #FF5000;
                        }
                        .addNum{
                            border: 1px solid #EBEBEB;
                            font-size: 0;
                            border-radius: 10 /@rem;
                            a{
                                display: inline-block;
                                width: 50 /@rem;
                                height: 38 /@rem;
                                line-height: 38/@rem;
                                font-size: 30 /@rem;
                                text-align: center;
                                color: #999;
                            }
                            .num{
                                width: 60 /@rem;
                                border-left: 1px solid #EBEBEB;
                                border-right: 1px solid #EBEBEB;
                            }
                        }
                    }
                }
                .remove{
                    height: 180 /@rem;
                    line-height: 180/@rem;
                    margin-left: 15 /@rem;
                    i{
                        font-size: 60 /@rem;
                        color: #EA792F;
                    }
                }
            }
        }
    }
	.totalPrice {
		position: fixed;
		bottom: 100 / @rem;
		left: 0;
		right: 0;
		margin: 0 auto;
		height: 100 / @rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
        background-color: white;
        border-top: 0.5px solid #f5f5f9;
        z-index: 996;
        .total{
            height: 100 /@rem;
            line-height: 100 /@rem;
            font-size: 32 /@rem;
            margin-left: 50 /@rem;
            color: #2c3e50;
            .totalMoney{
                color: #FF5000;
            }
            .discount{
                font-size: 22 /@rem;
                color: #999;
                vertical-align: middle;
                margin: 0 15 /@rem;
            }
        }
    }
    .Settlement{
        position: absolute;
        top: 50%;
        right: 20 /@rem;
        transform: translateY(-50%);
        height: 75%;
        width: 200 /@rem;
        background-color: #EA792F;
        border-radius: 30px;
        color: #fff;
        font-size: 30 /@rem;
        line-height: 75 /@rem;
    }
}
</style>
