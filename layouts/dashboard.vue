<template>
  <div>
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <DashboardSideNav />
    <main class="main-content position-relative border-radius-lg">
      <DashboardNavBar />
      <div class="container-fluid py-4">
        <Nuxt />
        <DashboardFooter />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>
