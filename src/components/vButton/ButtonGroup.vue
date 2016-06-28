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
			vClass: {
				type: String,
				default (){
					return ''
				}
			}
		},
		computed: {
			vbStyle(){
				if(!this.vClass){
					return ''
				}
				let style = []
				style = this.vClass.trim().split(' ').map((vClass)=>{
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