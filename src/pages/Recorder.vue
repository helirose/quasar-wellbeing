<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    
	</q-layout>
</template>

<script>
	export default {
		data: function() {
			return {
				db: null
			}
		},
		created() {
			this.db = window.sqlitePlugin.openDatabase({
		    	name: 'wellbeing',
		    	location: 'default',
		  	});
		},
		beforeDestroy() {
    		//close database con here?
  		}
	}
</script>