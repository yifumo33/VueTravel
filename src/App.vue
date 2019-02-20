<template>
  <div id="app">
	<keep-alive exclude="Detail">
	    <router-view/>
	    <!-- router-view显示的是当前路由地址对应的路由 -->
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
