<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item" v-for="item in recommendList"   border :key="item.id">
				
					<img   :src="item.imgUrl" class="item-img">
				
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"HomeRecommend",
		data(){
			return{
				recommendList:[{
					id:'001',
					imgUrl:"https://img1.qunarzz.com/p/tts7/1809/b8/bb9c4c34be421802.jpg_r_240x160x90_c114072e.jpg",
					title:"俄罗斯+阿塞拜疆2国10日游",
					desc:"感受斯拉夫民族的热情"

				},{
					id:'002',
					imgUrl:"https://img1.qunarzz.com/p/tts7/1811/6c/74e73162401a8b02.jpg_r_240x160x90_32a723f7.jpg",
					title:"日本东京大阪经典7日+海航直飞+自由活动",
					desc:"感受东瀛日本的风土人情"

				},{
					id:'003',
					imgUrl:"https://img1.qunarzz.com/vs_ceph_vs_tts/78f74518-64bd-4f82-a542-1e89344bee9a.jpg_r_240x160x90_0854e2e5.jpg",
					title:"错峰推荐！一价全含❀德法意瑞12-13天双宫+双游船",
					desc:"欧洲浪漫情怀之旅 感受文艺复兴的辉煌时代"

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