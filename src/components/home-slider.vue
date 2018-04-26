<template>
    <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="img in data" @click="goArticle(img.aid,img.title)">
            <image class="image" resize="cover" :src="'http://www.jingjingke.com/'+ img.litpic" alt="img.title"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>
<script>
    export default {
        props: ['data'],
        methods:{
            goArticle(id, name) {
                this.$router.push({
                    path: '/article', query: {
                        id:id,
                        name:name
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .slider,.frame,.image {
        width: 750px;
        height: 400px;
    }

    .indicator {
        position: absolute;
        left: 0;
        right:0;
        bottom: 0;
        width:750px;
        height: 90px;
        item-color: #eeeeee;
        item-selected-color: #0aba07;
    }
</style>