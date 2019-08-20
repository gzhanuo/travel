import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/city',
		name: 'city',
		component: City
	}, {
		path: '/detail/:id',
		name: 'detail',
		component: Detail
	}],
	// eslint-disable-next-line no-unused-vars
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
