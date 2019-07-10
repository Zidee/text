<template>
  <div id="app">
    <router-view/>
		<BottonTab></BottonTab>
  </div>
</template>

<script>
// @ is an alias to /src
import BottonTab from '@/components/common/botton_tab'

export default {
  name: 'home',
  components: {
    BottonTab
  }
}
</script>


<style lang="scss">
* {
	border: 0px;
	margin: 0px;
	padding: 0px;
}
a {
	text-decoration: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
