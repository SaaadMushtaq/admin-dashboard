<template >
  <Line :data="selectedData" :options="options" />
</template>
  
  <script setup>
import { computed } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { weeklyData } from "../data/weekly";
import { annualData } from "../data/anually";
import { dailyData } from "../data/daily";
import { monthlyData } from "../data/monthly";
import { useFilterOptionStore } from "../stores/filterOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const filterOption = useFilterOptionStore();
const selectedValue = computed(() => filterOption.selectedOption);

const selectedData = computed(() => {
  if (selectedValue.value === "Weekly") {
    return weeklyData;
  } else if (selectedValue.value === "Monthly") {
    return monthlyData;
  } else if (selectedValue.value === "Annually") {
    return annualData;
  } else {
    return dailyData;
  }
});
</script>