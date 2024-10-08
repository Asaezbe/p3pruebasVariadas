<template> <!--este es el Parent-->
 
    <div class="home">

    <h1>Mira lo nuevo</h1>
    <p v-if="post" class="post-color">Post recibido: {{ post }} </p>
    <p v-else>No hay posts enviados.</p>
  </div>

  
</template>

<script>


export default {
  name: "HomeView",
  computed: {
    post() {
      return this.$route.query.post || "";  // Obtener el post desde query
    }
  }
};
</script>

<style scoped>
.post-color {
  color:darkgreen;
  font-size: xx-large; /* Color del texto */
  font-weight:600;  /* Tamaño de la fuente */
}
</style>
