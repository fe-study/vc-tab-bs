<template>
	<p class="control">
		<span class="select">
			<select v-model='selected'>
				<option v-for="option in selectItems" :value="option.value">{{option.text}}</option>	
			</select>
		</span>
	</p>
</template>
<script>
	export default {
		data (){
			return {
			}
		},
		props: {
			selected: {
				type: [String, Number],
				required: true
			},
			selectItems: {
				type: Array,
				required: true
			}
		},
		methods: {
			
		}
	}
</script>