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
            return {}
        },
        components: {
            Footer
        },
        mounted(){
            // 加载iconfont字体
            let DOM = weex.requireModule('dom');
            DOM.addRule('fontFace',{
                'fontFamily': "iconfont",
                'src':"url('//at.alicdn.com/t/font_437611_e3mty20viiv5z5mi.ttf')"
            })
        }
    }
</script>
