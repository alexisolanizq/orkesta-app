<script setup>
import Products from "@/components/common/Products.vue";
import Empty from "@/components/layout/Empty.vue";
const products = []
</script>

<template>
  <Empty v-if="products.length <= 0" />
  <Products v-else />
</template>
