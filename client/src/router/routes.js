
const routes = [
  {
    path: '/',
    component: () => import('layouts/WhiteboardLayout.vue'),
    name: 'main',
    redirect: { name: 'users' },
    children: [
      { path: '/users', name: 'users', component: () => import('pages/Index.vue') },
      { path: '/users/:id', name: 'user/id', component: () => import('pages/User.vue') },
      { path: '/movies', name: 'movies', component: () => import('pages/Movies.vue') },
      { path: '/movie/:id', name: 'movie/id', component: () => import('pages/Movie.vue') }
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
