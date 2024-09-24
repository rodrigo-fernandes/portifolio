import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experiencia from '@/views/Experiencia.vue'
import Projeto from '@/views/Projeto.vue'
import Educacao from '@/views/Educacao.vue'
import Contato from '@/views/Contato.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/experiencia',
      component: Experiencia
    },
    {
      path: '/projeto',
      component: Projeto
    },
    {
      path: '/educacao',
      component: Educacao
    },
    {
      path: '/contato',
      component: Contato
    }
  ]
})

export default router;
