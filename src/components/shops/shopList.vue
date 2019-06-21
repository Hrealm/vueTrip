<template>
    <div class="high">
        <!-- header -->
        <header></header>
        <title-bar title="搜索商品"></title-bar>
        <!-- headerNav -->
        <div class="hdNav">
            <p>区域<i class="iconfont icon-arrow-down"></i></p>
            <p class="tbActive">综合</p>
            <p>时间</p>
            <p>价格</p>
            <p>筛选<i class="iconfont icon-arrow-down"></i></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    components: {}
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high{
    padding: 0 75/4 /@rem;
    header{
        height: 95 /@rem;
    }
    .hdNav{
        position: absolute;
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
        p{
            margin: 0 10 /@rem;
        }
        i{
            font-size: 32 /@rem;
        }
    }
}

</style>
