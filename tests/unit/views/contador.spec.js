import { shallowMount } from '@vue/test-utils';
import ContadorView from '@/views/ContadorView.vue';

describe('Componente ContadorView.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ContadorView, {
      propsData: {
        titulo: 'Mi Contador',
        inicio: 0
      }
    });
  });

  test('Validación de match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('El título debe ser "Mi Contador"', () => {
    const titulo = wrapper.find('.titulo-principal');
    expect(titulo.text()).toBe('Mi Contador');
  });

  test('El contador inicia en el valor correcto', () => {
    const counter = wrapper.find('.counter');
    expect(counter.text()).toBe('0'); // Valor inicial es 1
  });

  test('Incrementar el contador', async () => {
    const botonIncrementar = wrapper.find('.incrementar');
    await botonIncrementar.trigger('click'); // Simula el clic en el botón
    const counter = wrapper.find('.counter');
    expect(counter.text()).toBe('1'); // Después de incrementar, debe ser 1
  });

  test('Disminuir el contador', async () => {
    const botonDisminuir = wrapper.find('.disminuir');
    await botonDisminuir.trigger('click'); // Simula el clic en el botón
    const counter = wrapper.find('.counter');
    expect(counter.text()).toBe('-1'); // Después de disminuir, debe ser 0 (suponiendo que no hay lógica para impedirlo)
  });

 
});
