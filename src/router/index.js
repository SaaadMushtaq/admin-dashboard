import { createRouter, createWebHistory } from "vue-router";
import RevenueAnalysis from "../views/RevenueAnalysis.vue";
import InventoryManagement from "../views/InventoryManagement.vue";
import ProductRegistration from "../views/ProductRegistration.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "RevenueAnalysis",
      component: RevenueAnalysis,
    },
    {
      path: "/inventory-management",
      name: "InventoryManagement",
      component: InventoryManagement,
    },
    {
      path: "/product-registration",
      name: "ProductRegistration",
      component: ProductRegistration,
    },
  ],
});

export default router;
