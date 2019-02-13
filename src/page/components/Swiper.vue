<template>
	<div class="wrapper">
		<swiper>
		    <!-- slides -->
		    <swiper-slide v-for="item in swiperList" :key="item.id">
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
		data(){
			return{
				swiperOption:{
					pagination:".swiper-pagination",
					loop:true
				},
				swiperList:[{
					id:"0001",
					imgUrl:"https://i.loli.net/2019/02/12/5c622bb75c5f7.jpg"
				},{
					id:"0002",
					imgUrl:"https://i.loli.net/2019/02/12/5c622bb75ffa5.jpg"
				},{
					id:"0003",
					imgUrl:"https://i.loli.net/2019/02/12/5c622bb7ebe35.jpeg"
				}]
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