<template>
    <div class="footer">
        <div v-for="item of list" @click="jumpPath('/'+item.path)" class="footer-li">
            <text :class="['footer-icon',item.on?'on-icon':'']">{{item.icon}}</text>
            <text :class="['footer-text',item.on?'on-text':'']">{{item.name}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    name: '首页',
                    path: 'home',
                    icon:'\ue201',
                    on: false
                }, {
                    name: '分类',
                    path: 'type',
                    icon:'\ue202',
                    on: false
                }, {
                    name: '关于我',
                    path: 'me',
                    icon:'\ue203',
                    on: false
                }]
            }
        },
        watch: {
            '$route.path': 'routerChange'
        },
        methods: {
            // 跳转
            jumpPath(path) {
                this.$router.push(path)
            },
            // 监听路径发生变化时
            routerChange(value) {
                this.list.forEach(item => {
                    if ('/' + item.path === value) {
                        item.on = true
                    } else {
                        item.on = false
                    }
                })
            }
        },
        created() {
            this.routerChange(this.$route.path)
        }
    }
</script>
<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 130px;
        width: 750px;
        background-color: #fafafa;
        border-top-width: 1px;
        border-top-color: #e8e8e8;
        flex-direction: row;
    }

    .footer-li {
        text-align: center;
        flex:1;
        justify-content: center;
        align-items:stretch;
    }
    .footer-icon {
        font-family: iconfont;
        text-align: center;
        font-size: 44px;
        line-height: 70px;
        color: #ddd;
    }

    .footer-text {
        font-size: 24px;
        line-height: 40px;
        color: #999;
        text-align: center;
    }
    .on-icon {
        color: #0aba07;
    }
    .on-text,.footer-text-on {
        color: #333;
    }
</style>