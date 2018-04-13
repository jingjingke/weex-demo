<template>
    <div>
        <text class="load-text" v-if="status">内容正在加载中...</text>
        <text class="load-text" v-else>我也是有底线的，嗯哼！</text>
    </div>
</template>
<script>
    export default {
        props: ['status']
    }
</script>
<style scoped>
    .load-text {
        height: 120px;
        line-height: 120px;
        text-align: center;
        color: #ccc;
        font-size: 24px;
    }
</style>