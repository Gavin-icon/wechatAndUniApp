<template>
	<view v-if="getRequestOK">
		<!-- 顶部导航 -->
		<uni-nav-bar backState="2000" fontColor="#FFF" :titleCenter="false" type="transparent">
			<view slot="left">
				<image class="hicon" src="/static/home.png" mode="aspectFit" @tap="goHome" />
			</view>
		</uni-nav-bar>
		<uni-nav-bar v-if="navBarShowTag" backState="1000" :titleCenter="false">{{ newsInfo.curTitle }}
		</uni-nav-bar>
		<pic-blur :params="{
				        width:'750rpx',
				        height:'520rpx',
				        image: newsInfo.cover,
				        blur:'xs'
				    }"></pic-blur>
		<view class="model">
			<!-- 标题 -->
			<view class="mtitle">{{newsInfo.title}}</view>
			<view class="info-user">
				<view class="info">
					<text>{{ newsInfo.author }} {{ newsInfo.created_at | timeFormate }} 发布
						{{ newsInfo.views_count }}阅读</text>
				</view>
			</view>
		</view>
		<!-- 资讯详情 -->
		<view class="info-content">
			<!--富文本解析器-->
			<html-parse :content="newsInfo.content" />
		</view>

		<!-- 作者信息 -->
		<view class="info-header">
			<text class="send">{{ newsInfo.created_at | timeFormate }}发布 </text>
			<text>{{ newsInfo.views_count }}阅读</text>
		</view>

		<view class="line" />

		<Comment :oneInfo="newsInfo" type="news" />
	</view>
</template>

<script>
	import picBlur from '@/components/pic-blur/index.vue';
	import htmlParse from '@/components/html-parse/parse.vue';
	import timeFrom from '@/tools/timeFrom.js';
	import Comment from '@/components/comment/index.vue';
	export default {
		data() {
			return {
				newsInfo: {},
				navBarShowTag: false,
				getRequestOK: false
			}
		},
		onPageScroll(ev) {
			if (ev.scrollTop > 100) {
				this.navBarShowTag = true
			} else {
				this.navBarShowTag = false
			}
		},
		components: {
			htmlParse,
			picBlur,
			Comment
		},
		async onLoad(options) {
			let res = await this.$u.api.getNewInfo(options)
			// 对于图片正则检索出来，替换为可识别的html标签
			let conImg = res.content.replace(/@\!\[.*\]\((\d*)\)/g, "<img src='" + this.$u.http.config.baseUrl +
				"/files/" + '$1' + "'/>")
			// 将换行替换为可识别的html
			conImg = conImg.replace(/\s\D\s/g, "<p></p>")
			this.newsInfo = {
					...res,
					curTitle: res.title.length > 11 ? res.title.substring(0, 11) + '...' : res.title,
					cover: this.$u.http.config.baseUrl + '/files/' + res.image.id,
					userId: res.user_id,
					content: conImg,
					views_count: res.hits
				},
				this.getRequestOK = true
		},
		methods: {
			goHome: function() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		},
		filters: {
			timeFormate(timeDate) {
				let Time = new Date(timeDate);
				let timestemp = Time.getTime();
				let t = timeFrom(timestemp, "yyyy年mm月dd日");
				return t;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/components/html-parse/parse.css';

	.hicon {
		height: 36upx;
		width: 36upx;
		padding-left: 30upx;
		padding-top: 10upx;
	}

	.model {
		width: 750upx;
		height: 520upx;
		position: absolute;
		background-color: rgba($color: #364161, $alpha: 0.2);
		z-index: 1;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-end;

		.mtitle {
			margin-top: 20upx;
			width: 700upx;
			margin-left: 25upx;
			font-size: 44upx;
			color: #fff;
			line-height: 64upx;
		}


		.info-user {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin-top: 30upx;
			margin-left: 5upx;
			margin-bottom: 30upx;

			.info {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				justify-content: flex-end;
				align-items: left;
				margin-left: 20upx;
				font-size: 24upx;
				font-weight: bolder;
				color: #fff;
			}
		}
	}


	.info-content {
		width: 680upx;
		text-align: left;
		margin-top: 40upx;
		// #ifdef MP-WEIXIN
		margin-left: 35upx;
		// #endif
		// #ifndef MP-WEIXIN
		margin-left: 0;
		// #endif
	}

	.info-header {
		margin-top: 10upx;
		margin-left: 25upx;
		padding-bottom: 20upx;
		color: #999;
		font-size: 22upx;

		.send {
			margin-right: 20upx;
		}
	}

	.line {
		height: 30upx;
		width: 750upx;
		background-color: #f3f3f3;
	}
</style>
