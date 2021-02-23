import Vue from 'vue';
import Layout from './layout.vue';

export default class Search{
	constructor(selector){
		new Vue({
			el: selector,
			render: h => h(Layout),
		})
	}
}
