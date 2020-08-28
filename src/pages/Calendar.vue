<template>
  <q-page class="flex flex-center bg-indigo-8">
  	<q-header elevated class="bg-indigo-10 no-shadow">
        <q-toolbar class="flex flex-center">
        	<q-btn class="col-3" :icon="ionChevronBackCircleOutline" @click="this.backMonth"></q-btn>
        	<q-toolbar-title class="col-6">{{this.monthText}} {{this.year}}</q-toolbar-title>
        	<q-btn class="col-3" :icon="ionChevronForwardCircleOutline" @click="this.forwardMonth"></q-btn>
        </q-toolbar>
    </q-header>
	<table class="calendar text-blue-grey-1">
		<thead>
			<tr>
				<th v-for="day in this.daysOfWeek">{{day.shortDay}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="week in this.weeksOfMonth">
				<td v-for="day in week">
					<q-btn :label="day" @click="goToDay(day)"></q-btn>
				</td>
			</tr>
		</tbody>
	</table>
  </q-page>
</template>

<script>

import { ionChevronBackCircleOutline } from '@quasar/extras/ionicons-v5'
import { ionChevronForwardCircleOutline } from '@quasar/extras/ionicons-v5'

import moment from 'moment'

export default {
	data: function() {
		return {
			today: moment(),
			day: 0,
			month: 0,
			year: '',
			daysInMonth: 0,
			monthText: '',
			firstOfMonth: 0,
			weeksOfMonth: []
		}
	},
	computed: {
		daysOfWeek() {
			let days = []

			for(let i=0; i<7; i++) {
				days[i] = {
					shortDay: moment().day(i).format("ddd"),
					longDay: moment().day(i).format("ddd")
				}
			}

			return days
		}
	},
	methods: {
		backMonth() {
			this.today = moment(this.today).subtract(1, 'months')
			this.setMonth()
		},
		forwardMonth() {
			this.today = moment(this.today).add(1, 'months')
			this.setMonth()
		},
		goToDay(day) {
			this.$router.push({ name: 'day', params: { year: this.year, month: this.month, day: day }})
		},
		setMonth() {
			this.day = moment(this.today).date()
			this.month = moment(this.today).month()
			this.year = moment(this.today).year()
			this.daysInMonth = moment(this.today).daysInMonth()
			this.monthText = moment(this.today).format("MMMM")
			this.firstOfMonth = moment().month(this.month).date(0).day()
			this.weeksOfMonth = this.getWeeks()
		},
		getWeeks() {
			let days = []

			let weeks = []

			//get all the days to display in this calendar month
			for(let i=0;i<this.firstOfMonth+this.daysInMonth+1;i++) {
				if (i<=this.firstOfMonth) {
					days[i] = '-' //insert logic to display part previous month??
				} else {
					days[i] = i-this.firstOfMonth
				}
			}

			let weekNum = 0

			while(days.length > 0) {
				weeks[weekNum] = days.splice(0,7)
				weekNum++
			}

			//check last item of weeks
			//if its less than 7, fill in the blanks (with blanks)
			for(let i=0;i<7; i++) {
				if(!weeks[weeks.length -1][i]) {
					weeks[weeks.length -1][i] = '-'
				}
			}

			return weeks	
		}
	},
	created() {
    	this.ionChevronBackCircleOutline = ionChevronBackCircleOutline
    	this.ionChevronForwardCircleOutline = ionChevronForwardCircleOutline

    	this.setMonth()
    }
}
</script>

<style lang="scss" scoped>

.calendar {
	table-layout: fixed;
	width: 100%;
	height: 100%;
	border-collapse: collapse;
	text-align: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.calendar thead, .calendar tbody, .calendar tr {
	width: 100%;
}

.calendar th, .calendar td {
	height: 50px;
}

.calendar td {
	border: 1px solid $indigo-5;
}

</style>