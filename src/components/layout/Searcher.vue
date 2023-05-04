<script setup>
import search from "@/assets/icons/search.svg";
import barCode from "@/assets/icons/bar-code.svg";
</script>
<template>
    <div class="searcher__filter">
        <div class="searcher__container">
            <div class="searcher__containter__img">
                <img class="searcher__container__img__search" :src="search" alt="Searcher icon">
            </div>
            <input placeholder="Buscar producto" class="searcher__container__input" type="text" />
            <div class="searcher__container__button">
                <button class="searcher__container__button__icon">
                    <img :src="barCode" alt="Bar code icon">
                </button>
            </div>
        </div>
        <div class="filters">
            <button class="filters__button">Filtros</button>
        </div>
    </div>
</template>