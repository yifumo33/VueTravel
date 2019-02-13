<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="item in list"   border :key="item.id">
				
				<img   :src="item.imgUrl" class="item-img">					
				
				
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"HomeWeekend",
		props:{
			list:Array
		},
		data(){
			return{

			}
		}
	}


</script>

<style lang="stylus" scoped>
	@import '~style/mixins.styl'
	.recommend-title
		padding-left:.2rem
		margin-top:.2rem
		line-height:.8rem
		background:#ccc
		color:#fff
	.item
		border:1px solid #fff
		box-sizing:border-box
		display:flex
		justify-content:space-between
		flex-direction:column
		padding:.1rem
		.item-img
			width:100%
			
		.item-info
			margin-left:.3rem
			flex:1
			display:flex
			flex-direction:column
			justify-content:space-between
			min-width:0	
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc	
				ellipsis()
			.item-button
				line-height:.44rem
				width:2.54rem
				background: #ff9300
				padding:0 .1rem
				border-radius: .06rem
					
</style>