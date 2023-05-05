import { ref, watch } from "vue";
import useProductStore from "@/store/modules/products/product";

export const useSearch = () => {
  const productStore = useProductStore();

  const filter = ref("");

  const clearFilter = () => (filter.value = "");

  const getProductByCode = async () => {
    if (filter.value.length < 8) return;
    console.log('trying');
    await productStore.getProducts(filter.value)
  };

  watch(filter, () => {
    getProductByCode();
  });


  return {
    filter,
    clearFilter,
  };
};
