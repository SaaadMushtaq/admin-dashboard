<template>
  <div class="inventory-managment-container">
    <h1>Inventory Managment</h1>

    <CustomTable :header="columns" :content="productData" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CustomTable from "../components/CustomTable.vue";
import { useProductStore } from "../stores/products";

const products = useProductStore();
const productData = computed(() => products.productData);
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

const rows = ref(products);
</script>

<style scoped>
.inventory-managment-container {
  padding: 10px;
  width: 100vw;
}

.products-container {
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  row-gap: 40px;
}
</style>

