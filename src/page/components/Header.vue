<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont backicon">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;输入城市\景点\主题</span>
		</div>
		<router-link to='/city'>	
			<div class="header-right">
				{{this.$store.state.city}}<span class="iconfont arrowicon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	import { mapState,mapGetters } from 'vuex'
	export default{
	name:"Header",
	computed:{
		...mapState(['city']),
		...mapGetters(['doubleCity'])
	}

}	
</script>

<!-- 加上scoped 会使样式只在该组件中有效 -->
<!-- 1 rem = html font-size = 50px 这里的font-size是自己确定的 -->
<style lang="stylus" scoped>
	@import '~style/varibles.styl'
	.header
		display:flex
		line-height:$headerHeight
		background:$bgColor
		color:#fff
		.header-left		
			width:.64rem
			float:left
			text-align:center
			.backicon
				font-size:.4rem
		.header-input
			flex:1
			background:#fff
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			margin-left:.2rem
			border-radius:.1rem
			padding-left:.2rem
			color:#ccc
		.header-right
			min-width:1.04rem
			padding:0 .1rem
			float:right
			text-align:center
			color:#fff
			.arrowicon
				margin-left:.05rem
				font-size:.2rem
</style>