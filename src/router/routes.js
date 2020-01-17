
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/Login.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/foragidos', component: () => import('pages/dashboard/Foragidos.vue') },
      { path: '/denuncia', component: () => import('pages/dashboard/Denuncia.vue') },
      { path: '/sugestao', component: () => import('pages/dashboard/Sugestao.vue') },
      { path: '/contato', component: () => import('pages/dashboard/Contato.vue') }
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
