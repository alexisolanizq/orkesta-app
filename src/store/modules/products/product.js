import axiosInstance from "@/services/axiosInstance";
import { defineStore } from "pinia";

const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts(params) {
      try {
        const {data} = await axiosInstance.get(
          `/products?with_selects=0&page=1&limit=50&search=${params}&with_products=1`
        );

        this.products = data?.products?.data
      } catch (error) {}
    },
  },
  persist: true,
});

export default useProductStore;
