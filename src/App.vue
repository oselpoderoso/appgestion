<template>
  <div class="app">
    <h1>Registro de Gastos e Ingresos</h1>
    <Registro @nuevo-registro="agregarRegistro" />
    <ListaRegistros :registros="registros" @eliminar-registro="eliminarRegistro" />
    <Grafico :registros="registros" />
  </div>
</template>

<script>
import Registro from './components/Registro.vue';
import ListaRegistros from './components/ListaRegistros.vue';
import Grafico from './components/Grafico.vue';

export default {
  name: 'App',
  components: {
    Registro,
    ListaRegistros,
    Grafico,
  },
  data() {
    return {
      registros: [],
    };
  },
  methods: {
    agregarRegistro(nuevoRegistro) {
      this.registros.push(nuevoRegistro);
    },
    eliminarRegistro(index) {
      this.registros.splice(index, 1);
    },
  },
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #0056b3;
}

input, select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
}

.registro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.registro input, .registro select {
  flex: 1;
  margin-right: 10px;
}

.aviso {
  color: red;
}
</style>
