import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from '@/router/index'
import PostsView from '@/views/PostsView.vue'
import HomeView from '@/views/HomeView.vue'

// Mock de $router.push
jest.mock('index', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

describe('PostsView y HomeView integración', () => {
  let router

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/posts', name: 'PostsView', component: PostsView },
        { path: '/', name: 'home', component: HomeView }
      ],
    })
  })

  test('Envía el post desde PostsView y lo muestra en HomeView', async () => {
    // Navegar a la vista Posts
    router.push('/posts')
    await router.isReady()

    const wrapper = mount(PostsView, {
      global: {
        plugins: [router]
      }
    })

    const input = wrapper.find('input')
    const button = wrapper.find('button')

    // Simular escribir en el input
    await input.setValue('Nuevo Post de Prueba')

    // Simular click en el botón
    await button.trigger('click')

    // Verificar que el router.push fue llamado con los parámetros correctos
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: 'home',
      query: { post: 'Nuevo Post de Prueba' }
    })

    // Ahora simulamos la navegación al HomeView para ver si el post aparece
    router.push({ name: 'home', query: { post: 'Nuevo Post de Prueba' } })
    await router.isReady()

    const homeWrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    // Verificamos que el post se muestra correctamente en HomeView
    expect(homeWrapper.find('.post-color').text()).toContain('Nuevo Post de Prueba')
  })
})
