<template>
    <div>
        <text v-if="status" class="loading-dialog" ref="load">&#xe100;</text>
        <slot v-else></slot>
    </div>
</template>
<script>
    const animation = weex.requireModule('animation')

    export default {
        data() {
            return {
                rotateValue: 0,
            }
        },
        props: ['status'],
        methods: {
            loadDelay(el) {
                this.rotateValue += 7200000;
                animation.transition(el, {
                    styles: {
                        transform: 'rotate(' + this.rotateValue + 'deg)',
                        transformOrigin: 'center center'
                    },
                    duration: 30000000
                })
            }
        },
        mounted() {
            const load = this.$refs.load;
            this.loadDelay(load)
            // setInterval(() => {
            //     this.loadDelay(load)
            // }, 300000)
        }
    }
</script>
<style scoped>
    .loading-dialog {
        width: 100px;
        height: 100px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -80px;
        margin-left: -50px;
        font-family: "iconfont";
        font-size: 100px;
        line-height: 100px;
        text-align: center;
        color: #eee;
    }
</style>