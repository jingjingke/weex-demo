<template>
    <image v-if="data.name === 'img'" resize="stretch" :alt="data.attrs.alt || ''" :src="data.attrs.src"
           class="rich-img" @load="loadImg" :style="styleObject"></image>
    <div v-else-if="data.children !== undefined && !(data.children.length ===1 && data.children[0].text === '')"
         :class="['rich-'+data.name]">
        <RichText v-for="(item,index) of data.children" :data="item" :key="index" :label="data.name"></RichText>
    </div>
    <text v-else-if="data.text !== ''" :class="['rich-text','rich-'+label+'-text']">{{escape2Html(label,data.text)}}</text>
</template>
<script>
    export default {
        data() {
            return {
                isShow: false,
                styleObject: {
                    height: '300px'
                }
            }
        },
        props: ['data', 'label'],
        methods: {
            checkStyle(obj) {
                if (obj !== undefined) {
                    return obj.class || ''
                } else {
                    return ''
                }
            },
            escape2Html(label,str) {
                // 转化富文本标签（pre）
                if(label === 'pre'){
                    let arrEntities = {'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"'};
                    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
                        return arrEntities[t];
                    })
                }else{
                    return str
                }
            },
            loadImg(event) {
                let size = 300;
                if(!(event === undefined || event.size === undefined || event.size.naturalHeight===undefined)){
                    size = 700 * event.size.naturalHeight / event.size.naturalWidth;
                }
                this.styleObject = {
                    height: size + 'px'
                }
            }
        }
    }
</script>
<style scoped>
    .rich-img {
        width: 700px;
        height: 300px;
        margin: 24px 0 0 25px;
    }

    .rich-text {
        font-size: 28px;
        padding: 0 24px;
        margin-top: 24px;
    }

    .rich-p-text, .rich-div-text, .rich-h3-text, .rich-h4-text {
        line-height: 52px;
    }

    .rich-pre-text {
        font-size: 24px;
        /*white-space: pre-wrap;*/
        color: #666666;
        background-color: #f8f8f8;
        padding: 24px;
        margin: 24px 24px 0;
    }

    .rich-h1-text {
        font-size: 36px;
        line-height: 64px;
        font-weight: bold;
    }

    .rich-h2-text {
        font-size: 32px;
        line-height: 54px;
        font-weight: bold;
    }

    .rich-h3-text {
        font-weight: bold;
    }

    .rich-a-text {
        color: #ba3022;
    }

    .rich-table {
        margin: 24px 24px 0;
        border-color: #dddddd;
        border-top-width: 1px;
        border-left-width: 1px;
    }

    .rich-tr {
        flex-direction: row;
        border-color: #dddddd;
        border-bottom-width: 1px;
    }

    .rich-td, .rich-th {
        flex: 1;
        border-color: #dddddd;
        border-right-width: 1px;
    }

    .rich-td-text, .rich-th-text {
        font-size: 24px;
        text-align: center;
        margin: 0;
        padding: 6px;
    }

    .rich-th-text {
        background-color: #fafafa;
    }
</style>