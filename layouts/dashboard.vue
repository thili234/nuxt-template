<template>
  <div>
      <DashboardSideNav/>
      <main class="main-content position-relative border-radius-lg">
        <DashboardNavBar/>
        <Nuxt/>
        <DashboardFooter/>

  </main>
  </div>
</template>

<script>
    export default {
      name: "dashboard",
    }
    </script>
