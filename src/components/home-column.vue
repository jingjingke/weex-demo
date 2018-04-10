<template>
    <div class="section">
        <text class="section-li notes" v-for="(item,index) of list" @click="goColumnList(item.id,item.name)"
              :class="['section-li',{'bor-r-no':index === list.length-1},item.style]">{{item.name}}
        </text>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    name: '前端笔记',
                    style: 'notes',
                    id: '1'
                }, {
                    name: '网页作品',
                    style: 'notes',
                    id: '2'
                }, {
                    name: '转载分享',
                    style: 'share',
                    id: '5'
                }, {
                    name: '生活锁事',
                    style: 'life',
                    id: '3'
                }]
            }
        },
        methods: {
            goColumnList(id, name) {
                this.$router.push({
                    path: '/list', query: {
                        id:id,
                        name:name,
                        type:'column'
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .section {
        width: 100%;
        height: 150px;
        background: #fafafa;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        flex-direction: row;
    }

    .section-li {
        width: 25%;
        height: 150px;
        border-right: 1px solid #e8e8e8;
        text-align: center;
        font-size: 24px;
        color: #666;
        position: relative;
    }

    .section-li:after {
        position: absolute;
        content: '';
        top: 20px;
        left: 50%;
        margin-left: -32px;
        width: 64px;
        height: 64px;
        border-radius: 100%;
        background: #0aba07;
    }

    .section-li:before {
        font-size: 36px;
        font-family: 'iconfont';
        content: '';
        display: block;
        height: 100px;
        line-height: 100px;
        padding-top: 4px;
        color: #fff;
        position: relative;
        z-index: 2;
    }

    .notes:before {
        content: '\e102';
    }

    .works:before {
        content: '\e105';
    }

    .share:before {
        content: '\e103';
    }

    .life:before {
        content: '\e104';
    }

    .bor-r-no {
        border-right: 0;
    }
</style>