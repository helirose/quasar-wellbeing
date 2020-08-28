<template>
  <q-page class="flex flex-center home">
  	<header>Header stuff here</header>
  	<q-btn v-for="recorder in this.recorders" class="homeBtn vertical-middle" :label="recorder.label" :to="/recorder/ + recorder.route"></q-btn>
  </q-page>
</template>

<script>
	export default {
		data: function() {
			return {
				recorders: [{
					label: 'Mood',
					icon: '',
					route: 'mood'
				},
				{
					label: 'Pain',
					icon: '',
					route: 'pain'
				},
				{
					label: 'Energy',
					icon: '',
					route: 'energy'
				}]
			}
		}
	}
</script>
