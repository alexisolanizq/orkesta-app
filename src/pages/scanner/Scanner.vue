<script setup>
import Products from '@/components/common/Products.vue';
import Reader from '@/components/common/Reader.vue';
import { useProducts } from '@/composables/products';
import { useSearch } from '@/composables/search';
const { filter } = useSearch()
const { products } = useProducts()
</script>

<template>
    <Reader v-if="products?.length <= 0" />
    <Products :products="products" />
</template>