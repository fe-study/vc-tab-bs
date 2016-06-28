import Vue from 'vue'
import {
	vButton,
	vButtonGroup,
	vButtonToolbar,
	vSelect,
	vBaseSelect,
	vPagination,
	vTab,
	vNav
} from '../src/app.js'

Vue.config.devtools = true
new Vue({
	el: '#app',
	components: {
		vButton,
		vButtonGroup,
		vButtonToolbar,
		vSelect,
		vBaseSelect,
		vPagination,
		vTab,
		vNav
	},
	data: {
		total: 152,
		perPage: 10,
		selected: 'a',
		selectItems: [
			{
				value: 'a',
				text: 'selectone'
			},
			{
				value: 'b',
				text: 'selecttwo'
			},
			{
				value: 'c',
				text: 'selecthree'
			}
		],
		tabArray: [
			{
				text: 'music',
				index: 0
			},
			{
				text: 'video',
				index: 1
			},
			{
				text: 'movies',
				index: 2
			}
		]
	},
	methods: {
		onPageChange(page){
			console.log('pageNum: ', page)
		},
		onNavChange(page){
			console.log('pageNum: ', page)
		},
		onSelected(option){
			console.log('selected item: ', option.value, option.text)
		}
	}
})