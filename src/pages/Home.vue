<script setup>
import Products from "@/components/common/Products.vue";
import Empty from "@/components/layout/Empty.vue";
import { useProducts } from '@/composables/products';

const {products} = useProducts()
</script>

<template>
  <Empty v-if="products?.length <= 0" />
  <Products :products="products" v-else />
</template>
