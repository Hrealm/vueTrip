<template>
    <div class="high">
        <!-- header -->
        <title-bar title="搜索商品"></title-bar>
        <!-- headerNav -->
        <header></header>
        <div class="hdNav">
            <p>区域<i class="iconfont icon-arrow-down"></i></p>
            <p class="tbActive">综合</p>
            <p>时间</p>
            <p>价格</p>
            <p>筛选<i class="iconfont icon-arrow-down"></i></p>
        </div>
        <!-- section -->
        <section class="likeYou">
            <ul>
                <li v-for="(item,index) in shopLists" :key="index">
                    <a href="javascript:;">
                        <div class="pic"><img :src="item.imgUrl" alt="" width="100%" height="100%" v-lazy="item.imgUrl"></div>
                        <p class="des" v-text="item.des || '数据请求失败...'"></p>
                        <div class="priceInfo clearFix">
                            <div class="fl shopPrice"><span v-text="item.symbol"></span><span v-text="item.price || 'NaN'"></span></div>
                            <div class="fr alreadyPaid" v-text="item.alreadyPaid"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <!-- footer -->
        <footer>
            <p>- - 暂无更多 - -</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shopLists: []
        }
    },
    components: {},
    created(){
        this.$ajax.get("http://tanzhouweb.com/vueProject/vue.php?title=likeYou")
            .then((res)=>{
                this.shopLists = res.data
            })
    }
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high{
    padding: 0 75/4 /@rem;
    background-color: #F7F7FA;
    header{
        height: 95 /@rem;
    }
    .hdNav{
        position: fixed;
        top: 95 /@rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        height: 95 /@rem;
        padding: 0 75/4 /@rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 30 /@rem;
        z-index: 990;
        background-color: white;
        p{
            margin: 0 10 /@rem;
        }
        i{
            font-size: 32 /@rem;
        }
    }
    .likeYou{
        position: relative;
        overflow: hidden;
        margin-top: 75/4 /@rem;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        ul li{
            width: 348 /@rem;
            height: 440 /@rem;
            background-color: white;
            margin-bottom: 75/4 /@rem;
            border-radius: 5px;
        }
        ul li a{
            width: 100%;
            height: 100%;
            display: block;
        }
        ul li .pic{
            width: 100%;
            height: 300 /@rem;
            img{
                border-radius: 5px 5px 2px 2px;
            }
        }
        ul li .des{
            font-size: 26 /@rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #000;
            margin: 25/@rem 15/@rem;
        }
        ul li .priceInfo{
            font-size: 26 /@rem;
            margin: 0 20/@rem;
            height: 38/@rem;
            line-height: 38/@rem;
            .shopPrice{
                color: #FF5000;
            }
            .alreadyPaid{
                color: #888;
            }
        }
    }
    footer{
        padding-bottom: 75/4 /@rem;
        font-size: 26 /@rem;
        color: #888;
        text-align: center;
    }
}

</style>
