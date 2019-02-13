<template>
	<div>
		<Header></Header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
		hello world	

	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeWeekend from './components/Weekend.vue'	
	export default{
	name:"Home",
	components:{
			Header,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		}
	}
</script>

<style>

</style>