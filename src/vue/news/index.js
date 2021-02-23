import Vue from 'vue';
import Layout from './layout/layout.vue';

export default class News{
	constructor(selector){
		new Vue({
			el: selector,
			render: h => h(Layout),
		})
	}
}
