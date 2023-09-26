import './product.css'
import React, { useEffect, useState } from 'react'
import { FakeStoreApi } from '../../components/Api/FakeStoreApi'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../../context/cart';


const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const { addToCart } = useCart();


// **************************Add to Cart Animation***************

    const [addAnimation, setAddAnimation] = useState(false);
    const addtoCartAnimation = () => {
        setAddAnimation(true);
        const timeout = setTimeout(() => {
            setAddAnimation(false)
        }, 300)
        return () => clearTimeout(timeout)

    }
    const addToCartHandler = () => {
        addToCart(product)
        addtoCartAnimation()
    }

// ****************************************************************



    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const productData = await FakeStoreApi.fetchProductsById(productId);
            setProduct(productData)
            setLoading(false);
        }
        fetchProduct().catch(console.error)

    }, [productId])

    if (!loading && !product) {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        No Products found matching.
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {loading ? (
                <div className='loader'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>) : (

                <div className="card m-3 product-container" style={{ maxWidth: "80%" }}>
                    <div className="row g-0">
                        <div className="col-md-4 image-container">
                            <img src={product.image} className="img-fluid rounded-start product-image"
                                alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title product-title">{product.title}</h5>
                                <p className="card-text  " style={{ fontSize: "25px" }}>Price: <b className='text-success'>${product.price}</b></p>
                                <p> <b className='product-about'> About this item: </b> <br />
                                    {product.description} </p>
                                <div className='my-2'>Rating: {`${product.rating.rate}⭐`}/5 </div>
                                <div className='d-flex'>
                                    <button className="btn btn-primary" style={{ minHeight: "43px" }} onClick={addToCartHandler}>Add to Cart</button>
                                    <div >
                                        <p className={`invisible ${addAnimation ? 'addedToCart' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-check" viewBox="0 0 16 16">
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                        </svg></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export { Product }