<template>
	<a v-if="isLink" 
		class="button {{vbStyle}}"
		href="{{href}}"
		target="{{target}}">
		<slot></slot>
	</a>
	<button v-else class="button {{vbStyle}}"
		type="{{type}}">
		<slot></slot>
	</button>
</template>
<script>
	export default {
		data (){
			return {
				prefix: 'is-',
				className: ''
			}
		},
		props: {
			vStyle: {
				type: String,
				default (){
					return ''
				}
			},
			/*
			Link attrs
			*/
			href: {
				type: String
			},
			target: {
				type: String
			},
			/*
			button attrs
			*/
			type: {
				type: String,
				default(){
					return 'button'
				}
			}
		},
		computed: {
			isLink(){
				return this.href ? true : false
			},
			vbStyle(){
				let vStyle = ''
				if(this.className){
					vStyle = this.vStyle + ' ' + this.className
				}else{
					vStyle = this.vStyle
				}
				if(!vStyle){
					return ''
				}
				let style = []
				style = vStyle.trim().split(' ').map((vClass)=>{
					return this.prefix + vClass
				})
				return style.join(' ')
			}
		},
		methods: {
			/*
			 * @private
			 */
			addClass(className){
				this.className += className
			},
			removeClass(className){
				if(this.className ){
					this.className = this.className.replace(new RegExp(className), '')
				}

				if(this.vStyle ){
					this.vStyle = this.vStyle.replace(new RegExp(className), '')
				}
			}
		}
	}
</script>