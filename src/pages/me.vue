<template>
    <div>
        <Header :info="headInfo"></Header>
        <text>关于我</text>
    </div>
</template>
<script>
    import Header from "@/components/header"

    export default {
        data() {
            return {
                headInfo: {
                    title: '关于我'
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