import './allProducts.css'
import React, { useEffect, useState } from 'react'
import { FakeStoreApi } from '../../components/Api/FakeStoreApi'
import { Card } from '../../components/Card/Card'
import { useSearchParams } from 'react-router-dom'
import { useCart } from '../../context/cart';
import { Carousel } from '../../components/Carousel'


const AllProducts = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useSearchParams();
    const { addToCart } = useCart();


    const searchQuery = query.get('q')

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const productsData = searchQuery ? await FakeStoreApi.fetchProductsByQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
            setProducts(productsData)
            setLoading(false)
        }
        fetchProducts().catch(console.error)
       

    }, [searchQuery])


    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        No Products found matching {searchQuery}.
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
        {/* {searchQuery == null ?  <Carousel /> : null} */}
            {loading ? (
                <div className='loader'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    {searchQuery === null ? (
                        <>
                        <Carousel data={products} />
                            <div className="row row-cols-1 row-cols-md-3 g-4 main-container">

                                {products.map((product) => (
                                    <Card key={product.id} data={product} addToCart={() => addToCart(product)} />
                                )
                                )}
                            </div>
                        </>

                    ) : (
                        <div className="row row-cols-1 row-cols-md-3 g-4 main-container">

                            {products.map((product) => (
                                <Card key={product.id} data={product} addToCart={() => addToCart(product)} />
                            )
                            )}
                        </div>
                    )}

                </>
            )}

        </>
    )
}


export { AllProducts }
