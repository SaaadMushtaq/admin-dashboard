import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const productData = ref([
    {
      id: 1,
      name: "Laptops",
      description: "Best laptop in god damned world",
      category: "Electronics",
      price: 1200,
      image: "https://picsum.photos/400/400/?image=20",
      stock: 20,
    },
    {
      id: 2,
      name: "Phones",
      description: "Best phones in god damned world",
      category: "Connectivity",
      price: 600,
      image: "https://picsum.photos/400/400/?image=20",
      stock: 10,
    },
    {
      id: 3,
      name: "PC",
      description: "Best PCs in god damned world",
      category: "Electronics",
      image: "https://picsum.photos/400/400/?image=20",
      price: 1400,
      stock: 15,
    },
    {
      id: 4,
      name: "XBox",
      description: "Best XBox in god damned world",
      category: "Gaming",
      price: 2600,
      image: "https://picsum.photos/400/400/?image=20",
      stock: 5,
    },
  ]);

  function addProduct(product) {
    productData.value = [...productData.value, product];
  }

  return { productData, addProduct };
});
