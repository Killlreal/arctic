<template lang="pug">
.search
	input.search_input(type = "text" placeholder="Что мы ищем?"
					   v-model="query"
					   @click="toggle"
					   @input="find"
					   @blur="toggle")
	transition(name="fade")
		ul.search-result(
			v-if="query.length != 0 && showSearch"
			)
			li.search-result__item(v-if="!results || results.length == 0")
				a.search-result__link
					.search-result__text По запросу {{query}} ничего не найдено
			li.search-result__item(v-for="searchItem in results") 
				a.search-result__link(:href = "searchItem.chpu")
					.search-result__text {{searchItem.title}}  
	a.search_link(href="#")
		svg.actions_icon
			use(href="/assets/icons/icons.svg#search")
</template>

<script>
import ky from 'ky';

export default {
	data(){
		return {
			query: "",
			showSearch: false,
			results: []
		}
	},
	methods: {
		toggle(){ 
			this.showSearch = !this.showSearch
		},
		async find(){
			this.results = await ky.get(`/api/search?query=${this.query}`).json()
		}
	}
};
</script>
