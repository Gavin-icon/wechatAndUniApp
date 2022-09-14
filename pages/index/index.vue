<template>
	<view id="sns">
		<!-- 顶部导航 -->
		<uni-nav-bar v-if="navBarShowTag">
			<view class="tabs-box">
				<view class="one-nav" :class="curIdx === 0 ? 'nav-actived' : '' " @tap="gotoPull(0)">推荐
				</view>
				<view class="one-nav" :class="curIdx === 1 ? 'nav-actived' : '' " @tap="gotoPull(1)">资讯
				</view>
			</view>
		</uni-nav-bar>
		<view class="header-box">
			<!--轮播图-->
			<swiper class="swiper" :current="currentSwiperIdx" circular :indicator-dots="indicatorDots"
				:autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item, index) in swiper" :key="index">
					<navigator open-type="navigate" :url="'/pages/webview/webview?url='+encodeURI(item.data.link)">
						<image class="banner-swiper-img" :src="item.data.image" mode="aspectFill" />
					</navigator>
				</swiper-item>
			</swiper>
			<!--弧形遮罩层-->
			<image class="crile" src="@/static/crile.png" mode="aspectFill"></image>
			<!--两个选项按钮-->
			<view class="card-header">
				<view class="card-one card-left" @tap="gotoTab('/pages/active/active')">
					<image class="img" src="@/static/coffee.png" mode="aspectFill"></image>
					<view class="iright">
						<view class="title">精彩动态</view>
					</view>
				</view>
				<view class="card-one card-right" @tap="gotoTab('/pages/mine/mine')">
					<image class="img" src="@/static/ran.png" mode="aspectFill"></image>
					<view class="iright">
						<view class="title">个人中心</view>
					</view>
				</view>
				<!--Tabs选项卡-->
				<view class="tabs-box">
					<view class="one-nav" :class="curIdx === 0 ? 'nav-actived' : ''" @tap="gotoPull(0)">推荐</view>
					<view class="one-nav" :class="curIdx === 1 ? 'nav-actived' : ''" @tap="gotoPull(1)">资讯</view>
				</view>
			</view>
			<!-- 内容轮播导航实现 -->
			<swiper class="swiper-box" :style="'height:' + swiperSlideHeight" :current="curIdx"
				@animationfinish="swiperSlider">
				<!-- 推荐动态实现 -->
				<swiper-item class="swiper-item sns-now">
					<view class="feeds-box">
						<waterfall-sns v-model="feedsList" ref="waterfall">
							<template v-slot:left="{leftList}">
								<view class="feed-one" v-for="(item, index) in leftList" :key="index">
									<navigator open-type="navigate" :url=" '/subpages/feedInfo?id=' + item.id">
										<image class="feed-img" :src="item.cover" mode="widthFix" :lazy-load="true" />
										<view class="u-line-2 feed-title" v-if="!!item.feed_content">
											{{ item.feed_content }}
										</view>
										<view class="feed-info">
											<view class="iview">
												<image class="avatar" :src=" item.avatar" />
												<text class="name u-line-1">{{ item.name }}</text>
											</view>
											<view class="iview">
												<view class="ilike" @tap.stop="clickLove(item)">
													<image v-if="item.has_like" src="@/static/lover.png"
														class="micon" />
													<image v-else src="@/static/love.png" class="micon" />
													<text class="love-count"
														v-if="item.like_count>0">{{ item.like_count }}</text>
												</view>
											</view>
										</view>
									</navigator>
								</view>
							</template>
							<template v-slot:right="{rightList}">
								<view class="feed-one" v-for="(item, index) in rightList" :key="index">
									<navigator open-type="navigate" :url=" '/subpages/feedInfo?id=' + item.id">
										<image class="feed-img" :src="item.cover" mode="widthFix" :lazy-load="true" />
										<view class="u-line-2 feed-title" v-if="!!item.feed_content">
											{{ item.feed_content }}
										</view>
										<view class="feed-info">
											<view class="iview">
												<image class="avatar" :src=" item.avatar" />
												<text class="name u-line-1">{{ item.name }}</text>
											</view>
											<view class="iview">
												<view class="ilike" @tap.stop="clickLove(item)">
													<image v-if="item.has_like" src="@/static/lover.png"
														class="micon" />
													<image v-else src="@/static/love.png" class="micon" />
													<text class="love-count"
														v-if="item.like_count>0">{{ item.like_count }}</text>
												</view>
											</view>
										</view>
									</navigator>
								</view>
							</template>
						</waterfall-sns>
					</view>
				</swiper-item>
				<!-- 资讯列表实现 -->
				<swiper-item class="swiper-item sns-news">
					<view class="feed-one" v-for="(item, index) in newsList" :key="index">
						<navigator :url="'/subpages/newsInfo?id=' + item.id" class="one-new" open-type="navigate">
							<view class="left">
								<view class="title u-line-2">{{item.title}}</view>
								<view class="uinfo">
									<view class="iview">
										<view class="utime">
											<text class="name">{{ item.author }}</text>
										</view>
									</view>
									<text class="uptime">{{ item.created_at | timeFormate }}发布</text>
								</view>
							</view>
							<view class="right">
								<image class="pic" mode="aspectFill" :src="item.cover" />
							</view>
						</navigator>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<login v-if="!loginState" />
		<goto-share />
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import todoLove from '@/minxins/index.js';
	import timeFrom from '@/tools/timeFrom.js';
	import WaterfallSns from '@/components/waterfall-sns/index.vue';
	export default {
		mixins: [todoLove],
		data() {
			return {
				navBarShowTag: false,
				title: 'Hello',
				indicatorDots: false,
				autoplay: true,
				interval: 2500,
				duration: 500,
				swiper: [],
				curIdx: 0,
				currentSwiperIdx: 0,
				feedsList: [],
				swiperSlideHeight: '1000px',
				swiperSlideFeedsHeight: 0,
				swiperSlideNewsHeight: 0,
				oldFeedsST: 0,
				oldNewsST: 0,
				newsList: []
			}
		},
		components: {
			WaterfallSns
		},
		computed: {
			...mapState(['loginState'])
		},
		onPageScroll(event) {
			if (this.curIdx === 0) {
				this.oldFeedsST = event.scrollTop
			} else {
				this.oldNewsST = event.scrollTop
			}
			if (event.scrollTop > 200) {
				this.navBarShowTag = true
			} else {
				this.navBarShowTag = false
			}
		},
		onPullDownRefresh() {
			this.getAdvert()
			if (this.curIdx === 0) {
				this.$refs.waterfall.clear()
				this.getFeeds()
			} else {
				this.newsList = []
				this.getNews()
			}
		},
		onReachBottom() {
			if (this.curIdx === 0) {
				this.getFeeds()
			} else {
				this.getNews()
			}
		},
		onLoad() {
			this.getAdvert()
			this.getFeeds()
			this.getNews()
			uni.$on('indexLogin', () => {
				this.currentSwiperIdx = 0
				this.feedsList = []
				this.$refs.waterfall.clear()
				this.getFeeds()
			})
			uni.$on('indexUserLogout', () => {
				this.currentSwiperIdx = 0
				this.feedsList = []
				this.$refs.waterfall.clear()
				this.getFeeds()
			})
			uni.$on('indexFeedLoveChange', (item) => {
				this.$refs.waterfall.modify(item.id, 'like_count', item.like_count)
				this.$refs.waterfall.modify(item.id, 'has_like', item.has_like)
			})
			uni.$on('indexFeedsUpdate', () => {
				this.currentSwiperIdx = 0
				this.feedsList = []
				this.$refs.waterfall.clear()
				this.getFeeds()
			})
		},
		filters: {
			timeFormate(timeDate) {
				let Time = new Date(timeDate);
				let timestemp = Time.getTime();
				let t = timeFrom(timestemp, "yyyy年mm月dd日");
				return t;
			}
		},
		methods: {
			async getNews() {
				let data = await this.$u.api.getNews()
				let newsList = data.map(item => {
					return {
						...item,
						cover: this.$u.http.config.baseUrl + '/files/' + item.image.id
					}
				})
				this.newsList = [...this.newsList, ...newsList]
				this.swiperSlideNewsHeight = 95 * this.newsList.length + 'px'
				this.swiperSlideHeight = this.swiperSlideNewsHeight
			},
			async getFeeds() {
				// 文件的基本访问地址： this.$u.http.config.baseUrl + '/files/'
				let data = await this.$u.api.getFeeds()
				let feedsList = data.feeds.map(feed => {
					return {
						...feed,
						cover: this.$u.http.config.baseUrl + '/files/' + feed.images[0]?.file,
						avatar: !!feed.user.avatar ? feed.user.avatar : '/static/nopic.png',
						name: feed.user.name
					}
				})
				this.feedsList = [...this.feedsList, ...feedsList]
				uni.$once('swiperHeightChange', height => {
					this.swiperSlideHeight = height
					this.swiperSlideFeedsHeight = height
				})
			},
			async getAdvert() {
				let data = await this.$u.api.getAdvert()
				data.find(item => item.id === 15).data.image = 'http://ts.lagou.uieee.com/api/v2/files/1228'
				data.find(item => item.id === 9).data.image = 'http://ts.lagou.uieee.com/api/v2/files/1250'
				this.swiper = data
				console.log('swiper', data)
			},
			gotoTab: function(url) {
				uni.switchTab({
					url: url
				})
			},
			// 点击切换首页tab
			gotoPull: function(idx) {
				this.curIdx = idx
				if (idx === 0) {
					this.swiperSlideHeight = this.swiperSlideFeedsHeight
					uni.pageScrollTo({
						duration: 0,
						scrollTop: this.oldFeedsST
					})
				}
				if (idx === 1) {
					this.swiperSlideHeight = this.swiperSlideNewsHeight
					uni.pageScrollTo({
						duration: 0,
						scrollTop: this.oldNewsST
					})
				}
			},
			// 滑动切换首页tab
			swiperSlider: function(ev) {
				if (ev.detail.current === 0) {
					this.swiperSlideHeight = this.swiperSlideFeedsHeight
					uni.pageScrollTo({
						duration: 0,
						scrollTop: this.oldFeedsST
					})
				} else {
					this.swiperSlideHeight = this.swiperSlideNewsHeight
					uni.pageScrollTo({
						duration: 0,
						scrollTop: this.oldNewsST
					})
				}
				this.curIdx = ev.detail.current
			}
		}
	}
