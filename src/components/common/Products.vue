<script setup>
import { useProducts } from '@/composables/products'
import product from '@/assets/images/bag.png'
const { products } = useProducts()
</script>

<template>
    <div class="products__container">
        <div v-for="(item) in products" :key="item.id" class="products__container__items">
            <img :src="product" alt="Product image">
            <div class="products__container__items__description">
                <p v-text="item.name" class="text-gray" />
                <p v-text="item.brand" class="font-bold" />
                <p v-text="`$${item.price}`" />
                <p v-text="item.designer" class="text-gray" />
            </div>
        </div>
    </div>
</template>