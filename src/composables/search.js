import axiosInstance from "@/services/axiosInstance";
import { ref, watch } from "vue";

export const useSearch = () => {
  const filter = ref("");

  const clearFilter = () => (filter.value = "");

  watch(filter, () => {
    getProductByCode();
  });

  const getProductByCode = async () => {
    if (filter.value.length < 8) return;

    const { data } = await axiosInstance.get(
      `/products?with_selects=0&page=1&limit=50&search=${filter.value}&with_products=1`
    );
    console.log(data);
  };

  return {
    filter,
    clearFilter,
  };
};
