<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrap">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
					<div class="button-list">
							<div 
							class="button-wrap" 
							v-for="item in hot " 
							:key= "item.id"
							@click="handleCityClick(item.name)"
							>
								<div class="button">{{item.name}}</div>
							</div>
					</div>

			</div>
			<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item"
					 v-for = "innerItem in item"
					 :key = "innerItem.id"
					 @click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import { mapState, mapMutations } from 'vuex'
	export default{
		name:"CityList",
		mounted(){
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		computed:{
			//这里的city是state中的city
			...mapState({
				currentCity:'city'
			})
		},
		methods:{
			handleCityClick(city){
				// this.$store.commit('changeCity',city) 这是旧的写法
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		watch:{
			letter(){
				if(this.letter){
				const element = this.$refs[this.letter][0]	
				this.scroll.scrollToElement(element)
				}
			}
		},
		props:{
			hot:Array,
			cities:Object,
			letter:String
		}
	}
</script>


<style lang="stylus" scoped="">
	@import '~style/varibles.styl'
	.list
		overflow:hidden
		position: absolute
		top:2rem
		left:0
		right:0
		bottom:0
		.title
			line-height:.54rem
			background:#eee
			font-size:.26rem
			padding-left:.2rem
			color:#666
		.button-list
			padding:.1rem .6rem .1rem .1rem
			overflow:hidden
			.button-wrap
				float:left
				width:33.3%
				.button
					text-align:center
					padding:.1rem 0
					margin:.2em
					border:.02rem solid #ccc
					border-radius:.06rem
		.item-list
			padding:0 .2rem .2rem .2rem
			.item
				line-height:.76rem
				color:#666
				border-bottom:solid #ccc 1px







</style>