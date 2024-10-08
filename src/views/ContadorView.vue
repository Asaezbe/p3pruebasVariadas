<template>
  
  <h2 class="titulo-principal">{{ tituloPorDefecto }}</h2>
  <p class="counter">{{ contador }}</p>

  <div>
    
    <button class="btn primary incrementar" v-on:click="incrementar">+1</button>
    <button class="btn warning disminuir" v-on:click="disminuir">-1</button>
   
  </div>
</template>

 


<script>
import Contador from '../../store/index';  // Importa el script desde la nueva ruta

export default {
  name: 'ContadorView',
  mixins: [Contador],  // Mezcla el componente Contador en este componente
};
</script>




<style>
.titulo-principal {
  font-weight: 500;
  color: blueviolet;
}

.btn {
  border-radius: 1rem;
  margin: 0 5px;
  width: 100px;
  padding: 5px;
  font-size: 1rem;
}
.primary {
  background-color: rgb(77, 77, 231);
  color: rgb(255, 255, 255);
}
.counter {
  font-size: 36px;
}

.warning {
  background-color: rgb(230, 53, 53);
  color: rgb(255, 255, 255);
}
</style>