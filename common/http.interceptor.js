const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		// #ifdef H5
		baseUrl: '/api',
		// #endif
		// #ifndef H5
		baseUrl: 'http://ts.lagou.uieee.com/api/v2',
		// #endif
		loadingText: '努力加载中~',
		loadingTime: 800,
		// 设置自定义头部content-type
		// header: {
		// 	'content-type': 'xxx'
		// }
		// ......
	});
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 对拦截的config进行配置
		// const token = uni.getStorageSync('token');
		// config.header.token = token;
		const token = uni.getStorageSync('token');
		config.header.Authorization = 'Bearer ' + token;
		config.header.Accept = 'application/json'

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		// if (config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
	}
	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		return res;
	}
}

export default {
	install
}
