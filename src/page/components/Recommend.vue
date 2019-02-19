<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
				
				<router-link
				tag="li"
				class="item" 
				v-for="item in list"   
				border 
				:key="item.id"
				:to=" '/detail/' + item.id "
				>
					<img   :src="item.imgUrl" class="item-img">
					<div class="item-info">
						<p class="item-title">{{item.title}}</p>
						<p class="item-desc">{{item.desc}}</p>
						<button class="item-button">查看详情</button>
					</div>
				</router-link>
			
		</ul>
	</div>
</template>

<script>
	export default{
		name:"HomeRecommend",
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
		height:1.9rem
		padding:.1rem
		.item-img
			height:1.7rem
			width:2.1rem
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