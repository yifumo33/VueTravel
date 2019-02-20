<template>
	<div>
		<Header ></Header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
		hello world	

	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeWeekend from './components/Weekend.vue'	
	import axios from 'axios'
	export default{
	name:"Home",
	components:{
			Header,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		methods:{
			getHomeInfo(){
				axios.get('VueTravel/static/mock/index.json').then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				this.city = res.data.city
				console.log(res.data)
				const data = res.data.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		},
		data(){
			return{
				city:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]

			}
		},
		mounted(){
			this.getHomeInfo()
		}
	}
</script>

<style>

</style>