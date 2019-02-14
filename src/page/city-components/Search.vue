<template>
	<div class="search">
		<input class="searchInput" type="text" placeholder="输入城市名或拼音">
	</div>
</template>

<script>
	export default{
		name:"CitySearch"
	}
</script>


<style lang="stylus" scoped="">
	@import '~style/varibles.styl'
		.search
			padding:.2rem
			background:$bgColor
			display:flex
			justify-content:center
			align-items:center
			.searchInput
				width:100%
				height:.62rem
				lien-height:.62rem
				text-align:center
				border-radius:.06rem
				border:1px solid #ccc
				box-sizing:border-box
				padding:0 .2rem
			color:#666
</style>