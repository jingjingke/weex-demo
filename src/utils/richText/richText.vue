<template>
    <image v-if="data.name === 'img'" resize="stretch" :alt="data.attrs.alt||''" :src="data.attrs.src"
           :class="data.attrs.class" @load="loadImg" :style="'width:700px;height:'+imgH+'px'"></image>
    <div v-else-if="data.children !== undefined" :class="data.attrs.class">
        <RichText v-for="(item,index) of data.children" :data="item" :key="index"></RichText>
    </div>
    <text v-else v-show="isShow" v-html="checkStr(data)"></text>
</template>
<script>
    export default {
        data() {
            return {
                isShow: false,
                imgH: '',
            }
        },
        props: ['data'],
        methods: {
            checkStr(data) {
                // 去掉首尾空格
                let reStr = data.text.replace(/^\s+|\s+$/g, '');
                if (reStr !== '') {
                    this.isShow = true;
                }
                return reStr;
            },
            loadImg(event) {
                if (event.success) {
                    this.imgH = 700 * event.size.naturalHeight /event.size.naturalWidth;
                }
            }
        }
    }
</script>
<style scoped>
    /* 段落等常用块元素 */
    .rich-p .weex-text, .rich-h1 .weex-text, .rich-h2 .weex-text, .rich-h3 .weex-text, .rich-h4 .weex-text, .rich-h5 .weex-text,
    .rich-h6 .weex-text, .rich-div .weex-text, .rich-li .weex-text {
        padding-right: 24px;
        padding-left: 24px;
        margin-top: 24px;
        line-height: 1.8em;
        word-break: break-all;
    }

    .rich-img {
        margin-top: 24px;
        margin-left: 24px;
    }

    .rich-h1 .weex-text {
        font-size: 36px;
        font-weight: bold;
    }

    .rich-h2 .weex-text {
        font-size: 32px;
        font-weight: bold;
    }

    .rich-h3 .weex-text {
        font-weight: bold;
    }
    /* a标签 */
    .rich-a .weex-text {
        color: #ba3022;
    }
    .rich-a .weex-div,.rich-a .weex-text {
        display: inline;
    }
    /* pre */
    .rich-pre .weex-text {
        background: #fafafa;
        padding: 20px;
        margin-left: 24px;
        margin-right: 24px;
        margin-top: 24px;
        font-size: 26px;
        line-height: 2em;
        color: #888;
        white-space: pre-wrap;
    }

    /* 表格 */
    .rich-table {
        margin-top: 24px;
        margin-left: 24px;
        margin-right: 24px;
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd;
    }

    .rich-tr {
        flex-direction: row;
        overflow: hidden;
    }

    .rich-td {
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        flex-grow: 1;
        flex-basis: 0%;
        display: inline;
        line-height: 1.5em;
        padding-top: 12px;
        padding-bottom: 12px;
    }

    .rich-table .weex-text {
        font-size: 24px;
        text-align: center;
    }
</style>