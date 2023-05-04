<script setup>
import Header from "@/components/layout/Header.vue";
import Searcher from "@/components/layout/Searcher.vue";
</script>

<template>
  <div class="home">
    <Header />
    <div class="home__body">
      <Searcher />
      <router-view />
    </div>
  </div>
</template>
