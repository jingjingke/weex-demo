<template>
    <div class="wrapper">
        <scroller class="scroller">
            <router-view/>
        </scroller>
    </div>
</template>

<script>
    export default {
        name: 'App',
        created() {
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
    }
</style>
