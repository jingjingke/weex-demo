<template>
    <div class="footer-warp">
        <div class="footer">
            <text v-for="item of list"
                  @click="jumpPath('/'+item.path)"
                  :class="['footer-li '+item.path,{on:item.on}]"
            >{{item.name}}
            </text>
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
                    on: true
                }, {
                    name: '分类',
                    path: 'type',
                    on: false
                }, {
                    name: '关于我',
                    path: 'me',
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
                this.list.forEach(item=>{
                    if('/' + item.path === value){
                        item.on = true
                    }else{
                        item.on = false
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .footer-warp {
        position: relative;
        z-index: 99;
        height: 130px;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 130px;
        width: 100%;
        background: #fafafa;
        border-top: 1px solid #e8e8e8;
        flex-direction: row;
    }

    .footer-li {
        width: 33.33%;
        height: inherit;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .footer-li:before {
        font-size: 44px;
        font-family: 'iconfont';
        content: '';
        display: block;
        height: 75px;
        line-height: 75px;
        padding-top: 8px;
        color: #ddd;
    }

    .home:before {
        content: '\e201';
    }

    .type:before {
        content: '\e202';
    }

    .me:before {
        content: '\e203';
    }

    .on {
        color: #333;
    }

    .on:before {
        color: #0aba07;
    }
</style>