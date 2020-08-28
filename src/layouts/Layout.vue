<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer class="bg-indigo-10 text-blue-grey-1">
        <q-tabs v-model="tab">
          <q-route-tab name="home" label="Home" :icon="ionHomeOutline" to="/" exact/>
          <q-route-tab name="calendar" label="Calendar" :icon="ionCalendarOutline" to="/calendar" exact/>
          <q-route-tab name="graphs" label="Graphs" :icon="ionBarChartOutline" to="/graphs" exact/>
          <q-route-tab name="settings" label="Settings" :icon="ionSettingsOutline" to="/settings" exact/>
        </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>

import { ionHomeOutline } from '@quasar/extras/ionicons-v5'
import { ionCalendarOutline } from '@quasar/extras/ionicons-v5'
import { ionBarChartOutline } from '@quasar/extras/ionicons-v5'
import { ionSettingsOutline } from '@quasar/extras/ionicons-v5'

export default {
  data() {
    return {
    }
  },
  created() {
    this.ionHomeOutline = ionHomeOutline
    this.ionCalendarOutline = ionCalendarOutline
    this.ionBarChartOutline = ionBarChartOutline
    this.ionSettingsOutline = ionSettingsOutline
  }
}
</script>