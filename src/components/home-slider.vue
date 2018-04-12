<template>
    <slider class="slider" interval="3000" auto-play="true" show-indicators="true">
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
    .slider {
        width: 760px;
        height: 400px;
    }

    .frame {
        width: 760px;
        height: 400px;
    }

    .image {
        width: 760px;
        height: 400px;
    }

    .indicator {
        bottom: 10px;
        width: 100%;
    }

    .weex-indicator-item-active {
        background-color: #fff;
    }
</style>