<template>
    <div>
        <Header :info="headInfo"></Header>
        <LoadingDialog :status="isAjax">
            <CommonList :data="articleList"></CommonList>
            <div @appear="onloading" v-if="!isOnly">
                <LoadingMore :status="hasMore"></LoadingMore>
            </div>
        </LoadingDialog>
    </div>
</template>
<script>
    import LoadingDialog from "@/components/loading-dialog"

    import Header from "@/components/header"
    import CommonList from "@/components/common-list"

    import LoadingMore from "@/components/loading-more"

    const modal = weex.requireModule('modal')
    const storage = weex.requireModule('storage')

    export default {
        data() {
            return {
                headInfo: {
                    title: '列表'
                },
                articleList: [],
                filter: {
                    id: '',
                    type: '',
                    begin: 0,
                    base: 10
                },
                hasMore: true,
                isAjax: true,
                moreStatus: true,
                isOnly:false,
            }
        },
        methods: {
            getArticleList() {
                return new Promise((resolve, reject) => {
                    let sendData = {};
                    if (this.filter.type === 'column') {
                        sendData.typeid = this.filter.id;
                    } else if (this.filter.type === 'tag') {
                        sendData.tagid = this.filter.id;
                    }
                    sendData.limit = this.filter.begin + ',' + this.filter.base;
                    this.GET('list.php', sendData, (res) => {
                        //赋值并判断条数的情况，（部分）确认已经没有更多的情况
                        if (res.data.length === 0) {
                            this.hasMore = false;
                        } else {
                            this.articleList = this.articleList.concat(res.data);
                            if (res.data.length < this.filter.base) {
                                this.hasMore = false;
                            }
                        }
                        //如果是第一页，且不满足基本条数时，就不显示
                        if(this.filter.begin === 0 && res.data.length < this.filter.base){
                            this.isOnly = true;
                        }
                        resolve()
                    })
                })
            },
            onloading() {
                if (this.moreStatus && this.hasMore) {
                    // 将加载更多的状态先暂时关闭
                    this.moreStatus = false;
                    // 将页数累加
                    this.filter.begin += 10;
                    this.getArticleList().then(() => {
                        this.moreStatus = true;
                    })
                }
            }
        },
        components: {
            LoadingDialog,
            Header,
            CommonList,
            LoadingMore
        },
        created() {
            let query = this.$route.query;
            if (JSON.stringify(query) === '{}') {
                modal.alert({
                    message: '您访问的地址不合法！请从首页重新进入',
                }, () => {
                    this.$router.push('/home')
                })
            } else {
                this.headInfo.title = query.name;
                this.filter.id = query.id;
                this.filter.type = query.type;
                this.getArticleList().then(() => {
                    this.isAjax = false;
                })
            }
        }
    }
</script>
<style scoped>
</style>