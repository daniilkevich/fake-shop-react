const productsArray = [
    {
        id: 1,
        name: 'iPhone 12',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 64,
        price: 1500,
        image: '/imajes/iphonegold.jpg',
    },
    {
        id: 2,
        name: 'iPhone 12 plus',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 128,
        price: 2500,
        image: '/imajes/iphoneblue.jpg',
    },
    {
        id: 3,
        name: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 64,
        price: 1500,
        image: '/imajes/iphoneblack.jpg',
    },
    {
        id: 4,
        name: 'iPhone X plus',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 128,
        price: 2000,
        image: '/imajes/iphonewhite.jpg',
    },
    {
        id: 5,
        name: 'iPhone 8',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: '/imajes/iphonewhite.jpg',
    },
    {
        id: 6,
        name: 'iPhone 8 plus',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 128,
        price: 1500,
        image: '/imajes/iphonewhite.jpg',
    },
]
export const getProductsObject = (array) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
export default productsArray
