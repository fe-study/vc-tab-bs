import _button from './button.html'
console.log('button tpl: ', _button)
import {
	vButton,
	vButtonGroup,
	vButtonToolbar
} from '../../../src/app.js'

export default {
	template: _button,
	components: {
		vButton,
		vButtonGroup,
		vButtonToolbar
	},
	data() {
		return {

		}
	}
}