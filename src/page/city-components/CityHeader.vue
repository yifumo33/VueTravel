<template>
	<div>
		<div class="header">
			<router-link to="/">
				<span class="iconfont backicon back">&#xe624;</span>
			</router-link>
			城市选择

		</div>

	</div>
</template>


<script>
	export default{
		 name:"CityHeader"
	}

</script>


<style lang="stylus" scoped>
@import '~style/varibles.styl'

	.header
		height:.86rem
		line-height:$headerHeight
		text-align:center
		color:#fff
		padding:.1rem
		background:$bgColor
		.back
			float:left
			color:#fff
			font-size:.5rem
	
</style>