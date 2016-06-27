<template>
  <div class="component-standard-pagination" v-show="totalPage>1">
    <nav>
      <ul class="pagination">
        <li :class="{'disabled': currentPage == 1}">
          <a href="javascript:void(0);" aria-label="First" @click='onChangePage("first")' >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li :class="{'disabled': currentPage == 1}">
          <a href="javascript:void(0);" aria-label="Previous" @click="onChangePage('previous')" >
            <span class="smaller" aria-hidden="true">&lt;</span>
          </a>
        </li>
        <template v-for="index in paginationData">
          <li :class="{'active': currentPage == index}"><a href="javascript:void(0);" v-html='index' @click="onChangePage(index)" ></a></li>        
        </template>
        <li :class="{'disabled': currentPage == totalPage}">
          <a href="javascript:void(0);" aria-label="Next" @click="onChangePage('next')" >
            <span class="smaller" aria-hidden="true">&gt;</span>
          </a>
        </li>
        <li :class="{'disabled': currentPage == totalPage}">
          <a href="javascript:void(0);" aria-label="Last" @click="onChangePage('last')" >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <div class="totalPageNum" slot="totalPageNum">
            <a href="javascript:void(0);" class="btn btn-default">总共{{ totalPage }}页</a>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  props: {
    total: {
      type: Number,
      default(){
        return 0
      }
    },
    perPage: {
      type: Number,
      default(){
        return 12
      }
    },
    paginationPage: {     //分页脚标默认数目
      type: Number,
      default(){
        return 5
      }
    },
    onPageChange: {
      type: Function
    }
  },
  watch: {
    currentPage(val){
      //onChangePage callback
      this.onPageChange(val)
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total/this.perPage)
    },
    paginationData() {
      let pageArray = []
      if(this.totalPage <= this.paginationPage){
        for(let index = 1; index <= this.totalPage; index++){
          pageArray.push(index)
        }
      }else if(this.totalPage > this.paginationPage){
        let firstPageNum = this.currentPage > parseInt(this.paginationPage/2) ? this.currentPage - parseInt(this.paginationPage/2) : 1

        if(this.currentPage + this.paginationPage > this.totalPage){
          firstPageNum = this.totalPage - this.paginationPage + 1
        }
        for(let index = firstPageNum; index < (firstPageNum + this.paginationPage); index++){
          pageArray.push(index)
        }
      }
      return pageArray;
    }
  },
  methods: {
    onChangePage(page){
      if(page == 'first'){
        this.currentPage = 1
      }else if(page == 'previous'){
        if(this.currentPage != 1){
          this.currentPage--
        }
        
      }else if(page == 'next'){
        if(this.currentPage != this.totalPage){
          this.currentPage++
        }
        
      }else if(page == 'last'){
        this.currentPage = this.totalPage

      }else if(!isNaN(Number(page))){
        this.currentPage = page
      }else{
        console.log('there are something wrong in onChangePage method.')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .smaller{
    font-size: 12px;
  }
  .totalPageNum{
    display: inline-block;
    margin: 20px 0;
    vertical-align: top;
  }
</style>
