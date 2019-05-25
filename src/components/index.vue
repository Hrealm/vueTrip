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

        <!-- contentNav -->
        <div class="contentNav">
            <div class="item">
                <p>游记</p>
                <i class="svg1 iconfont icon-youji tbActive"></i>
            </div>
            <div class="item">
                <p>攻略</p>
                <i class="svg2 iconfont icon-gonglve tbActive"></i>
            </div>
            <div class="item">
                <p>商铺</p>
                <i class="svg3 iconfont icon-shangpucopy tbActive"></i>
            </div>
            <div class="item">
                <p>文化</p>
                <i class="svg4 iconfont icon-wenhua tbActive"></i>
            </div>
            <div class="item">
                <p>景观</p>
                <i class="svg5 iconfont icon-heliujingguan tbActive"></i>
            </div>
        </div>
        <!-- contentNav -->

        <!-- content -->
        <div class="content">
            <div class="hotTravels">
                <div class="title clearFix">
                    <p class="name fl">热门游记<i class="iconfont icon-remen"></i></p>
                    <p class="more fr">查看全部<i>></i></p>
                </div>
                <!-- 初始化图片，没有服务器的一种暴力解决方法 -->
                <div style="display: none;">
                    <img src="../node/img/indexHot/1.png" alt="">
                    <img src="../node/img/indexHot/2.png" alt="">
                    <img src="../node/img/indexHot/3.png" alt="">
                </div>
                <ul>
                    <li v-for="(item,index) in hotImg" :key="index">
                        <img :src="item.picHot" alt="" width="100%" height="100%">
                    </li>
                </ul>
              
            </div>
        </div>
        <!-- content -->

	</div>
</template>

<script>
export default {
	data() {
		return {
            location: '佛山',
            banner: 'banner',
            bannerImg: [],
            hotImg:[]
		}
	},
    components: {},
    created(){
        this.$ajax.get('http://localhost:6789/banner')
            .then((res)=>{
                // console.log(res.data)
                this.bannerImg = res.data
            })
        this.$ajax.get('http://localhost:6789/indexHot')
            .then((res)=>{
                this.hotImg =res.data
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
        height: 110/@rem;
        padding: 0 75/4 /@rem;
        background-color: white;
        z-index: 999;
        .location{
            float: left;
            height: 100%;
            text-align: center;
            font-size: 44 /@rem;
            line-height: 100/@rem;
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
            height: 60%;
            width: 73%;
            margin-right: 75/4 /@rem;
            border-radius: 35px;
            transform: translateY(-50%);
            background-color:#F5F4F9;
            text-align: center;
            color:#C3C3C5;
            font-size: 44 /@rem;
            line-height: 65/@rem;
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
        border-radius: 10/@rem;
    }
    .contentNav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 125/@rem;
        margin-top: 20/@rem;
        .item{
            position: relative;
            width: 118/@rem;
            height: 100/@rem;
            font-size: 28/@rem;
            font-weight: bold;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0px 3px 8px #F5F4F9;
            p{
                margin-top: 15/@rem;
            }
            i{
                position: absolute;
            }
            i.svg1{
                right: -5/@rem;
                bottom: -8/@rem;
                font-size: 60/@rem;
            }
            i.svg2{
                right: 3/@rem;
                bottom: 5/@rem;
                font-size: 36/@rem;
            }
            i.svg3{
                right: 3/@rem;
                bottom: 5/@rem;
                font-size: 34/@rem;
            }
            i.svg4{
                right: 3/@rem;
                bottom: 3/@rem;
                font-size: 40/@rem;
            }
            i.svg5{
                right: -3/@rem;
                bottom: -6/@rem;
                font-size: 50/@rem;
            }
            
        }
    }
    .content{
        width: 100%;
        margin-top: 10/@rem;
        .hotTravels{
            width: 100%;
            height: 300/@rem;
            .title{
                width: 100%;
                height: 80/@rem;
                line-height: 80/@rem;
                .name{
                    margin-left: 5/@rem;
                    font-size: 32/@rem;
                    font-weight: 550;
                }
                .name i{
                    margin-left: 10/@rem;
                    color: #EE7C3A;
                }
                .more{
                    font-size: 30/@rem;
                    color: #868686;
                }
                .more i{
                    margin-left: 10/@rem;
                }
            }
            ul{
                display: flex;
                width: 100%;
                flex-direction: row;
                justify-content: space-between;
                li{
                    width: 224/@rem;
                    height: 224/@rem;
                    img{
                       border-radius: 10/@rem; 
                    }
                }
            }
            
        }
    }
}
</style>
