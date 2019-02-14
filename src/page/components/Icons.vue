<template>
	<div class="icons" >
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) in pages" :key="index" >	
				<div class="icon-line">
					<div class="icon"   v-for="(item,index) in page" :key="item.id" v-if="list.length">
						<img :src="item.imgUrl" >
						<p>{{item.desc}}</p>
					</div>
				</div>		
			</swiper-slide>
			
		</swiper>
	</div>
</template>

<script>
	export default{
		name:"HomeIcons",
		methods:{
	
		},
		props:{
			list:Array
		},
		data(){
			return{
				swiperOption:{
					pagination:".swiper-pagination"
				}
			}
		},
		computed:{
			pages () {
				const pages = []
				this.list.forEach((item,index)=>{
					const page = Math.floor(index / 8)

					if(!pages[page]){
						pages[page]=[]
					}


					pages[page].push(item)
				})
				return pages
			}
		},
	}
</script>

<style lang="stylus">
	@import '~style/mixins.styl'
	.icon-line
		.icon
			box-sizing:border-box
			padding:.1rem
			float:left
			width:25%
		
			img
				width:100%
			p 
				margin-top:.2rem
				text-align:center	
				color:#ccc
				ellipsis()
	
			
</style>