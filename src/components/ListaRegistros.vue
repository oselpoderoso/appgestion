<template>
    <div>
      <h2>Histórico:</h2>
      <ul>
        <li v-for="(registro, index) in registros" :key="index">
          {{ registro.tipo }} - {{ registro.monto }} - {{ registro.fecha }}
          <button class="eliminar-btn" @click="eliminarRegistro(index)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListaRegistros',
    props: {
      registros: Array
    },
    methods: {
      eliminarRegistro(index) {
        this.$emit('eliminarRegistro', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .eliminar-btn {
    background-color: rgb(51, 51, 51); /* Cambia el color de fondo del botón */
    color: white; /* Cambia el color del texto del botón */
    border: none; /* Quita el borde del botón */
    padding: 5px 10px; /* Ajusta el espaciado interno del botón */
    border-radius: 5px; /* Agrega esquinas redondeadas al botón */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    margin-bottom: 10px;
  }
  
  .eliminar-btn:hover {
    background-color: rgb(0, 0, 0); /* Cambia el color de fondo del botón al pasar el cursor */
  }
  </style>
  