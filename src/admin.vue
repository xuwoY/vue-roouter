<template>
  <div id="admin">
    <div class="nav">
      <ul class="list">
        <li class="list-left" v-for='item in routes'>
          <router-link v-for='(child,index) in item.children' :key='index' :to="{path:item.path+''+child.path}">
            {{child.alias}}
          </router-link>
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
  name: 'admin',
  data(){
    return{
      routes:this.$router.options.routes
    }
  }
}
</script>

<style>
#admin {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
.nav{
  width: 100%;
  height: 100%;
  background-color: #ccc;
  display: flex;
}
.list{
  width:300px;
  height: 100%;
  background-color: yellow;
}
.list-left{
  width: 100%;
  height: 40px;
  background-color: pink;
  list-style: none;
}
a{
  display: block;
  width:300px;
  height: 100%;
  text-decoration: none;
}
.content{
  flex: 1;
  height: 100%;
}
</style>
