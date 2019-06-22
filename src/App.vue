<template>
	<div id="app">
		<router-view/>

		<!-- footNav -->
		<footer class="ft" v-if="isIndex">
			<router-link class="link" :to="{name:'index'}">
				<div class="svg iconfont icon-yemian-copy-copy-copy"></div>
				<p>首页</p>
			</router-link>
			<router-link class="link" :to="{name:'find'}">
				<div class="svg iconfont icon-faxian"></div>
				<p>发现</p>
			</router-link>
			<router-link class="link" :to="{name:'market'}">
				<div class="svg iconfont icon-gouwuche"><i class="showNum" v-if="pickNum">{{pickNum}}</i></div>
				<p>集市</p>
			</router-link>
			<router-link class="link" :to="{name:'me'}">
				<div class="svg iconfont icon-user"></div>
				<p>我</p>
			</router-link>
		</footer>

        <!-- 图片预览 -->
        <lg-preview></lg-preview>
	</div>
</template>

<script>
import connect from './components/common/connect'
export default {
	name: 'App',
	data() {
		return {
            isIndex : false,
            pickNum : 66
        }
	},
	computed: {},
	created() {
		remChange()
		window.addEventListener('resize', remChange)
		function remChange() {
			var html = document.getElementsByTagName('html')[0]
			var nowWidth = html.getBoundingClientRect().width
			if (nowWidth >= 750) nowWidth = 750
			html.style.fontSize = nowWidth / 10 + 'px'
        }
        connect.$on('isIndex',(result)=>{
            this.isIndex = result
        })
	}
}
</script>

// scoped 局部有效
<style scoped lang="less">
@rem: 750/10rem;

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	max-width: 750px;
	height: 100%;
	margin: auto;
	position: relative;
}
@tabbar-bg: #fafafa;
.ft {
	position: fixed;
	bottom: -1/@rem;
	left: 0;
	right: 0;
	height: 100 / @rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	text-align: center;
	border-top: 1px solid #f5f5f9;
    background-color: @tabbar-bg;
    z-index: 999;
	.link {
		flex: 1;
		line-height: 70 / @rem;
		text-decoration: none;
		color: #a1c4fd;
	}
	.link .svg {
		color: inherit;
		font-size: 44 / @rem;
	}
	.link p {
		color: inherit;
		font-size: 24 / @rem;
		line-height: 1;
    }
    .showNum{
        position: absolute;
        margin-top: 5/@rem;
        width: 30/@rem;
        height: 30/@rem;
        line-height: 30/@rem;
        text-align: center;
        background-color: #EC5D29;
        border-radius: 50%;
        color: white;
        font-size: 12 /@rem;
        font-style: normal;
    }
}
</style>
