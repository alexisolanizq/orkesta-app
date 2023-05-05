<script setup>
import Header from "@/components/layout/Header.vue";
</script>

<template>
  <div class="home">
    <Header />
    <div class="home__body">
      <router-view />
    </div>
  </div>
</template>
