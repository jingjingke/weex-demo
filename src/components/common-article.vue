<template>
    <div>
        <div class="article-info">
            <text class="article-type" @click="goColumnList(data.typeid,data.typename)">{{data.typename}}</text>
            <text class="article-t-s">{{data.senddate}}</text>
            <text class="article-t-s">{{data.source}}</text>
        </div>
        <text class="article-title">{{data.title}}</text>
        <img class="article-image" :src="'http://www.jingjingke.com/' + data.litpic">
        <text class="article-text">{{data.description}}</text>
        <text class="article-text" v-html="data.body"></text>
        <div class="article-tag-warp" v-if="data.tags.length > 0 && keyList.length > 0">
            <text class="article-tag tag-link"
                  v-for="item of data.tags" @click="goTagList(item.tid,item.tag)">{{item.tag}}</text>
            <text class="article-tag" v-for="item of keyList">{{item}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                keyList: []
            }
        },
        props: ['data'],
        methods: {
            goColumnList(id, name) {
                this.$router.push({
                    path: '/list', query: {
                        id: id,
                        name: name,
                        type: 'column'
                    }
                })
            },
            goTagList(id, name) {
                this.$router.push({
                    path: '/list', query: {
                        id: id,
                        name: name,
                        type: 'tag'
                    }
                })
            }
        },
        created() {
            this.keyList = this.data.keywords.split(',');
        }
    }
</script>
<style scoped>
    .article-info {
        height: 88px;
        background: #fafafa;
        border-bottom: 1px solid #e8e8e8;
        display: block;
        padding-left: 24px;
        padding-right: 24px;
    }

    .article-type, .article-t-s {
        display: inline-block;
        background: #0aba07;
        color: #fff;
        border-radius: 40px;
        font-size: 26px;
        line-height: 56px;
        padding-left: 24px;
        padding-right: 24px;
    }

    .article-t-s {
        background: #fff;
        border: 1px solid #f2f2f2;
        color: #555;
    }

    .article-title {
        font-size: 32px;
        line-height: 1.8em;
        padding: 24px;
        border-bottom: 1px dotted #f2f2f2;
        font-weight: bold;
    }

    .article-image {
        width: 700px;
        height: 420px;
        margin-top: 30px;
        margin-left: 30px;
    }

    .article-text {
        line-height: 1.8em;
        padding-top: 24px;
        padding-left: 24px;
        padding-right: 24px;
    }

    .article-keys {
        padding-bottom: 36px;
        color: #999;
    }

    .article-tag-warp {
        padding-top: 36px;
        padding-bottom: 36px;
        padding-left: 16px;
        padding-right: 24px;
        display: block;
    }

    .article-tag {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        padding-left: 24px;
        padding-right: 24px;
        margin-left: 12px;
        border: 1px solid #f2f2f2;
        border-radius: 8px;
        background: #fafafa;
        color: #555;
        font-size: 26px;
    }

    .tag-link {
        border: 1px solid #0aba07;
        color: #0aba07;
    }
</style>