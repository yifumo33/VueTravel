<template>
	<div>
		<router-link 
		 to="/" tag="div" 
		 class="header-abs" 
		 v-show="showAbs"
		 >
			<span class="iconfont headerabs-back">&#xe624;</span>
		</router-link>
		<div 
		class="header-fixed"
		v-show="!showAbs"
		:style="opacityStyle"
		>
			<router-link to="/" >
				<span class="iconfont header-fixed-back">&#xe624;</span>
			</router-link>
			景点详情
		</div>
	</div>
</template>


<script>
	export default{
		name:"DetailHeader",
		data(){
			return {
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handleSrcoll(){
				const top = document.documentElement.scrollTop
				if (top > 60 ){
					const opacity = top /140
					
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				}else{
					this.showAbs = true
				}
			}
		},
		mounted (){
			window.addEventListener('scroll',this.handleSrcoll)
		}
	}
</script>


<style lang="stylus" scoped>
@import '~style/varibles.styl'
	.header-abs
		position:absolute
		display:flex
		justify-content:center
		align-items:center
		left:.2rem
		top:.2rem
		width:.8rem
		height:.8rem
		border-radius:.4rem
		background: rgba(0,0,0,.8)
		.headerabs-back
			color:#fff
			font-size:.4rem
			
	.header-fixed
		position:fixed
		height:$headerHeight
		line-height:$headerHeight
		background:$bgColor
		text-align:center
		top:0
		left:0
		right:0
		color:#fff
		padding:.1rem
	
		.header-fixed-back
			float:left
			color:#fff
			font-size:.5rem		
</style>