<template>
    <div class="header-warp">
        <div class="header">
            <text class="header-back" v-if="isShow" @click="goBack">&#xe300;</text>
            <text class="h1">{{title}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                isShow: false,
                historys:this.$parent.$parent.historys || []
            }
        },
        props: ['info'],
        methods: {
            goBack() {
                this.$router.push(this.historys[this.historys.length - 2])
            }
        },
        created() {
            this.title = this.info.title || '';
            this.isShow = this.historys.length > 1 ? true : false;
        }
    }
</script>
<style scoped>
    .header-warp {
        position: relative;
        z-index: 99;
        height:90px;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 90px;
        overflow: hidden;
        background: #222;
    }

    .header-back {
        color: #fff;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        display: block;
        width: 90px;
        line-height: 90px;
        height: 90px;
        font-family: 'iconfont';
        font-size: 36px;
        text-align: center;
    }

    .h1 {
        color: #fff;
        height: 90px;
        line-height: 90px;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        text-overflow: ellipsis;
        text-align: center;
        padding-left: 100px;
        width: calc(100% - 100px);
    }
</style>