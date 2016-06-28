<template>
	<div class="control has-addons">
		<slot></slot>	
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		props: {
			vStyle: {
				type: String,
				default (){
					return ''
				}
			}
		},
		computed: {
			vbStyle(){
				if(!this.vStyle){
					return ''
				}
				let style = []
				style = this.vStyle.trim().split(' ').map((vClass)=>{
					return vClass
				})
				return style.join(' ')
			}
		},
		ready(){
			/*
			 * process child components style
			 */
			this.$children.forEach((child)=>{
				child.addClass(this.vbStyle)
			})
		}
	}
</script>
<style>
	
</style>