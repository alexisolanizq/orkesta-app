import { onBeforeMount, ref, watch } from "vue";
import useProductStore from "@/store/modules/products/product";
import { storeToRefs } from "pinia";
import useMainStore from "@/store";

export const useSearch = () => {
  const productStore = useProductStore();
  const mainStore = useMainStore();
  const { filter: filterInput } = storeToRefs(mainStore);
  const filter = filterInput;

  const clearFilter = () => {
    filter.value = "";
    productStore.clearState();
  };

  const getProductByCode = async () => {
    if (filter.value.length < 4) return;
    await productStore.getProducts(filter.value);
  };

  watch(filter, () => {
    getProductByCode();
  });

  const topOfPage = ref(false);

  const handleScroll = () => {
    if (window.scrollY >= 40) {
      topOfPage.value = true;
    } else {
      topOfPage.value = false;
    }
  };

  onBeforeMount(() => window.addEventListener('scroll', handleScroll))

  return {
    filter,
    topOfPage,
    clearFilter,
  };
};
