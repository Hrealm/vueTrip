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
                <router-link class="navBtn" @click.native="isIndex" :to="{name:'shops.list'}">
                    <p>商铺</p>
                    <i class="svg3 iconfont icon-shangpucopy tbActive"></i>
                </router-link>
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
                    <p class="more fr">查看全部<i class="iconfont icon-iconfontyoujiantou"></i></p>
                </div>
                <!-- 热门游记 -->
                <ul class="hot">
                    <li v-for="(item,index) in hotImg" :key="index">
                        <img :src="item.picHot" alt="" width="100%" height="100%">
                    </li>
                </ul>
                <!-- 游记分享 -->
                <ul class="share">
                    <li v-for="(item,index) in shareImg" :key="index">
                        <img :src="item.picShare" alt="" width="100%" height="100%" v-lazy="item.picShare">
                        <div class="descImg">
                            <p class="location"><i class="iconfont icon-zuobiao"></i><span>{{item.location}}</span></p>
                            <p class="descContent">{{item.descContent}}</p>
                        </div>
                        <!-- <div class="user">
                            <p class="userName">
                                <img src="" alt="">
                            </p>
                            <p class=like>
                                <i class="comment"></i>
                                <span></span>
                                <i class="like"></i>
                                <span></span>
                            </p>
                        </div> -->
                    </li>
                </ul>
            </div>
        </div>
        <!-- content -->

	</div>
</template>

<script>
import connect from './common/connect'
export default {
	data() {
		return {
            location: '佛山',
            banner: 'banner',
            bannerImg: [],
            hotImg:[],
            shareImg:[]
		}
    },
    methods:{
        isIndex(){
            connect.$emit('isIndex',false)
        }
    },
    components: {},
    created(){
        this.$ajax.get('banner')
            .then((res)=>{
                // console.log(res.data)
                this.bannerImg = res.data
            })
        this.$ajax.get('indexHot')
            .then((res)=>{
                this.hotImg =res.data
            })
        this.$ajax.get('indexShare')
            .then((res)=>{
                this.shareImg = res.data
            })
        connect.$emit('isIndex',true)
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
            .navBtn{
                display: block;
                width: 100%;
                height: 100%;
                color: inherit; // #2c3e50
            }
            p{
                padding-top: 15/@rem;
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
            ul.hot{
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
            ul.share{
                width: 100%;
                margin-top: 20/@rem;
                padding-bottom: 100/@rem;
                li{
                    position: relative;
                    width: 100%;
                    height: 350/@rem;
                    margin-bottom: 20/@rem;
                    img{
                        border-radius: 10/@rem;
                    }
                    .descImg{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 90/@rem;
                        background: linear-gradient(transparent,#000);
                        opacity: 0.9;
                        z-index: 5;
                        font-size: 32/@rem;
                        color: white;
                        font-weight: 500;
                        border-radius: 10/@rem;
                        .location{
                            position: absolute;
                            left: 30/@rem;
                            bottom: 15/@rem;
                            i{
                                font-size: 32/@rem;
                            }
                            span{
                                margin-left: 15/@rem;
                                font-size: 30/@rem;
                            }
                        }
                        .descContent{
                            position: absolute;
                            right: 20/@rem;
                            bottom: 15/@rem;
                        }
                    }
                }

            }
            
        }
    }
}
</style>
