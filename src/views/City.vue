<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list 
			:cities="cities" 
			:hotCities="hotCities"
			:letter="letter"
		></city-list>
		<city-alphabet 
			:cities="cities"
			@change="handleLetterChange"
		></city-alphabet>
	</div>
</template>

<script>
import CityHeader from '../components/CityHeader.vue'
import CitySearch from '../components/CitySearch.vue'
import CityList from '../components/CityList.vue'
import CityAlphabet from '../components/CityAlphabet.vue'
import axios from 'axios'

export default {
	name: 'city',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data() {
		return {
			cities: {},
			hotCities: [],
			letter: ''
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city.json')
				.then(this.handleCItyInfoSucc)
		},
		handleCItyInfoSucc (res) {
			res = res.data
			if(res.ret && res.data) {
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handleLetterChange (letter) {
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>
	
</style>