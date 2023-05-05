<script setup>
import Products from "@/components/common/Products.vue";
import Reader from "@/components/common/Reader.vue";
import Empty from "@/components/layout/Empty.vue";
import { useProducts } from "@/composables/products";
import { useSearch } from "@/composables/search";
const { products } = useProducts();
const { filter, clearFilter } = useSearch();
</script>

<template>
  <div class="search__options">
    <div class="search__options__back">
        <router-link to="/">
            <v-icon name="bi-arrow-left" scale="1.5" />
            <p>Regresar</p>
        </router-link>
    </div>
    <button @click="clearFilter" class="search__options__back__legend">Escanea el código</button>
  </div>
  <Reader v-if="products?.length <= 0 && filter.length <= 7" />
  <Products
    v-if="products?.length >= 1 && filter.length >= 8"
    :products="products"
  />
  <Empty v-if="products?.length <= 0 && filter.length >= 8" />
</template>
