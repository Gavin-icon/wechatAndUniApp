### 星球实战项目
1. 小程序/uniapp中采用<navigator url="" open-type="navigate"></navigator>组件跳转第三方链接时：
	新建一个webview页面，内部书写webview组件：<web-view src=""></web-view>;
	对于一些链接需要转码与解码操作，对应的API是：转码-encodeURI() 解码-decodeURI()
2. 跳转tabbar页面：uni.switchTab({url:url}) , 跳转非tabbar页面：uni.navigateTo() uni.redirectTo() uni.reLaunch() uni.navigateBack()
3. CSS3的瀑布流布局：column-gap: 10px; column-count: 2;
4. uni中跳转到指定位置的方法：①创建查询 let query =uni.createSelectorQuery().in(this) ②跳转query.select('#app').boundingClientRect(data => { uni.pageScrollTo({duration:0, scrollTop: data.top}) }).exec()
5. Vue中组件传递值时数据还没渲染出来怎么办？ 创建一个变量控制组件渲染，数据获取成功后再让组件渲染传值。
6. 多端开发中H5跨域问题：在manifest.json配置：
"H5":{
  "devServer": {
    "port":8000,
    "disableHostCheck": true,
    "proxy": {
      "/api": {
        "target": "http://ts.lagou.uieee.com/api/v2",
        "changeOrgin": true,
        "pathRewrite": {
          "^api": ""
        }
      }
    }
  },
  "title": 'H5开发'
}