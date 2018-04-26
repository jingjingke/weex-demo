<template>
    <div class="about-me">
        <div class="about-warp warp-row">
            <image src="https://avatars2.githubusercontent.com/u/24471671?s=460&v=4" class="avatar"></image>
            <div>
                <div class="about-des">
                    <text class="des-label">昵称</text>
                    <text class="des-text">小崔</text>
                </div>
                <div class="about-des">
                    <text class="des-label">现居</text>
                    <text class="des-text">杭州-余杭区</text>
                </div>
                <div class="about-des">
                    <text class="des-label">QQ</text>
                    <text class="des-text">919948650</text>
                </div>
                <div class="about-des">
                    <text class="des-label">爱好</text>
                    <text class="des-text">宅、动漫</text>
                </div>
            </div>
        </div>
        <div class="about-warp">
            <text class="about-info">从事过电子商务与美工/UI相关工作，专职前端三年多，目前正努力朝全栈发展。</text>
            <text class="about-info">多年使用CMS(/freemarker)模板的经验，有独立开发网站的能力，能够使用php做一些简单的数据接口开发。</text>
            <text class="about-info">熟练使用JQ库以及VUE框架，对React也有一些接触（github中有贴出一个react实现的博客实例）。</text>
            <text class="about-info">欢迎小伙伴和我交流学习~</text>
        </div>
        <div class="about-warp mb30">
            <div class="about-des">
                <text class="des-label">Github</text>
                <text class="des-text">https://github.com/jingjingke</text>
            </div>
            <div class="about-des">
                <text class="des-label">博客</text>
                <text class="des-text">http://www.jingjingke.com</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .about-warp {
        width: 700px;
        margin: 28px 25px 0;
        border-width: 2px;
        border-color: #e8e8e8;
        background-color: #fafafa;
        padding: 20px;
        border-radius: 24px;
    }
    .warp-row {
        flex-direction: row;
    }
    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 20px;
        margin-right: 24px;
        background-color: #f2f2f2;
    }
    .about-des {
        color: #333333;
        height: 50px;
        flex-direction: row;
        align-items:center;
    }

    .des-text {
        font-size: 26px;
    }

    .des-label {
        width: 106px;
        font-size: 24px;
        text-align: center;
        background-color: #0aba07;
        color: #ffffff;
        border-radius: 10px;
        height: 34px;
        line-height: 34px;
        margin:0 18px;
    }

    .about-info {
        font-size: 28px;
        line-height: 50px;
        color: #333333;
        margin: 12px 0;
    }
    .mb30 {
        margin-bottom: 30px;
    }
</style>