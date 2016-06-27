//import Vue from 'vue'
import {
	vButton,
	vButtonGroup,
	vButtonToolbar
} from '../src/app.js'

Vue.config.devtools = true
new Vue({
	el: '#app',
	components: {
		vButton,
		vButtonGroup,
		vButtonToolbar
	},
	data: {
		total: 152,
		perPage: 10
	},
	methods: {
		onPageChange(page){
			console.log('pageNum: ', page)
		}
	}
})