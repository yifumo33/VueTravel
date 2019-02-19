<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img  class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
				<div class="banner-number"><span class="iconfont banner-icon">&#xe634;</span><span class="xxx">39</span></div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleBannerclose"></common-gallary>
	</div>
</template>


<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default{
		name:"DetailBanner",
		components:{
			CommonGallary
		},
		data(){

			return{
				showGallary:false,
				imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
				  "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
				  "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"]
			}	
		},
		methods:{
			handleBannerClick(){
				this.showGallary = true
			},
			handleBannerclose(){
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			color:#fff
			display:flex
			position: absolute
			justify-content:space-around
			left: 0
			right: 0
			bottom: 0
			line-height:.6rem
			background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				font-size:.32rem
				padding:0 .2rem
				flex:1
			.banner-number
				width:.5rem
				margin-left:.14rem
				margin-top:.14rem
				padding:0 .4rem
				line-height:.32rem
				height:.32rem
				border-radius:.2rem
				background:rgba(0,0,0,.8)	
				font-size:.24rem
				display:flex
				justify-content:space-around	
				.banner-icon
					
					font-size:.24rem
				.xxx
					margin-left:.12rem	
</style>