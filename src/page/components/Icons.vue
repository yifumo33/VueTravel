<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) in pages" :key="index">	
				<div class="icon-line">
					<div class="icon"   v-for="(item,index) in page" :key="item.id">
						<img :src="item.imgUrl" >
						<p>{{item.des}}</p>
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
		data(){
			return{
				iconList:[{
					id:"001",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"002",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"003",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"004",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"005",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"006",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"007",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"008",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"009",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"010",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"011",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"012",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"013",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"014",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"015",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				},{
					id:"016",
					imgUrl:"https://i.loli.net/2019/02/12/5c62808f3bc51.png",
					des:"钱包"
				}]
			}
		},
		computed:{
			pages () {
				const pages = []
				this.iconList.forEach((item,index)=>{
					const page = Math.floor(index / 8)

					if(!pages[page]){
						pages[page]=[]
					}

					console.log(page + ">>>>" + index)

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
			float:left
			width:25%
			img
				width:100%
			p 
				text-align:center	
				color:#ccc
				ellipsis()
	
			
</style>