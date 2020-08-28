
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/calendar', component: () => import('pages/Calendar.vue') },
      { path: '/graphs', component: () => import('pages/Graphs.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') }
    ]
  },
  {
    path: '/recorder/',
    component: () => import('pages/Recorder.vue'),
    children: [
      { path: '/recorder/mood', component: () => import('pages/recorders/Mood.vue')},
      { path: '/recorder/pain', component: () => import('pages/recorders/Pain.vue')},
      { path: '/recorder/energy', component: () => import('pages/recorders/Energy.vue')}
    ]
  },
  { 
    name: 'day', path: '/day/:year/:month/:day', component: () => import('pages/Day.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
