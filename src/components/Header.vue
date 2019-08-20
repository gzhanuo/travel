<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont iconleft back-icon"></div>
		</div>
		<div class="header-input">
			<span class="iconfont iconsearch"></span>
			输入城市/景点/游玩主题
			</div>
		<router-link to="/city">
			<div class="header-right">
				{{ this.city }}
				<span class="iconfont iconcaret-down arrow-icon"></span>
			</div>
		</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'homeHeader',
	computed: {
		...mapState(['city'])
	},
}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/varibles.styl'
	.header
		display flex
		height $headerHeight 
		line-height $headerHeight 
		background $bgColor
		color #fff
		.header-left
			width .64rem
			float left
			.back-icon
				text-align center
				font-size .4rem
		.header-input
			flex 1
			background #fff
			height .64rem
			line-height .64rem
			border-radius .05rem
			color #ccc;
			margin-left .2rem
			margin-top .1rem
			padding-left .2rem
		.header-right
			min-width 1.04rem
			padding 0 .1rem
			float right
			text-align center
			color #fff
			.arrow-icon
				font-size .24rem
				margin-left -.04rem
</style>
