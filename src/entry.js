/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
import mixins from '@/mixins'
Vue.mixin(mixins)

// 挂载全局组件-富文本解析
import RichText from "@/utils/richText/richText.vue"
Vue.component('RichText', RichText)


new Vue(Vue.util.extend({el: '#root', router}, App));

router.push('/');

