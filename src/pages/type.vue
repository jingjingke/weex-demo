<template>
    <div>
        <Header :info="headInfo"></Header>
        <LoadingDialog :status="isAjax">
            <TypeList :data="typeTree"></TypeList>
        </LoadingDialog>
    </div>
</template>
<script>
    import LoadingDialog from "@/components/loading-dialog"
    import Header from "@/components/header"
    import TypeList from "@/components/type-list"

    export default {
        data() {
            return {
                headInfo: {
                    title: '分类'
                },
                typeList: [],
                typeTree: [],
                isAjax: true,
            }
        },
        methods: {
            getTypeList() {
                return new Promise((resolve, reject) => {
                    this.GET('type.php', {}, (res) => {
                        this.typeList = res.data;
                        resolve()
                    })
                })
            },
            getTagList() {
                return new Promise((resolve, reject) => {
                    this.GET('tag.php', {}, (res) => {
                        // 提取ID数据并初始化
                        let arr = [], tree = [];
                        this.typeList.forEach(item => {
                            arr.push(item.id)
                            tree.push({
                                id: item.id,
                                name: item.typename,
                                children: []
                            })
                        })
                        // 循环结果并将数据放到typeTree
                        res.data.forEach(item => {
                            tree[arr.indexOf(item.typeid)].children.push({
                                id: item.id,
                                name: item.tag,
                                total: item.total
                            })
                        })
                        this.typeTree = tree
                        resolve()
                    })
                })
            }
        },
        components: {
            LoadingDialog,
            Header,
            TypeList
        },
        created() {
            this.getTypeList().then(() => {
                this.getTagList().then(() => {
                    this.isAjax = false
                })
            })
        }
    }
</script>