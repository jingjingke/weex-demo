<template>
    <div class="header">
        <text class="header-back" v-show="isShow" @click="goBack">&#xe300;</text>
        <text class="h1">{{title}}</text>
    </div>
</template>
<script>
    const storage = weex.requireModule('storage')

    export default {
        data() {
            return {
                title: '',
                isShow: false,
                historys: []
            }
        },
        props: ['info'],
        methods: {
            goBack() {
                this.$router.push(this.historys[this.historys.length - 2])
            }
        },
        created() {
            storage.getItem('historys', event => {
                this.historys = event.data.split(',');
                this.title = this.info.title || '';
                this.isShow = this.historys.length > 1 ? true : false;
            })
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
    }
</style>