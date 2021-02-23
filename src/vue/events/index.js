import Vue from 'vue';
import Layout from './layout/layout.vue';

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


Vue.component('v-select', vSelect)

export default class Events{
	constructor(selector){
		new Vue({
			el: selector,
			render: h => h(Layout),
		})
	}
}
