<template>
    <div class="header">
        <text class="header-back" v-if="list.indexOf($route.path) < 0" @click="goBack">&#xe300;</text>
        <text class="h1">{{info.title}}</text>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list:['/home','/type','/me']
            }
        },
        props: ['info'],
        methods: {
            goBack() {
                this.$router.back()
            }
        }
    }
</script>
<style scoped>
    .header {
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 750px;
        height: 90px;
        background-color: #222222;
    }

    .header-back {
        color: #ffffff;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 90px;
        line-height: 90px;
        height: 90px;
        font-family: iconfont;
        font-size: 36px;
        text-align: center;
    }

    .h1 {
        color: #ffffff;
        height: 90px;
        line-height: 90px;
        text-align: center;
        margin-left: 100px;
        width: 550px;
        font-size: 32px;
    }
</style>