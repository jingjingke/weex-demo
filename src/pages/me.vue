<template>
    <div class="pb130">
        <HeaderFlex :info="headInfo"></HeaderFlex>
        <AboutMe></AboutMe>
        <FooterFelx></FooterFelx>
    </div>
</template>
<script>
    import HeaderFlex from "@/components/header"
    import AboutMe from "@/components/me-about"
    import FooterFelx from "@/components/footer"

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
            AboutMe,
            FooterFelx
        }
    }
</script>
<style scoped>
    .pb130 {
        padding-bottom: 130px;
    }
</style>