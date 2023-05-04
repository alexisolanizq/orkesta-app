export const useProducts = () => {

    const products = [
        {
            id: 1,
            name: 'Bolso Alice',
            brand: 'Bolialic',
            price: 3290.00,
            colors: [
                {
                    id: 1,
                    color: 'Negro',
                    hexaCode: '#000'
                }
            ],
            designer: 'Fiamma'
        },
        {
            id: 2,
            name: 'Bolso Sarga',
            brand: 'Bolisarg',
            price: 3290.00,
            colors: [
                {
                    id: 1,
                    color: 'Negro',
                    hexaCode: '#000'
                }
            ],
            designer: 'Fiamma'
        },
        {
            id: 1,
            name: 'Bolso Alice FRD',
            brand: 'Bolialic',
            price: 3290.00,
            colors: [
                {
                    id: 1,
                    color: 'Negro',
                    hexaCode: '#000'
                }
            ],
            designer: 'Fiamma'
        },
    ]

    return {
        products
    }
}