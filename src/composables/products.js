import useProductStore from "@/store/modules/products/product"

export const useProducts = () => {

    const { products } = useProductStore()

    const priceFormat = (number) => {
        const formater = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        return formater.format(number)
    }

    return {
        priceFormat,
        products
    }
}