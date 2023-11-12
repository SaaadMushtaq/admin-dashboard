<template>
  <nav class="navbar-container">
    <div>
      <h1>Admin Dashboard</h1>
    </div>
    <div>
      <RouterLink
        to="/"
        :class="
          this.$route.name === 'RevenueAnalysis'
            ? 'selected-page-link'
            : 'page-link'
        "
        >Revenue Analysis</RouterLink
      >
      <RouterLink
        to="/inventory-management"
        :class="
          this.$route.name === 'InventoryManagement'
            ? 'selected-page-link'
            : 'page-link'
        "
        >Inventory Management</RouterLink
      >
      <RouterLink
        to="/product-registration"
        :class="
          this.$route.name === 'ProductRegistration'
            ? 'selected-page-link'
            : 'page-link'
        "
        >Product Registration</RouterLink
      >
    </div>
    <div class="user-container">
      <img class="user-image" src="../assets/user.png" alt="user" />
      <p>Admin</p>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar-container {
  height: 75px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.page-link {
  text-decoration: none;
  color: black;
  padding: 0 10px;
  font-size: 12px;
  transition: all 0.2s;
}

.selected-page-link {
  text-decoration: none;
  color: black;
  padding: 0 10px;
  font-size: 16px;
}

.page-link:hover {
  font-size: 16px;
}

.user-container {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
}

.user-container p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 600;
}
</style>