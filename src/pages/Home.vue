<script setup>
import Products from "@/components/common/Products.vue";
import Empty from "@/components/layout/Empty.vue";
import { useProducts } from "@/composables/products";
import { useSearch } from "@/composables/search";
import Start from "@/components/layout/Start.vue";
import Searcher from "@/components/layout/Searcher.vue";
const { filter } = useSearch();
const { products } = useProducts();
</script>

<template>
  <Searcher />
  <Start v-if="products.length <= 0 && filter.length <= 2" />
  <Products v-if="products.length >= 1" :products="products" />
  <Empty v-if="products.length === 0 && filter.length >= 3" />
</template>
