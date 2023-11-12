<template>
  <div class="revenue-analysis-container">
    <h1>Revenue Analysis</h1>
    <div class="realtime-data">
      <h2>Real-time Orders and Sales</h2>
      <div class="realtime-data-card-container">
        <div class="card-container" style="background-color: #f87979">
          <div class="card-content">
            <p class="card-title">Sales</p>
            <p class="card-values">$360,123</p>
            <p class="card-description">Sales are going down bruh</p>
          </div>
          <img class="sales-icon" src="../assets/sales.png" alt="sales" />
        </div>
        <div class="card-container" style="background-color: #36a2eb">
          <div class="card-content">
            <p class="card-title">Total Orders</p>
            <p class="card-values">23,165</p>
            <p class="card-description">People aint ordering shit bruh</p>
          </div>
          <img
            class="sales-icon"
            src="../assets/totalorders.png"
            alt="total Orders"
          />
        </div>
      </div>
      <h2>Sales and Orders Trends</h2>
      <Dropdown :options="options" :content="products ?? []" />
      <div>
        <LineChart class="line-chart-container" />
      </div>
    </div>
    <div>
      <h2>Products</h2>
      <CustomTable :header="columns" :content="productData" />
    </div>
    <h2>Revenue Trends</h2>
    <div>
      <BarGraph class="bar-chart-container" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import LineChart from "../components/LineChart.vue";
import Dropdown from "../components/Dropdown.vue";
import CustomTable from "../components/CustomTable.vue";
import BarGraph from "../components/BarGraph.vue";
import { useProductStore } from "../stores/products";

const products = useProductStore();
const productData = computed(() => products.productData);
const options = ref(["Daily", "Weekly", "Monthly", "Annually"]);

const columns = ref([
  {
    label: "Product Name",
    field: "name",
  },
  {
    label: "Product Category",
    field: "category",
    filterOptions: {
      enabled: true,
      placeholder: "all",
      filterValue: "",
      filterDropdownItems: ["Electronics", "Gaming", "Connectivity"],
      trigger: "enter",
    },
  },
  {
    label: "Description",
    field: "description",
  },
  {
    label: "Price",
    field: "price",
  },
  {
    label: "Stock Level",
    field: "stock",
  },
]);
</script>

<style scoped>
.revenue-analysis-container {
  padding: 0 40px;
}
.realtime-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.realtime-data-card-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.card-container {
  width: 450px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  padding-left: 20px;
  margin: 10px;
  display: flex;
  position: relative;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card-content p {
  padding: 0;
  margin: 0;
}

.card-content .card-title {
  font-size: 24px;
  color: white;
  font-weight: 600;
}

.card-content .card-values {
  font-size: 28px;
  font-weight: bolder;
  color: white;
}

.card-content .card-description {
  font-size: 16px;
  color: white;
  font-weight: 600;
}
.card-container .sales-icon {
  width: 200px;
  height: 200px;
  position: absolute;
  right: 20px;
  top: 30px;
}

.line-chart-container {
  width: 900px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}

.bar-chart-container {
  height: 600px;
}
</style>

