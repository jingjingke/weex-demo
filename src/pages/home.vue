<template>
    <div>
        <Header :info="headInfo"></Header>
        <text>首页</text>
    </div>
</template>
<script>
    import Header from "@/components/header"

    export default {
        data() {
            return {
                headInfo: {
                    title: '井井首页'
                }
            }
        },
        methods: {},
        components: {
            Header
        }
    }
</script>
<style scoped>
</style>
