<template>
  <div class="dropdown-wrapper">
    <div
      @click="handleOpenDropdown"
      :class="
        isDropDownVisible
          ? 'open-dropdown-selected-option'
          : 'dropdown-selected-option'
      "
    >
      {{ selectedValue || "Please select an option" }}
    </div>
    <transition name="slide-fade">
      <div class="options-wrapper" v-if="isDropDownVisible">
        <div
          class="option"
          @click="handleOptionSelect(option)"
          v-for="option in options.filter((option) => option !== selectedValue)"
          :key="option"
        >
          {{ option }}
        </div>
      </div>
    </transition>
  </div>
</template>
  
  <script setup>
import { defineProps, ref, computed } from "vue";
import { useFilterOptionStore } from "../stores/filterOptions";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const isDropDownVisible = ref(false);
const filterOption = useFilterOptionStore();
const selectedValue = computed(() => filterOption.selectedOption);

function handleOptionSelect(option) {
  filterOption.setSelectedOption(option);
  handleOpenDropdown();
}
function handleOpenDropdown() {
  isDropDownVisible.value = !isDropDownVisible.value;
}
</script>
  
<style scoped>
.dropdown-wrapper {
  background-color: white;
  color: #2e54d3;
  border: 1px solid #2e54d3;
  cursor: pointer;
  width: 150px;
  max-width: 150px;
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
  width: 150px;
  max-width: 150px;
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
</style>
  
  