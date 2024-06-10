<template>
    <div class="grafico">
      <h2>Comportamiento de ingresos y gastos:</h2>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  
  export default {
    name: 'Grafico',
    props: {
      registros: Array,
    },
    mounted() {
      Chart.register(...registerables);
      this.renderChart();
    },
    watch: {
      registros: {
        handler() {
          this.renderChart();
        },
        deep: true,
      },
    },
    methods: {
      renderChart() {
        const registrosOrdenados = this.registros.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        const fechasUnicas = [...new Set(registrosOrdenados.map(registro => registro.fecha))];
        const ingresosPorFecha = this.getMontosPorFecha(registrosOrdenados, 'Ingreso', fechasUnicas);
        const gastosPorFecha = this.getMontosPorFecha(registrosOrdenados, 'Gasto', fechasUnicas);
  
        const ctx = this.$refs.chartCanvas.getContext('2d');
        if (this.chart) {
          this.chart.destroy();
        }
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.getChartData(fechasUnicas, ingresosPorFecha, gastosPorFecha),
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      },
      getMontosPorFecha(registros, tipo, fechasUnicas) {
        const montosPorFecha = new Array(fechasUnicas.length).fill(0);
        registros.forEach((registro) => {
          const index = fechasUnicas.indexOf(registro.fecha);
          if (registro.tipo === tipo && index !== -1) {
            montosPorFecha[index] += parseFloat(registro.monto);
          }
        });
        return montosPorFecha;
      },
      getChartData(fechas, ingresos, gastos) {
        return {
          labels: fechas,
          datasets: [
            {
              label: 'Ingresos',
              data: ingresos,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
              label: 'Gastos',
              data: gastos,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .grafico {
    margin-top: 20px;
    max-width: 100%;
  }
  canvas {
    width: 100%;
    max-height: 400px;
    height: 100%;
  }
  </style>
  