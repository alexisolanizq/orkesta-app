import useMainStore from "@/store";
import useProductStore from "@/store/modules/products/product";

export const useReader = () => {
  const productsStore = useProductStore();
  const mainStore = useMainStore();

  const onDecode = (text) => {
    mainStore.setFilter(text);
  };

  const onLoaded = () => {
    productsStore.clearState();
  };

  return {
    onDecode,
    onLoaded,
  };
};
