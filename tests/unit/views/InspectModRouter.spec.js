import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '@/views/PostsView.vue';
import HomeView from '@/views/HomeView.vue';
import ContadorView from '@/views/ContadorView.vue';

// Define las rutas de tu aplicación
const routes = [
  { path: '/', component: HomeView },
  { path: '/posts', component: PostsView },
  { path: '/contador', component: ContadorView }
];

// Crea una instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Router Tests', () => {
  // Prueba que PostsView se renderiza correctamente
  it('renders PostsView when navigating to /posts', async () => {
    router.push('/posts'); // Navegar a PostsView
    await router.isReady(); // Esperar a que el router esté listo

    const wrapper = mount(PostsView, {
      global: {
        plugins: [router], // Incluir el router en el wrapper
      },
    });

    expect(wrapper.exists()).toBe(true); // Verificar que el componente se ha renderizado
  });

  // Prueba que HomeView se renderiza correctamente
  it('renders HomeView when navigating to /', async () => {
    router.push('/'); // Navegar a HomeView
    await router.isReady(); // Esperar a que el router esté listo

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router], // Incluir el router en el wrapper
      },
    });

    expect(wrapper.exists()).toBe(true); // Verificar que el componente se ha renderizado
  });

  // Prueba que ContadorView se renderiza correctamente
  it('renders ContadorView when navigating to /contador', async () => {
    router.push('/contador'); // Navegar a ContadorView
    await router.isReady(); // Esperar a que el router esté listo

    const wrapper = mount(ContadorView, {
      global: {
        plugins: [router], // Incluir el router en el wrapper
      },
    });

    expect(wrapper.exists()).toBe(true); // Verificar que el componente se ha renderizado
  });
});
