<template>
    <div>
        <Header :info="headInfo"></Header>
        <AboutMe></AboutMe>
    </div>
</template>
<script>
    import Header from "@/components/header"
    import AboutMe from "@/components/me-about"

    export default {
        data() {
            return {
                headInfo: {
                    title: '关于我'
                }
            }
        },
        methods: {},
        components: {
            Header,
            AboutMe
        }
    }
</script>