
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/landingpage.vue') },
      { path: '/society', component: () => import('pages/society/society.vue') },
      { path: '/society/:id', component: () => import('pages/society/societypage.vue') },
      { path: '/event', component: () => import('pages/event.vue') },
      { path: '/contact', component: () => import('pages/contact-us.vue') },
      { path: '/donation', component: () => import('pages/donation.vue') },
      { path: 'login', component: () => import('pages/AccountManagement/login.vue') },
      { path: '/register', component: () => import('pages/AccountManagement/register.vue') },
      { path: '/memberlist', component: () => import('pages/members/memberslist') },
      { path: '/member', component: () => import('pages/members/member') },
      { path: '/outstations', component: () => import('pages/outstations/outstationlist') },
      { path: '/youthblog', component: () => import('pages/Blog/youth') },
      { path: 'youthblog/create', component: () => import('pages/Blog/createblog') },
      { path: 'youthblog/:postId', component: () => import('pages/Blog/youthPostDetail') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
