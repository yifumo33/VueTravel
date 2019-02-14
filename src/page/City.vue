<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
	</div>
</template>


<script>
	import CitySearch from './city-components/Search'
	import CityHeader from './city-components/CityHeader'
	export default{
		 name:"City",
		 components:{
		 	CityHeader,
		 	CitySearch
		 }
	}

</script>


<style lang="styl">
	
</style>