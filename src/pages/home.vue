<template>
    <div>
        <Header :info="headInfo"></Header>
        <LoadingDialog :status="isAjax">
            <HomeSlider :data="imageList"></HomeSlider>
            <HomeColumn></HomeColumn>
            <CommonList :data="articleList"></CommonList>
            <div @appear="onloading">
                <LoadingMore :status="hasMore"></LoadingMore>
            </div>
        </LoadingDialog>
    </div>
</template>
<script>
    import LoadingDialog from "@/components/loading-dialog"

    import Header from "@/components/header"
    import HomeSlider from "@/components/home-slider"
    import HomeColumn from "@/components/home-column"
    import CommonList from "@/components/common-list"

    import LoadingMore from "@/components/loading-more"

    const stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal')

    export default {
        data() {
            return {
                headInfo: {
                    title: '首页'
                },
                imageList: [],
                articleList: [],
                filter: {
                    begin: 0,
                    base: 10
                },
                hasMore: true,
                isAjax: true,
                moreStatus:true
            }
        },
        methods: {
            getSliderImg() {
                return new Promise((resolve, reject) => {
                    this.GET('list.php', {
                        typeid: 2,
                        flag: true
                    }, (res) => {
                        this.imageList = res.data;
                        resolve()
                    })
                })
            },
            getArticleList() {
                return new Promise((resolve, reject) => {
                    this.GET('list.php', {
                        typeid: 1,
                        limit: this.filter.begin + ',' + this.filter.base
                    }, (res) => {
                        this.articleList = this.articleList.concat(res.data);
                        // 如果已经查询了30条数据的话则不再显示更多了
                        if(this.filter.begin >= 20){
                            this.hasMore = false;
                        }
                        resolve()
                    })
                })
            },
            onloading() {
                if(this.moreStatus && this.hasMore){
                    // 将加载更多的状态先暂时关闭
                    this.moreStatus = false;
                    // 将页数累加
                    this.filter.begin += 10;
                    this.getArticleList().then(()=>{
                        this.moreStatus = true;
                    })
                }
            }
        },
        components: {
            LoadingDialog,
            Header,
            HomeSlider,
            HomeColumn,
            CommonList,
            LoadingMore
        },
        created() {
            // 调用页面数据
            this.getSliderImg().then(() => {
                this.getArticleList().then(() => {
                    this.isAjax = false;
                })
            })
        }
    }
</script>