</script>

<style lang="scss">
	#sns {
		background-color: #f1f1f1;
	}

	// 推荐、咨询 按钮样式
	.tabs-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 750upx;

		.one-nav {
			width: 120upx;
			color: #9B9B9B;
			font-size: 36upx;
			text-align: center;
			font-weight: blod;

			&.nav-actived {
				color: #0050FF;
			}
		}
	}

	.header-box {
		position: relative;
		left: 0;
		height: 500upx;
		background-color: #f1f1f1;
		z-index: 1;

		// 广告位轮播器相关样式
		.swiper {
			width: 750upx;
			height: 400upx;
			position: absolute;
			left: 0;
			top: 0;
			text-align: center;
			z-index: 1;

			.banner-swiper-img {
				width: 750upx;
				height: 400upx;
				box-shadow: 0 0 2px 0 rgb(188, 188, 188);
			}
		}

		.crile {
			width: 750upx;
			height: 50upx;
			position: absolute;
			left: 0;
			top: 355upx;
			z-index: 9;
		}

		// 新鲜事 活动墙 按钮样式
		.card-header {
			position: absolute;
			left: 0;
			top: 320upx;
			height: 160upx;
			z-index: 99;
			width: 710upx;
			margin-left: 20upx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			align-content: center;

			.card-one {
				width: 328upx;
				height: 96upx;
				border-radius: 49upx;
				background-color: #fff;
				margin: 0 10upx;
				box-shadow: 0 0 2px 0 rgb(188, 188, 188);
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;

				.img {
					width: 44upx;
					height: 44upx;
					margin-left: 50upx;
				}

				.iright {
					margin-left: 30upx;
					text-align: left;
					color: #888;

					.title {
						font-size: 30upx;
						color: #001432;
					}

					.iview {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						align-items: center;
						align-content: center;
						font-size: 20upx;
						margin-top: -5upx;
					}
				}
			}
		}

		// 推荐、咨询 按钮样式
		.tabs-box {
			width: 750upx;
			position: absolute;
			z-index: 1;
			left: 0;
			top: 144upx;
			display: flex;
			flex-direction: row;
			justify-content: center;

			.one-nav {
				height: 80upx;
				width: 110upx;
				color: #9B9B9B;
				font-size: 36upx;
				text-align: center;
				font-weight: blod;

				&.nav-actived {
					color: #0050FF;
				}
			}
		}
	}

	// 此刻 栏目样式\
	.swiper-box {
		background-color: #f1f1f1;
		padding: 60upx 0 40upx;
		position: absolute;
		left: 0;
		top: 460upx;
		width: 100%;

		.sns-now {

			// 动态相关瀑布流样式
			.feeds-box {
				width: 735upx;
				margin-left: 13upx;
				padding-bottom: 20upx;

				.feed-one {
					width: 358upx;
					margin-bottom: 12upx;
					background-color: #FFF;
					border-radius: 20upx;

					position: relative;

					.feed-img {
						width: 358upx;
						height: 300upx;
						border-radius: 10upx;
					}

					.feed-title {
						width: 350upx;
						margin-top: 15upx;
						margin-left: 10upx;
						font-size: 28upx;
						line-height: 40upx;
						color: #001432;
						text-align: left;
					}

					.feed-info {
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: space-between;
						align-items: center;
						align-content: center;
						margin-top: 10upx;
						font-size: 20upx;
						color: #666;
						padding: 0 10upx 16upx;

						.iview {
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							justify-content: space-between;
							align-items: center;
							align-content: center;

							.ilike {
								display: flex;
								flex-direction: row;
								flex-wrap: nowrap;
								justify-content: space-between;
								align-items: center;
								align-content: center;
								height: 60upx;
								padding: 0 10upx;
								background-color: #FFFFFF;
							}
						}

						.avatar {
							margin-right: 10upx;
							height: 40upx;
							width: 40upx;
							border-radius: 50%;
							border: 1upx solid #eee;
						}

						.name {
							max-width: 120upx;
							color: #757474;
						}

						.micon {
							width: 32upx;
							height: 28upx;
						}

						.love-count {
							padding-left: 10upx;
							color: #757474;
						}
					}
				}
			}
		}

		// 轮播页面 资讯
		.sns-news {
			background-color: #fff;
			width: 750upx;

			.one-new {
				width: 700upx;
				height: 74px;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: flex-start;
				align-content: center;
				padding-bottom: 10px;
				padding-top: 10px;
				padding-left: 25upx;
				padding-right: 25upx;
				border-bottom: 1px solid #f1f1f1;

				.left {
					width: 490upx;
					height: 140upx;
					text-align: left;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;

					.title {
						font-size: 30upx;
						line-height: 42upx;
						color: #001432;
						margin-top: 21upx;
					}

					.uinfo {
						width: 490upx;
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: space-between;
						align-items: center;
						align-content: center;
						margin-top: 6upx;
						font-size: 20upx;
						color: #999;

						.utime {
							font-size: 24upx;

							.name {
								max-width: 120upx;
								color: #777;
							}
						}
					}
				}

				.right {
					width: 120upx;

					.pic {
						width: 120upx;
						height: 120upx;
						margin-top: 20upx;
						border-radius: 6upx;
					}
				}
			}
		}
	}
</style>
