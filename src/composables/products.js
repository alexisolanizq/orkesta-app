import useProductStore from "@/store/modules/products/product";
import { storeToRefs } from "pinia";

export const useProducts = () => {
  const productStore = useProductStore();
  const { products } = storeToRefs( productStore )
  const priceFormat = (number) => {
    const formater = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formater.format(number);
  };

  return {
    priceFormat,
    products,
  };
};
