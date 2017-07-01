<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
   <input type="text" v-model='newItem' v-on:keyup.enter='addNew' />
   
   <ul v-for='item in list' v-bind:class='{isfalished : item.isFish}'>
   		<li v-on:click='toggleClick(item)'>{{item.list1}}</li>
   	
   </ul>
   <component-a></component-a>
  </div>
</template>

<script>
import Store from './store'
import componentA from './components/compentA'


export default {
  name: 'app',
  data () {
  	return {
  		list:[
  			
  		],
  		newItem: '' 	
  		
  	}
  
  },
	components: {componentA},
	  //监控属性的变化
	watch: {
		list:{
			handler: function(list){
	
					Store.save(list)
					
			},
			deep: true
			
		}
	},
   
  methods: {
  	toggleClick: function(item){
  		item.isFish = !item.isFish
  		
  	},
  	addNew: function(){
  			this.list.push({
  					'list1': this.newItem,
  					'isFish': false
  				
  			});
  			
  			this.newItem = '';
  	
  	}  	
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.isfalished{
	text-decoration: underline;
}
</style>
