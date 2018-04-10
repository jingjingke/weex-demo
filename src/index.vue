<template>
    <div class="wrapper">
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/footer"

    export default {
        name: 'App',
        data() {
            return {
                historys: []
            }
        },
        components: {
            Footer
        },
        methods: {
            routerChange(now, old) {
                // 判断基础是记录的历史条件不小于2条 并且 判断当前值与老值是否进行了一个循环
                if (this.historys.length >= 2 && now === this.historys[this.historys.length - 2]) {
                    this.historys.splice(this.historys.length - 1, 1)
                } else {
                    this.historys.push(now)
                }
            }
        },
        watch: {
            '$route.path': 'routerChange'
        },
        created() {
            this.historys = [this.$route.path];
        },
        mounted() {
            // 加载iconfont字体
            let DOM = weex.requireModule('dom');
            DOM.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('//at.alicdn.com/t/font_437611_6plhfjz8mxlp7gb9.ttf')"
            })
        }
    }
</script>
