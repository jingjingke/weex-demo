<template>
    <div class="type-warp">
        <template v-for="item of data">
            <text class="type-title" @click="goColumnList(item.id,item.name)">{{item.name}}</text>
            <div class="type-list">
                <div class="type-tag" v-for="list of item.children" @click="goTagList(list.id,list.name)">
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
        }
    }
</script>
<style scoped>
    .type-title {
        line-height: 88px;
        background-color: #fafafa;
        padding-left: 24px;
        font-size: 30px;
        color: #0aba07;
    }

    .type-list {
        padding-right: 24px;
        margin-top: 18px;
        margin-bottom: 32px;
        flex-direction:row;
    }

    .type-tag {
        height: 60px;
        line-height: 60px;
        padding: 0 24px;
        margin-left: 24px;
        border-width: 1px;
        border-color: #e8e8e8;
        border-radius: 12px;
        background-color: #fafafa;
        flex-direction: row;
        align-items:center;
    }

    .type-text {
        font-size: 28px;
    }

    .type-total {
        font-size: 24px;
        padding-left: 6px;
        color: #999;
    }
</style>