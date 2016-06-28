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
				text: 'vButton',
				index: 0
			},
			{
				text: 'vSelect',
				index: 1
			},
			{
				text: 'vTab',
				index: 2
			},
			{
				text: 'vPagination',
				index: 3
			}
		],
		tabIndex: 0
	},
	methods: {
		onPageChange(page){
			console.log('pageNum: ', page)
		},
		onNavChange(index){
			this.tabIndex = index
		},
		onSelected(option){
			console.log('selected item: ', option.value, option.text)
		}
	}
})