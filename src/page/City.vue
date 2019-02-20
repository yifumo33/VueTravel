<template>
	<div>
		<city-header></city-header>
		<city-search :cities = "cities"></city-search>
		<city-list :cities = "cities" :hot = "hotCities" :letter = "letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>	
	</div>
</template>


<script>
	import axios from 'axios'
	import CitySearch from './city-components/Search'
	import CityHeader from './city-components/CityHeader'
	import CityList from './city-components/list'
	import CityAlphabet from './city-components/Alphabet'
	export default{
		 name:"City",
		 components:{
		 	CityHeader,
		 	CitySearch,
		 	CityList,
		 	CityAlphabet
		 },
		 data(){
		 	return {
		 		cities:{},
		 		hotCities:[],
		 		letter:""
		 	}
		 },
		 methods:{
		 	getCityInfo(){
		 		axios.get('../static/mock/city.json').then(this.handleGetCityInfoSucc)
		 	},
		 	handleGetCityInfoSucc(res){
		 		res = res.data
		 		if(res.ret && res.data){
		 			const data = res.data
		 			this.cities = data.cities
		 			this.hotCities = data.hotCities
		 		}
		 	},
		 	handleLetterChange(letter){
		 		this.letter = letter
		 	
		 	}
		 },
		 mounted(){
		 	this.getCityInfo()
		 }
	}

</script>


<style lang="styl">
	
</style>