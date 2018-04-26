<template>
    <div class="list-warp">
        <div class="list-block" v-for="(item,index) of data" :key="item.aid" @click="goArticle(item.aid,item.title)">
            <image class="list-img" :src="'http://www.jingjingke.com/'+item.litpic"></image>
            <div class="list-text">
                <text class="list-title">{{item.title}}</text>
                <text class="list-des">{{item.description.substring(0,24)}}{{item.description.length>24?"...":""}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['data'],
        methods:{
            goArticle(id, name) {
                this.$router.push({
                    path: '/article', query: {
                        id:id,
                        name:name
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .list-block {
        height: 220px;
        border-bottom-color: #f2f2f2;
        border-bottom-width: 1px;
        flex-direction: row;
    }
    .list-img {
        width: 200px;
        height: 160px;
        margin: 30px 0 0 30px;
        border-radius: 6px;
    }
    .list-text {
        padding-left: 24px;
        width: 510px;
    }
    .list-title {
        font-size: 32px;
        height: 48px;
        line-height: 48px;
        margin-top: 30px;
        color: #333333;
    }
    .list-des {
        font-size: 28px;
        color: #999999;
        line-height: 44px;
        margin-top: 10px;
    }
</style>