<template>
    <div>
        <Header :info="headInfo"></Header>
        <text>文章页</text>
    </div>
</template>
<script>
    import Header from "@/components/header"

    export default {
        data() {
            return {
                headInfo: {
                    title: '文章标题'
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