import Vue from 'vue'
import vcTab from '../dist/build.js'

new Vue({
	el: '#app',
	data () {
		return {
			tabData: [
				{
					value: 0,
					text: 'javascript'
				},
				{
					value: 1,
					text: 'ruby'
				},
				{
					value: 2,
					text: 'java'
				},
				{
					value: 3,
					text: 'c++'
				}
			]
		}
	},
	components: {
		vcTab
	},
	methods: {
		onNavChange (index) {

		}
	}
})