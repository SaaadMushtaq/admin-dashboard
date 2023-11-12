import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFilterOptionStore = defineStore("filterOption", () => {
  const selectedOption = ref("Weekly");

  function setSelectedOption(option) {
    selectedOption.value = option;
  }

  return { selectedOption, setSelectedOption };
});
