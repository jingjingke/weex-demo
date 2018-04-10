<template>
    <div class="section">
        <text class="section-li notes">前端笔记</text>
        <text class="section-li works">网页作品</text>
        <text class="section-li share">转载分享</text>
        <text class="section-li life bor-r-no">生活锁事</text>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .section {
        width: 100%;
        height: 150px;
        background: #fafafa;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        flex-direction: row;
    }

    .section-li {
        width: 25%;
        height: 150px;
        border-right: 1px solid #e8e8e8;
        text-align: center;
        font-size: 24px;
        color: #666;
        position: relative;
    }

    .section-li:after {
        position: absolute;
        content: '';
        top: 20px;
        left: 50%;
        margin-left: -32px;
        width: 64px;
        height: 64px;
        border-radius: 100%;
        background: #0aba07;
    }

    .section-li:before {
        font-size: 36px;
        font-family: 'iconfont';
        content: '';
        display: block;
        height: 100px;
        line-height: 100px;
        padding-top: 4px;
        color: #fff;
        position: relative;
        z-index: 2;
    }

    .notes:before {
        content: '\e102';
    }

    .works:before {
        content: '\e105';
    }

    .share:before {
        content: '\e103';
    }

    .life:before {
        content: '\e104';
    }

    .bor-r-no {
        border-right: 0;
    }
</style>