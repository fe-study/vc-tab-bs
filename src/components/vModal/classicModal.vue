<template>
	<div class="modal"
		:class="{'is-active': isShow}">
	  <div class="modal-background"></div>
	  <div class="modal-container">
	    <div class="modal-content">
	    	<slot name='body'></slot>
	    </div>
	  </div>
	  <button class="modal-close" @click.prevent='onClose'></button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isShow: false
			}
		},
		computed:{ 

		},
		methods: {
			onShow(){
				this.isShow = true
			},
			onClose(){
				this.isShow = false
			},
			onSwitch(){
				this.isShow = !this.isShow
			}
		}
	}
</script>