const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        return data;
    },
    fetchProductsById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await res.json()
        return data;
    },
    fetchProductsByQuery: async (query) => {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json()
        return data.filter((product) => product.title.toLowerCase().includes(query) )
    }
}

export {FakeStoreApi}

// let fetchAll = async () => {
//     try {
//         let data = await FakeStoreApi.fetchAllProducts()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchAll()