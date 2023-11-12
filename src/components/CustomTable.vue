<template>
  <div class="table-container">
    <vue-good-table
      class="vue-good-table"
      :columns="header"
      :rows="content"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,
        placeholder: 'Search Products',
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 10,
        position: 'top',
        perPageDropdown: [5, 10, 15],
        dropdownAllowAll: false,
        setCurrentPage: 2,
        jumpFirstOrLast: true,
        firstLabel: 'First Page',
        lastLabel: 'Last Page',
        nextLabel: 'next',
        prevLabel: 'prev',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        pageLabel: 'page',
        allLabel: 'All',
      }"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  header: {
    type: Array,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.table-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vue-good-table {
  min-height: 200px;
  min-width: 80vw;
}
</style>