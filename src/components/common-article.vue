<template>
    <div>
        <div class="article-info">
            <text class="article-type" @click="goColumnList(data.typeid,data.typename)">{{data.typename}}</text>
            <text class="article-t-s">{{data.senddate}}</text>
            <text class="article-t-s">{{data.source}}</text>
        </div>
        <text class="article-title">{{data.title}}</text>
        <image class="article-image" :src="'http://www.jingjingke.com/' + data.litpic"></image>
        <text class="article-text">{{data.description}}</text>
        <RichText v-for="(item,index) of bodyTree" :data="item" :key="index"></RichText>
        <div class="article-tag-warp" v-if="data.tags.length > 0 && keyList.length > 0">
            <text class="article-tag tag-link"
                  v-for="item of data.tags" @click="goTagList(item.tid,item.tag)">{{item.tag}}</text>
            <text class="article-tag" v-for="item of keyList">{{item}}</text>
        </div>
    </div>
</template>
<script>
    // 引入富文本解析方法
    import richTextParse from "@/utils/richText/richText.js"

    export default {
        data() {
            return {
                keyList: [],
                bodyTree: {}
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
            // 关键词数组
            this.keyList = this.data.keywords.split(',');
            // 解析富文本-转为树形
            this.bodyTree = richTextParse.go(this.data.body)
        }
    }
</script>
<style scoped>
    .article-info {
        height: 88px;
        background-color: #fafafa;
        border-bottom-width: 1px;
        border-bottom-color: #e8e8e8;
        padding-left: 24px;
        padding-right: 24px;
        flex-direction: row;
        align-items: center;
    }

    .article-type, .article-t-s {
        background-color: #0aba07;
        color: #ffffff;
        border-radius: 40px;
        font-size: 26px;
        line-height: 56px;
        height: 56px;
        padding: 0 24px;
        margin-right: 12px;
    }

    .article-t-s {
        background-color: #ffffff;
        border-width: 1px;
        border-color: #f2f2f2;
        color: #555555;
    }

    .article-title {
        font-size: 32px;
        line-height: 56px;
        padding: 24px;
        border-bottom-width: 1px;
        border-bottom-color: #f0f0f0;
        font-weight: bold;
    }

    .article-image {
        width: 700px;
        height: 420px;
        margin: 30px 25px 0;
    }

    .article-text {
        padding: 24px 24px 0;
        line-height: 52px;
    }

    .article-keys {
        padding-bottom: 36px;
        color: #999999;
    }

    .article-tag-warp {
        padding: 36px 12px 36px 24px;
        flex-direction: row;
        flex-wrap:wrap;
    }

    .article-tag {
        height: 60px;
        line-height: 60px;
        padding: 0 24px;
        margin: 12px 12px 0 0;
        border-width: 1px;
        border-color: #f2f2f2;
        border-radius: 8px;
        background-color: #fafafa;
        color: #555555;
        font-size: 26px;
    }
    .tag-link {
        border-color: #0aba07;
        color: #0aba07;
    }
</style>