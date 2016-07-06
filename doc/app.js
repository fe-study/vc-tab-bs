import Vue from 'vue'
import {
	vButton,
	vButtonGroup,
	vButtonToolbar,
	vSelect,
	vBaseSelect,
	vPagination,
	vTab,
	vNav,
	vModal,
	vClassicModal
} from '../src/app.js'

import _ from './helper/util.js'
const setLang = _.setLang

/*json data*/
import buttonJsonStore from './store/json/button.js'
import marked from 'marked'

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
})

/*
 * components
 */	
import vButtonComponent from './components/button/button.js'
console.log('vButtonComponent: ', vButtonComponent)
/*
 * store processing 
 */
function markedStore(store){
	let data = []
	for(let obj in store){
		let sources = store[obj].code
		for(let source in sources){
			data.push(marked(setLang(sources[source], source)))
		}
	}
	return data
}

/*
 * Buttons demo code
 */
let buttonCode = markedStore(buttonJsonStore)

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
		vNav,
		vButtonComponent,
		vModal,
		vClassicModal
	},
	data: {
		total: 152,
		perPage: 10,
		selected: 0,
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
		baseSelected: 'a',
		selectBaseItems: [
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
		tabIndex: 0,
		vButtonCode: buttonCode
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
		},
		showClassicModal(){
			this.$refs.classicModal.onShow()
		}
	}
})