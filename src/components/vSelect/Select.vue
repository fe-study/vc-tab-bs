<template>
	<div class="control">
		<span class="vSelect button is-outlined {{isHover ? vbStyle : ''}}" 
			:style="vSelectStyle"
			v-on:mouseover="vSelectHover" 
			v-on:mouseout="vSelectOut"
			@click="switchSelectBody">
			{{selectedItem}}
			<span class="icon">
				<i class="fa fa-angle-down"></i>
			</span>
		</span>
		<ul v-show="isShow" class="vSelect-body box" :style="vSelectStyle">
			<li v-for="(index,option) in selectArray">
				<a
				 class="button is-outlined {{vbStyle + (currentIndex == index ? ' active' : '')}}" href="javascript:void(0);" @click="onSelect(option, index)">{{{option.text}}}</a>
			</li>
			
		</ul>
	</div>

</template>
<script>
	export default {
		data (){
			return {
				className: '',
				isHover: false,
				isShow: false,
				currentIndex: 0
			}
		},
		props: {
			selected: {
				type: [Number]
			},
			selectItems: {
				type: Array,
				required: true
			},
			onSelected: {
				type: Function,
				required: true
			},
			width: {
				type: [String, Number],
				default (){
					return 100 + 'px'
				}
			},
			vStyle: {
				type: String,
				default (){
					return 'is-primary'
				}
			}
		},
		computed: {
			vSelectStyle (){
				return {
					width: this.width
				}
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
					return vClass
				})
				return style.join(' ')
			},
			selectArray(){
				return this.selectItems
			},
			selectedItem(){
				return this.selectArray[this.currentIndex].text
			}
		},
		methods: {
			vSelectHover(){
				this.isHover = true
			},
			vSelectOut(){
				this.isHover = false
			},
			onSelect(option, index){
				this.hideSelectBody()
				this.currentIndex = index
				this.onSelected(option, index)
			},
			showSelectBody(){
				this.isShow = true
			},
			hideSelectBody(){
				this.isShow = false
			},
			switchSelectBody(){
				if(this.isShow){
					this.isShow = false
				}else{
					this.isShow = true
				}
			},
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
		},
		watch: {
			
		},
		ready(){
			
		}
	}
</script>
<style scoped>
	.select-component-mask{
		position: fixed;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 1999;
	}
	.control{
		position: relative;
		display: inline-block;
	}
	.control .box{
		padding: 0;
		overflow: scroll;
		max-height: 500px;
	}
	.control .box .button{
		width: 100%;
		max-width: 150px;
		color: #333;
		border: none;
		border-bottom: 1px solid #eee;
		border-radius: 0;
		text-align: left;
	}
	.control .active{
		background: #eee;
		color: #333;
		border-bottom: none;
	}
	.control .box .button:hover{
		color: #fff;
	}
	.control .box li:first-child .button{
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}
	.control .box li:last-child .button{
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
	}
	.control span.vSelect{
		cursor: pointer;
		color: #333;
		background: #fff;
	}

	.control span.vSelect:hover{
		color: #333;
		background: #fff;
	}
	.vSelect-body{
		position: absolute;
		top: 35px;
	}
</style>