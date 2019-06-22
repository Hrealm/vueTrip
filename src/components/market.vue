<template>
	<div class="high">
		<!-- header -->
		<header></header>
		<header class="hd">
			<span class="fl shopCart">购物车</span>
			<span class="fr">管理</span>
		</header>
		<!-- section -->

		<!-- footer -->
		<footer class="totalPrice">
			<p class="total">
				<span>合计:</span>
				<span class="totalMoney">￥888</span>
                <span class="discount">优惠 ￥0.00</span>
			</p>
			<div class="Settlement">
				<span class="count">结算</span><span class="num"> (2)</span>
			</div>
		</footer>
	</div>
</template>

<script>
import connect from './common/connect'
export default {
	data() {
		return {}
	},
	components: {},
	created() {
		connect.$emit('isIndex', true)
	}
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high {
	padding: 0 75/4 / @rem;
	background-color: #f7f7fa;
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
