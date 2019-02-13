<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="item in recommendList"   border :key="item.id">
				
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
		data(){
			return{
				recommendList:[{
					id:'001',
					imgUrl:"http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_r_800x800_645880a7.jpg",
					title:"深圳野生动物园(AAAA景区)",
					desc:"与大自然零距离接触"

				},{
					id:'002',
					imgUrl:"http://img1.qunarzz.com/sight/p0/1901/a6/a6569d2d53c6c637a3.water.jpg_r_800x800_c87a4c30.jpg",
					title:"东部华侨城茶溪谷",
					desc:"喝喝茶"

				},{
					id:'003',
					imgUrl:"http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_r_800x800_25544683.jpg",
					title:"深圳小梅沙海洋世界",
					desc:"小海豚在等着你"

				}]
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