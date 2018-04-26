<template>
    <div>
        <text v-if='status' class="loading-dialog" ref="load">&#xe100;</text>
        <slot v-if="!status"></slot>
    </div>
</template>
<script>
    const animation = weex.requireModule('animation')
    const modal = weex.requireModule('modal')

    export default {
        data() {
            return {
                rotateValue: 0,
            }
        },
        props: ['status'],
        methods: {
            loadDelay(el) {
                this.rotateValue += 360;
                animation.transition(el, {
                    styles: {
                        transform: 'rotate(' + this.rotateValue + 'deg)',
                        transformOrigin: 'center center',
                    },
                    duration: 1000,
                    timingFunction: 'ease-in-out',
                    delay: 0
                })
            }
        },
        mounted() {
            const load = this.$refs.load;
            this.loadDelay(load)
            setInterval(() => {
                this.loadDelay(load)
            }, 1000)
        }
    }
</script>
<style scoped>
    .loading-dialog {
        width: 750px;
        font-family: iconfont;
        text-align: center;
        font-size: 64px;
        line-height: 130px;
        color: #eeeeee;
    }
</style>