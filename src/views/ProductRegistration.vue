<template>
  <div class="product-registration-container">
    <h1>Product Registration</h1>
    <div class="input-field-container">
      <input
        class="input-field"
        placeholder="Enter Product Name"
        v-model="name"
      />
      <div class="dropdown-wrapper">
        <div
          @click="handleOpenDropdown"
          :class="
            isDropDownVisible
              ? 'open-dropdown-selected-option'
              : 'dropdown-selected-option'
          "
        >
          {{ category || "Please select a category" }}
        </div>
        <transition name="slide-fade">
          <div class="options-wrapper" v-if="isDropDownVisible">
            <div
              class="option"
              @click="handleOptionSelect(option)"
              v-for="option in options.filter((option) => option !== category)"
              :key="option"
            >
              {{ option }}
            </div>
          </div>
        </transition>
      </div>
      <!-- <input class="input-field" placeholder="Category..." v-model="category" /> -->
      <input
        class="input-field"
        placeholder="Description"
        v-model="description"
      />
      <input
        class="input-field"
        placeholder="Enter Product Price"
        type="number"
        min="1"
        v-model="price"
      />
      <input
        class="input-field"
        placeholder="Enter Product Stock"
        type="number"
        min="1"
        v-model="stock"
      />
    </div>
    <div class="upload-file-container">
      <input type="file" id="uploadBtn" hidden @change="handleFileChange" />
      <label class="upload-image-btn" for="uploadBtn">Upload Image</label>
      <img
        v-if="imageUrl"
        class="uploaded-image"
        :src="imageUrl"
        alt="productImage"
      />
    </div>

    <button
      :disabled="
        !name || !category || !description || !price || !stock || !imageUrl
      "
      class="submit-btn"
      @click="handleSubmit"
    >
      Submit
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Swal from "sweetalert2";
import { useProductStore } from "../stores/products";

const products = useProductStore();
const productData = computed(() => products.productData);
const name = ref("");
const category = ref("");
const description = ref("");
const price = ref(null);
const stock = ref(null);
const imageUrl = ref(null);
const isDropDownVisible = ref(false);

const options = ref(["Electronics", "Food", "Clothes"]);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  const product = {
    id: productData.length + 1,
    name: name.value,
    description: description.value,
    category: category.value,
    price: price.value,
    image: imageUrl.value,
    stock: stock.value,
  };
  products.addProduct(product);
  Swal.fire({
    timer: 3000,
    icon: "success",
    title: "Success!",
    text: "Product Added Successfully",
  });
  name.value = "";
  description.value = "";
  category.value = "";
  price.value = null;
  image.value = null;
  stock.value = null;
};

function handleOptionSelect(option) {
  category.value = option;
  handleOpenDropdown();
}
function handleOpenDropdown() {
  isDropDownVisible.value = !isDropDownVisible.value;
}
</script>

<style scoped>
.product-registration-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.input-field-container {
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 20px;
  column-gap: 20px;
}

.input-field {
  padding: 10px;
  width: 90%;
  height: 30px;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
}

.upload-file-container {
  width: 60vw;
  border: 1px dashed gray;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
}

.submit-btn {
  background-color: #2e54d3;
  color: white;
  transition: all 0.3s ease-in-out;
  padding: 10px 20px;
  width: 200px;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  outline: none;
}
.submit-btn:hover {
  background-color: white;
  color: #2e54d3;
  border: 1px solid #2e54d3;
}
.upload-image-btn {
  background-color: #2e54d3;
  color: white;
  transition: all 0.3s ease-in-out;
  padding: 10px 20px;
  width: 100px;
  height: 20px;
  cursor: pointer;
}

.upload-image-btn:hover {
  background-color: white;
  border: 1px solid #2e54d3;
  color: #2e54d3;
}

.uploaded-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 20px;
}

.dropdown-wrapper {
  background-color: white;
  color: #2e54d3;
  border: 1px solid #2e54d3;
  cursor: pointer;
  width: 250px;
  max-width: 250px;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
}
.dropdown-selected-option {
  padding: 16px;
}
.open-dropdown-selected-option {
  padding: 16px;
  color: white;
  background-color: #2e54d3;
}

.options-wrapper {
  position: absolute;
  background-color: white;
  transition: all 0.5s ease;
}
.option:hover {
  color: white;
  background-color: #2e54d3;
  border: 1px solid white;
}
.option {
  width: 250px;
  max-width: 250px;
  padding: 16px 0;
  border-top: 1px solid #2e54d3;
  border-left: 1px solid #2e54d3;
  border-right: 1px solid #2e54d3;
}

.option:last-of-type {
  border-bottom: 1px solid #2e54d3;
  border-left: 1px solid #2e54d3;
  border-right: 1px solid #2e54d3;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}

button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

button:disabled:hover,
button[disabled]:hover {
  cursor: not-allowed;

  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>

