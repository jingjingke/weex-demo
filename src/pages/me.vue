<template>
    <div>
        <HeaderFlex :info="headInfo"></HeaderFlex>
        <AboutMe></AboutMe>
    </div>
</template>
<script>
    import HeaderFlex from "@/components/header"
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
            HeaderFlex,
            AboutMe
        }
    }
</script>