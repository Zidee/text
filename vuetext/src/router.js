import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Index from './components/pages/index.vue'
import My from './components/pages/my.vue'
import Product from './components/pages/product.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'App',
			component: App
		},
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			path: '/my',
			name: 'my',
			component: My
		},
		{
			path: '/product',
			name: 'product',
			component: Product
		},

	]
})
