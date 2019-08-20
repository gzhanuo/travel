<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption"> 
				<swiper-slide v-for="(item, index) in imgs" :key="index">
					<img class="gallery-img" :src="item">
				</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'commonGallary',
	props: {
		imgs: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el:	'.swiper-pagination',
					type: 'fraction'
				},
				observer:true,
				observeParents:true
			}
		}
	},
	methods: {
		handleGallaryClick () {
			this.$emit('close')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow inherit 
	.container
		display flex
		flex-direction column
		justify-content center
		position fixed
		top 0
		bottom 0
		left 0
		right 0
		background #000
		z-index 99
		.wrapper
			width 100%
			height 0
			padding-bottom 100%
			.gallery-img
				width 100%
			.swiper-pagination
				color #ffffff
				bottom -1rem
</style>