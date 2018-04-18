<template>
    <div>
        <text v-if="status" class="loading-dialog" ref="load">&#xe100;</text>
        <slot v-if="!status"></slot>
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
                    duration: 30000000,
                    timingFunction: 'linear'
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
        width: 750px;
        margin-top: 400px;
        font-family: iconfont;
        text-align: center;
        font-size: 100px;
        color: #eee;
    }
</style>