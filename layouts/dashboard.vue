<template>
  <div>
  <DashboardNavBar/>
      <DashboardSideNav/>
       <main class="main-content position-relative border-radius-lg">

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
