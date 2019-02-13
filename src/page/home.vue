<template>
	<div>
		<Header></Header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		hello world	

	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	export default{
	name:"Home",
	components:{
			Header,
			HomeSwiper,
			HomeIcons
		}
	}
</script>

<style>

</style>