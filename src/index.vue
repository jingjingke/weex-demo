<template>
    <div class="wrapper">
        <scroller class="scroller">
            <router-view/>
        </scroller>
        <FooterFelx></FooterFelx>
    </div>
</template>

<script>
    import FooterFelx from "@/components/footer"

    const storage = weex.requireModule('storage')

    export default {
        name: 'App',
        data() {
            return {
                historys: []
            }
        },
        components: {
            FooterFelx
        },
        methods: {
            routerChange(now, old) {
                // 如果当前是home的话就将历史记录归零
                if (now === '/home') {
                    storage.setItem('historys', now)
                } else {
                    // 提取缓存的路由值
                    storage.getItem('historys', event => {
                        let historys = event.data.split(',')
                        // 判断基础是记录的历史条件不小于2条 并且 判断当前值与老值是否进行了一个循环
                        if (historys.length >= 2 && now === historys[historys.length - 2]) {
                            historys.splice(historys.length - 1, 1)
                        } else {
                            historys.push(now)
                        }
                        storage.setItem('historys', String(historys))
                    })
                }
            }
        },
        watch: {
            '$route.fullPath': 'routerChange'
        },
        created() {
            storage.setItem('historys', this.$route.fullPath)
            // 加载iconfont字体
            const DOM = weex.requireModule('dom');
            DOM.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://at.alicdn.com/t/font_437611_6plhfjz8mxlp7gb9.ttf')"
            })
        }
    }
</script>
<style scoped>
    .scroller {
        padding-top: 90px;
        padding-bottom: 130px;
    }
</style>
