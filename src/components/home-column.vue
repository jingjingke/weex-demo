<template>
    <div class="section">
        <div class="section-li" v-for="(item,index) of list" @click="goColumnList(item.id,item.name)">
            <text class="section-icon" v-html="item.icon"></text>
            <text :class="['section-text',{'bor-r-no':index === list.length-1}]">{{item.name}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    name: '前端笔记',
                    style: 'notes',
                    icon: '&#xe102;',
                    id: '1'
                }, {
                    name: '网页作品',
                    style: 'works',
                    icon: '&#xe105;',
                    id: '2'
                }, {
                    name: '转载分享',
                    style: 'share',
                    icon: '&#xe103;',
                    id: '5'
                }, {
                    name: '生活锁事',
                    style: 'life',
                    icon: '&#xe104;',
                    id: '3'
                }]
            }
        },
        methods: {
            goColumnList(id, name) {
                this.$router.push({
                    path: '/list', query: {
                        id: id,
                        name: name,
                        type: 'column'
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .section {
        width: 750px;
        height: 150px;
        background-color: #fafafa;
        border-top-width: 1px;
        border-top-color: #e8e8e8;
        border-bottom-width: 1px;
        border-bottom-color: #e8e8e8;
        flex-direction: row;
    }

    .section-li {
        flex: 1;
        justify-content: center;
        align-items: stretch;
        border-right-width: 1px;
        border-right-color: #e8e8e8;
        text-align: center;
    }

    .section-icon {
        font-family: 'iconfont';
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        border-radius: 100%;
        font-size: 36px;
        color: #fff;
        background-color: #0aba07;
        justify-content: center;
        margin:0 0 12px 58px;
    }
    .section-text {
        text-align: center;
        font-size: 24px;
        color: #666;
    }
    .bor-r-no {
        border-right-width: 0;
    }

    /*
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



    */
</style>