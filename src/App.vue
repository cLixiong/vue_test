<template>
  <div id="app">
	  <!-- header -->
    <mt-header fixed title="Vue项目实例"></mt-header>


	<!-- main -->
	<transition>
		<router-view></router-view>
	</transition>
    
	

	<!-- footer -->
    <nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item" to="/clxIndex">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link class="mui-tab-item" to="/clxHuiyuan?id=10&name=李四">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">会员</span>
		</router-link>
		<router-link class="mui-tab-item" to="/clxBuycar">
			<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{buyNum}}</span></span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link class="mui-tab-item" to="/clxSearch/10">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
           return{
			   buyNum:0
		   }
        },
}
</script>

<style>
 #app{
   padding-top: 40px;
   /* 加 ↓ 作用：动画时候不出现滚动条 */
   overflow-x: hidden;
 }
 .v-enter{
	opacity: 0;
 	transform: translateX(100%)
 }
 .v-leave-to{
	 opacity: 0;
	transform: translateX(-100%);
	position: absolute;
 }
 .v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
 }
</style>
