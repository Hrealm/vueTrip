<template>
    <div>
        <header>
            <a href="javascript:;"><i class="iconfont icon-fanhui"></i></a>
            <span>{{title}}</span>
            <a href="javascript:;"><i class="iconfont icon-sousuo"></i></a>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props:['title'], //接受父级参数
    components: {}
}
</script>

<style>
</style>
