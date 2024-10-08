<template> <!--este es el Child-->
  <div class="posts">
    <h1>Vista de Posts</h1>
    <h2>Ingresa un nuevo post para que se muestre en el Home</h2>
    <input  v-model="newPost" placeholder="ingresa un nuevo post"/>
    <button  @click="submitPost">Enviar nuevo post</button>
  </div>
</template>

<script> 
export default {
  name: "PostsView",
  data() {
    return {
      newPost: "" // El post que se ingresa en el input
   
    };
  },
  methods: {
    submitPost() {
      this.$router.push({ name: 'home', query: { post: this.newPost } }); // Navegamos al home con el post en query
      this.newPost = ""; // Limpiamos el input después de enviar el post
    }
  }
};

</script>

<style scoped>
h2 {
  color:darkgreen;
}
</style>
