<template>
	<div>
		<Header></Header>
		<home-swiper></home-swiper>
		hello world	

	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	export default{
	name:"Home",
	components:{
			Header,
			HomeSwiper
		}
	}
</script>

<style>

</style>