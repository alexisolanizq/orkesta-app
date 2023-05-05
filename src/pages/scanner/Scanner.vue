<script setup>
import Products from '@/components/common/Products.vue';
import Reader from '@/components/common/Reader.vue';
import { useProducts } from '@/composables/products';
const { products } = useProducts()
</script>

<template>
    <Reader v-if="products?.length <= 0" />
    <Products :products="products" />
</template>