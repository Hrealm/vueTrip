<template>
    <div class="high">
        <header></header>
        <header class="hd">
            <a href="javascript:;" class="fl myCode">二维码</a>
            <a href="javascript:;" class="fr setting">设置</a>
            <p class="title">我的</p>
        </header>
        <section>
            <div class="content">
                <div class="userInfo clearFix">
                    <div class="fl userHead"><img src="../assets/unLogin.png" alt="" width="100%" height="100%"></div>
                    <p class="tip fl">未登录</p>
                    <i class="iconfont icon-iconfontyoujiantou fr"></i>
                </div>
                <div class="appManage">
                    <div class="item"><p class="icon"><img src="../assets/花费记录.png" alt="" width="40%" height="40%"></p><p>花费记录</p></div>
                    <div class="item"><p class="icon"><img src="../assets/出行管理.png" alt="" width="40%" height="40%"></p><p>出行管理</p></div>
                    <div class="item"><p class="icon"><img src="../assets/旅游记录.png" alt="" width="40%" height="40%"></p><p>旅游记录</p></div>
                    <div class="item"><p class="icon"><img src="../assets/离线地图.png" alt="" width="40%" height="40%"></p><p>离线地图</p></div>
                </div>
                <div class="function">
                    <ul>
                        <li class="clearFix"><p class="fl"><i class="iconfont icon-liuyan"></i>消息</p><i class="iconfont icon-iconfontyoujiantou fr"></i></li>
                        <li class="clearFix"><p class="fl"><i class="iconfont icon-ic_song_like"></i>收藏</p><i class="iconfont icon-iconfontyoujiantou fr"></i></li>
                        <li class="clearFix"><p class="fl"><i class="iconfont icon-gengduo"></i>更多</p><i class="iconfont icon-iconfontyoujiantou fr"></i></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import connect from './common/connect'
export default {
    data() {
        return {}
    },
    components: {},
    created(){
        connect.$emit('isIndex',true);
    }
}
</script>

<style scoped lang="less">
@rem: 750/10rem;

.high{
    padding: 0 75/4 /@rem;
    header{
        height: 105 /@rem;
    }
    .hd{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 75/4 /@rem;
        font-size: 32 /@rem;
        font-weight: 500;
        color: #fff;
        height: 250 /@rem;
        line-height: 105 /@rem;
        background: linear-gradient(to right,#2B32D6,#E47A37);
        a{
            margin: 0 15 /@rem;
            color: #fff;
        }
    }
    .content{
        position: relative;
        margin-top: 15 /@rem;
        z-index: 2;
        .userInfo{
            padding: 50/@rem 15 /@rem;
            box-shadow: 0px 1px 10px #e8e6e9;
            border-radius: 10 /@rem;
            background-color: white;
            line-height: 130 /@rem;
            .userHead{
                width: 130/@rem;
                height: 130/@rem;
                margin: 0 20/@rem;
            }
            .tip{
                font-size: 36 /@rem;
                font-weight: 500;
                margin: 0 15 /@rem;
            }
            i{
                font-size: 34 /@rem;
                margin: 0 20/@rem;
                color: #7B7B7C;
            }
        }
        .appManage{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20 /@rem;
            margin-top: 25 /@rem;
            box-shadow: 0px 1px 10px #e8e6e9;
            border-radius: 10 /@rem;
            background-color: white;
            .item{
                text-align: center;
                font-size: 26 /@rem;
                p{
                    width: 100%;
                    text-align: center;
                }
                .icon{
                    margin: 10 /@rem 0;
                }
            }
        }
        .function{
            margin-top: 25 /@rem;
            ul li{
                padding: 20/@rem 15 /@rem;
                margin-bottom: 25 /@rem;
                box-shadow: 0px 1px 10px #e8e6e9;
                border-radius: 10/@rem;
                background-color: white;
                p{
                    font-size: 28 /@rem;
                    color: #000;
                    i{
                        font-size: 34 /@rem;
                        // vertical-align: middle;
                        color: #000;
                    }
                }
                i{
                    font-size: 34 /@rem;
                    margin: 0 20/@rem;
                    color: #7B7B7C;
                }
            }
        }
    }
}
</style>
