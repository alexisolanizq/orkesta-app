import axiosInstance from "@/services/axiosInstance";
import { defineStore } from "pinia";

const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    errors: []
  }),
  actions: {
    async getProducts(params) {
      try {
        const {data} = await axiosInstance.get(
          `/products?with_selects=0&page=1&limit=50&search=${params}&with_products=1`
        );

        if(data.status === 'success'){
          this.products = data?.products?.data
        } else {
          this.products = []
          this.errors = data?.msg
        }
      } catch (error) {}
    },
    clearState() {
        this.products = []
    }
  },

});

export default useProductStore;
