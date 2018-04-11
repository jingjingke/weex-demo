<template>
    <div>
        <Header :info="headInfo"></Header>
        <LoadingDialog :status="isAjax">
            <CommonArticle :data="content"></CommonArticle>
        </LoadingDialog>
    </div>
</template>
<script>
    import LoadingDialog from "@/components/loading-dialog"

    import Header from "@/components/header"
    import CommonArticle from "@/components/common-article"

    export default {
        data() {
            return {
                headInfo: {
                    title: '文章标题'
                },
                content: {},
                isAjax: true,
            }
        },
        methods: {
            getArticle(id) {
                return new Promise((resolve, reject) => {
                    this.GET('article.php', {
                        aid: id
                    }, (res) => {
                        this.content = res.data;
                        //继续取文章对应tags列表
                        this.GET('taglist.php', {
                            aid: id
                        }, (rs) => {
                            this.content.tags = rs.data;
                            resolve()
                        })
                    })
                })
            }
        },
        components: {
            LoadingDialog,
            Header,
            CommonArticle
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
                this.getArticle(query.id).then(() => {
                    this.isAjax = false;
                })
            }
        }
    }
</script>
<style scoped>
</style>