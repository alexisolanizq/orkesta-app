<script setup>
import search from "@/assets/icons/search.svg";
import barCode from "@/assets/icons/bar-code.svg";
import { useSearch } from "@/composables/search";
const { filter, clearFilter } = useSearch();
</script>
<template>
  <div class="searcher__filter">
    <div class="searcher__container">
      <div class="searcher__containter__img">
        <img
          class="searcher__container__img__search"
          :src="search"
          alt="Searcher icon"
        />
      </div>
      <input
        v-model="filter"
        placeholder="Buscar producto"
        class="searcher__container__input"
        type="text"
      />
      <div class="searcher__container__button">
        <RouterLink
          v-if="!filter.length"
          to="/search/scanner"
          class="searcher__container__button__icon"
        >
          <img :src="barCode" alt="Bar code icon" />
        </RouterLink>
        <button @click="clearFilter" v-else class="searcher__container__button__close">
          <v-icon name="ri-close-fill" scale="1.5" color="#95A5A6" />
        </button>
      </div>
    </div>
    <div class="filters">
      <button class="filters__button">Filtros</button>
    </div>
  </div>
</template>
