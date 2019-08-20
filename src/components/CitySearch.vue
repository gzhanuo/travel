<template>
	<div>
		<div class="search">
			<input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input">	
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li 
					class="search-item border-bottom" 
					v-for="item of list" 
					:key="item.id"
					@click="handleCityClick(item.name)"
				>
					{{ item.name }}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { setTimeout } from 'timers';
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
	name: 'citySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoData() {
			return !this.list.length
		}
	},
	methods: {
		handleCityClick (city) {
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	watch: {
		keyword () {
			if(this.timer) {
				clearTimeout(this.timer)	
			}
			if(!this.keyword) {
				this.list = []
				return
			}
			this.timer = setTimeout(() => {
				const result = []
				for(let i in this.cities) {
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
							result.push(value)
						}
					})
				}
				this.list = result
			}, 100)
		}
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.search);
	}
}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/varibles.styl'
	.search
		height .72rem
		padding 0 .1rem
		background $bgColor
		.search-input
			box-sizing border-box
			padding 0 .1rem
			height .62rem
			line-height .62rem
			width 100%
			text-align center
			border-radius .06rem
			color #666
	.search-content
		position absolute 
		overflow hidden
		top 1.58rem
		left 0
		right 0
		bottom 0
		background #eee
		z-index 1
		.search-item
			color #666
			line-height .62rem
			padding-left .2rem
</style>