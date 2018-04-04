<template>
    <div>
        <Header :info="headInfo"></Header>
        <text>分类</text>
    </div>
</template>
<script>
    import Header from "@/components/header"

    export default {
        data() {
            return {
                headInfo: {
                    title: '分类'
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