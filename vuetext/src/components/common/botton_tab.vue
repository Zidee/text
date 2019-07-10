<template>
	<div class="botton">
		<div class="botton-tab">
			<div class="botton-tab-body"  @click="change(1)">
				<img class="botton-tab-img-index" :src="bottonType == 1 ? homeb : home " alt="" />
				<div class="botton-tab-index-name" :class="{'tab-name-action': bottonType == 1}">
					首页
				 </div>
			</div>
			<div class="botton-tab-body" @click="change(2)">
				<img  class="botton-tab-img-pro" :src="bottonType == 2 ? productb : product " alt="" />
				<div class="botton-tab-index-name" :class="{'tab-name-action': bottonType == 2}">
					产品
				</div>
			</div>
			<div  class="botton-tab-body" @click="change(3)">
				<img class="botton-tab-img-myb" :src="bottonType == 3 ? myb : my " alt="" />
				<div class="botton-tab-index-name" :class="{'tab-name-action': bottonType == 3}">
					我的
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BottonTab',
	data(){
		return{
			home: require('@/img/home.png'),
			homeb: require('@/img/homeb.png'),
			product: require('@/img/product.png'),
			productb: require('@/img/productb.png'),
			my: require('@/img/my.png'),
			myb: require('@/img/myb.png'),
			bottonType:1  //当前所显示页面的标识
		}
	},
	methods:{
		change(items){
			this.bottonType = items;
			if(this.bottonType==1){
				 this.$router.push({
				  path:'/index'
				})
			}
			if(this.bottonType==2){
				 this.$router.push({
				  path:'/product'
				})
			}
			if(this.bottonType==3){
				 this.$router.push({
				  path:'/my'
				})
			}
		}
	},
	created () {
	  this.change(this.bottonType);
	},
};
</script>

<style lang="scss" scoped>
.botton {
	z-index: 1;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height:110px;
	background-color: #FFF;
	border-top: 1PX solid #F2F2F2;
	.botton-tab {
		display: flex;
		justify-content: space-between;
		padding-left: 80px;
		padding-right: 80px;
		padding-top: 15px;
		.botton-tab-body{
			display: flex;
			flex-direction:column;
			align-items:center;
			.botton-tab-index-name{
				margin-top: 8px;
				text-align: center;
				font-size: 28px;
				color: #4E4E4E;
				font-weight: 500;
			}
		}
	}
}
.botton-tab-img-index{
	width: 51px;
	height: 44px;
}
.botton-tab-img-pro{
	width: 45px;
	height: 44px;
}
.botton-tab-img-myb{
	width: 44px;
	height: 44px;
}
.tab-name-action{
	color: #4456D8!important;
}
</style>
