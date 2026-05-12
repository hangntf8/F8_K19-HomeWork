const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

//Find the product with the highest revenue!?
// Hashmap
const productMap = {}

for (let pIdx = 0; pIdx < products.length; pIdx = pIdx + 1) {
    const product = products[pIdx]

    productMap[product.id] = product
}
console.log(productMap)

// Store total revenue of each product
const revenues = {}

for (let oIdex = 0; oIdex < orders.length; oIdex = oIdex + 1) {
    const order = orders[oIdex]

    for (let iIdex = 0; iIdex < order.items.length; iIdex = iIdex + 1) {
        const item = order.items[iIdex]

        const product = productMap[item.productId]

        const revenue = product.price * item.quantity

        // If revenue does not exist yet, initialize with 0
        if (revenues[product.id] === undefined) {
            revenues[product.id] = 0
        }

        revenues[product.id] = revenue + revenues[product.id]
    }
}
console.log(revenues)


// Find product with highest revenue
let maxRevenue = 0

for (let pIdex = 0; pIdex < products.length; pIdex = pIdex + 1) {
    const product = products[pIdex]

    const revenue = revenues[product.id]

    if (revenue > maxRevenue) {
        maxRevenue = revenue

        console.log(product.name)
    }
}