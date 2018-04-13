<template>
    <div class="list-warp">
        <div class="list-block" v-for="(item,index) of data" :key="item.aid" @click="goArticle(item.aid,item.title)">
            <img class="list-img" :src="'http://www.jingjingke.com/'+item.litpic">
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
        display: block;
        font-size: 32px;
        height: 48px;
        line-height: 48px;
        margin-top: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333;

    }
    .list-des {
        font-size: 28px;
        color: #999;
        line-height: 44px;
        margin-top: 10px;
    }
    .list-des:after {
        content: 'MORE';
        color: #0aba07;
        display: inline-block;
        border: 1px solid #0aba07;
        padding-left:10px;
        padding-right: 10px;
        border-radius: 5px;
        font-size: 24px;
        margin-left: 10px;
        height: 32px;
        line-height: 32px;
    }
</style>