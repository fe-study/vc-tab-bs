<template>
	<div class="is-btn-group">
		<slot></slot>	
	</div>
</template>
<script>
	export default {
		data(){
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
			}
		},
		computed: {
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
	.is-btn-group{
		overflow: hidden;
	}
	.is-btn-group > .button{
		float: left;
		margin-left: -1px;
		border-radius: 0;
	}
	.is-btn-group .button:first-child{
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		margin-left: 0;
	} 
	.is-btn-group .button:last-child{
		border-bottom-right-radius: 3px;
		border-top-right-radius: 3px;
	} 
</style>