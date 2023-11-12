<template >
  <Bar :data="weeklyData" :options="options" />
</template>
    
    <script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { weeklyData } from "../data/weekly";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>