<template>
    <div class="">
      <ul class="nav nav-tabs">
        <li v-for="(index,item) in data"
            :class="{'active': index==currentIndex}">
            <a 
                @click.prevent='onNav(index, item)'
            >{{{item.text}}}</a>
        </li>
      </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                currentIndex: 0
            }
        },
        props: {
            data: {
                type: Array,
                required: true
            },
            onNavChange: {
                type: Function,
                required: true
            }
        },
        methods: {
            onNav(index, item){
                this.currentIndex = index;
                this.onNavChange(index, item)
            }
        }
    }
</script>