<template>
	<div class="wrapper">
		<swiper>
		    <!-- slides -->
		    <swiper-slide v-for="item in list" :key="item.id" v-if="list.length">
			    <img class="swiper-img"  :src="item.imgUrl">
		    </swiper-slide>

		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  </div>
</template>

<script>
	export default{
		name:"HomeSwiper",
		props:{
			list:Array
		},
		data(){
			return{
				swiperOption:{
					pagination:".swiper-pagination",
					loop:true
				}
			}
		},
		computed:{
			showSwiper(){
				return this.length?true : false
			}
		}
	}
</script>

<style lang="stylus" scoped>
// 样式穿透
		.wrapper >>> .swiper-pagination-bullet-active
			background:#fff !important
		.swiper-img
			width:100%
</style>