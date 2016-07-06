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
				prefix: 'is-'
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
			}
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
				if(!this.vStyle){
					return ''
				}
				let style = []
				style = this.vStyle.trim().split(' ').map((vClass)=>{
					return this.prefix + vClass
				})
				return style.join(' ')
			}
		}
	}
</script>