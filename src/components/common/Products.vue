<script setup>
import { useProducts } from "@/composables/products";
defineProps(["products"]);
const { priceFormat } = useProducts();
</script>

<template>
  <div class="products__container">
    <div
      v-if="products?.length > 0"
      v-for="item in products"
      :key="item.product_id"
      class="products__container__items"
    >
      <img
        width="70"
        :src="`${item?.images?.[0]?.path}${item?.images?.[0]?.file}`"
        alt="Product image"
      />
      <div class="products__container__items__description">
        <p v-text="item.product_description" class="text-gray" />
        <p v-text="item.product_name" class="font-bold" />
        <p
          v-if="item.price_with_discount !== 0"
          class="text-danger"
          v-text="`${priceFormat(item.price_with_discount)}`"
        />
        <p v-text="`${priceFormat(item.price)}`" />
        <p v-text="item.color_name" class="text-gray" />
        <p v-text="item.brand_name" class="text-gray" />
      </div>
    </div>
  </div>
</template>
