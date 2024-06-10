<template>
    <div class="registro">
      <input type="text" v-model="monto" placeholder="Monto" @input="validarNumero">
      <select v-model="tipo">
        <option value="">Seleccionar tipo</option>
        <option value="Gasto">Gasto</option>
        <option value="Ingreso">Ingreso</option>
      </select>
      <input type="date" v-model="fecha">
      <button @click="agregarRegistro">Agregar</button>
      <button @click="cancelar">Cancelar</button>
      <p v-if="!fechaSeleccionada" class="aviso">Por favor, selecciona una fecha</p>
      <p v-if="!tipoSeleccionado" class="aviso">Por favor, selecciona un tipo</p>
      <p v-if="!montoValido" class="aviso">Por favor, introduce un monto válido</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        monto: '',
        tipo: '',
        fecha: '',
        fechaSeleccionada: true,
        tipoSeleccionado: true,
        montoValido: true
      };
    },
    methods: {
      agregarRegistro() {
        if (this.fecha === '') {
          this.fechaSeleccionada = false;
        } else if (this.tipo === '') {
          this.tipoSeleccionado = false;
        } else if (this.monto === '') {
          this.montoValido = false;
        } else {
          const nuevoRegistro = {
            tipo: this.tipo,
            monto: this.monto,
            fecha: this.fecha
          };
          this.$emit('nuevoRegistro', nuevoRegistro);
          // Limpiar los campos después de agregar el registro
          this.monto = '';
          this.fecha = '';
          this.fechaSeleccionada = true;
          this.tipo = '';
          this.tipoSeleccionado = true;
          this.montoValido = true;
        }
      },
      cancelar() {
        // Limpiar los campos si se cancela
        this.monto = '';
        this.fecha = '';
        this.fechaSeleccionada = true;
        this.tipo = '';
        this.tipoSeleccionado = true;
        this.montoValido = true;
      },
      validarNumero(event) {
        // Expresión regular para aceptar solo números naturales
        const regex = /^\d*$/;
        if (!regex.test(event.target.value)) {
          // Eliminar cualquier caracter no numérico
          this.monto = event.target.value.replace(/\D/g, '');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .registro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .registro input,
  .registro select {
    flex: 1;
    margin-right: 10px;
    
  }
  .registro button {
    background-color: #000000;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }
  .aviso {
    color: red;
  }
  </style>
  