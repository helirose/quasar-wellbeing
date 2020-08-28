<template>
  <q-layout view="hHh lpR fFf">
	<q-page-container>
      <!-- <router-view></router-view> -->
		<q-page class="flex flex-center home bg-indigo-8">

		</q-page>
		</q-page-container>
	</q-layout>
</template>

<script>

export default {
	props: [], //get props from URL for the day month and year
	data: function() {
		return ''
	},
	methods: {
		getEntries() {
			//Axios.get? get from local storage?
		}
	}
}

</script>