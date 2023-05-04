<script setup>
import Products from '@/components/common/Products.vue';
import Reader from '@/components/common/Reader.vue';
import Header from '@/components/layout/Header.vue';
import Searcher from '@/components/layout/Searcher.vue';
</script>

<template>
    <div class="home">
        <Header />
        <div class="home__body">
            <Searcher />
            <Reader />
            <Products />
            <Products />
            <Products />
        </div>
    </div>
</template>
