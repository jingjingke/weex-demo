<template>
    <div>
        <Header :info="headInfo"></Header>
        <text>列表</text>
    </div>
</template>
<script>
    import Header from "@/components/header"

    export default {
        data() {
            return {
                headInfo: {
                    title: '列表'
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