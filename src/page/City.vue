<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-alphabet></city-alphabet>	
	</div>
</template>


<script>
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
		 }
	}

</script>


<style lang="styl">
	
</style>