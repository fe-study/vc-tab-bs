<template>
	<nav class="nav">	
		<slot name='left'></slot>
		<slot name='center'></slot>
		<slot name='right'></slot>
		<span class='nav-toggle' @click="toggleMenu">
			<span></span>
			<span></span>
			<span></span>
		</span>
	</nav>
</template>
<script>
	export default {
		data(){
			return {
				toggleFlag: true
			}
		},
		props: {
			toggleItem: {
				type: String,
				default(){
					return 'right'
				}
			}
		},
		methods: {
			toggleMenu(){
				let target = this.$el.querySelector('.nav-' + this.toggleItem)
				if(this.toggleFlag){
					target.style.display = 'block'
					this.toggleFlag = false
				}else{
					target.style.display = 'none'
					this.toggleFlag = true
				}
			}
		}
	}
</script>