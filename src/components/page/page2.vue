<template>
  <div id="page2">
    
    <div class="nav">
      <ul class="list">
      	<!-- 一级菜单 -->
        <li class="list-left" v-for='item in routes'>
        	<!-- 二级菜单 -->
        	<div v-for='(child,index) in item.children' :key='index'>
        		<!-- 三级菜单 -->
        		<router-link v-for='(child1,index1) in child.children':key='index1' :to="{path:item.path+''+child.path+'/'+child1.path}">
		           {{child1.alias}}
		        </router-link>
        	</div>
          
        </li>
      </ul>
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page2',
   data(){
    return{
      routes:this.$router.options.routes
    }
  }
}
</script>

<style>
#page2 {
 
}
</style>
