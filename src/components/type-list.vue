<template>
    <div class="type-warp">
        <template v-for="item of data">
        <text class="type-title">{{item.name}}</text>
        <div class="type-list">
            <div class="type-tag" v-for="list of item.children">
                <text class="type-text">{{list.name}}</text>
                <text class="type-total">({{list.total}})</text>
            </div>
        </div>
        </template>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props:['data']
    }
</script>
<style scoped>
    .type-title {
        line-height: 88px;
        background: #fafafa;
        text-indent: 24px;
        font-size: 30px;
        color: #0aba07;
    }

    .type-list {
        padding-right: 24px;
        display: block;
        margin-top: 18px;
        margin-bottom: 32px;
    }

    .type-tag {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        padding-left: 24px;
        padding-right: 24px;
        margin-left: 24px;
        border: 1px solid #e8e8e8;
        border-radius: 12px;
        background: #fafafa;
    }
    .type-text {
        font-size: 28px;
        height: inherit;
        line-height: inherit;
        display: inline-block;
    }
    .type-total {
        font-size: 24px;
        padding-left: 6px;
        color: #999;
        height: inherit;
        line-height: inherit;
        display: inline-block;

    }
</style>