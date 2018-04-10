<template>
    <div class="about-me">
        <div class="about-warp">
            <img src="https://avatars2.githubusercontent.com/u/24471671?s=460&v=4" class="avatar">
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
        <div class="about-warp warp02">
            <text class="about-info">从事过电子商务与美工/UI相关工作，专职前端三年多，目前正努力朝全栈发展。</text>
            <text class="about-info">多年使用CMS(/freemarker)模板的经验，有独立开发网站的能力，能够使用php做一些简单的数据接口开发。</text>
            <text class="about-info">熟练使用JQ库以及VUE框架，对React也有一些接触（github中有贴出一个react实现的博客实例）。</text>
            <text class="about-info">欢迎小伙伴和我交流学习~</text>
        </div>
        <div class="about-warp warp02">
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
        margin-left: 28px;
        margin-top: 30px;
        border: 2px solid #e8e8e8;
        background: #fafafa;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 24px;
        flex-direction: row;
    }

    .warp02 {
        flex-direction: column;
    }

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 20px;
        margin-right: 24px;
        overflow: hidden;
    }

    .about-des {
        color: #333;
        display: block;
        height: 50px;
        line-height: 50px;
    }

    .des-text {
        display: inline-block;
        font-size: 26px;
        line-height: inherit;
    }

    .des-label {
        float: left;
        display: inline;
        font-size: 24px;
        width: 106px;
        text-align: center;
        background: #0aba07;
        color: #fff;
        border-radius: 10px;
        height: 36px;
        line-height: 36px;
        margin-top: 8px;
        margin-right: 18px;
    }

    .about-info {
        font-size: 28px;
        line-height: 50px;
        width: 100%;
        color: #333;
        margin-top: 12px;
        margin-bottom: 12px;
        text-indent: 50px;
    }
</style>