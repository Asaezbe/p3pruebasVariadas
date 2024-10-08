export default {
    name: 'Contador',
    props: {
      titulo: String,
      inicio: {
        default: 0
      },
    },
    data() {
      return {
        contador: this.inicio
      };
    },
    methods: {
      incrementar() {
        this.contador++;
      },
      disminuir() {
        this.contador--;
      }
    },
    computed: {
      tituloPorDefecto() {
        return this.titulo || 'Contador';
      }
    }
  };
  