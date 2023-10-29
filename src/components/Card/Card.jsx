import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({ data, addToCart }) => {


    const { image, id, title, price } = data

    const [addAnimation, setAddAnimation] = useState(false);

    const addtoCartAnimation = () => {
        setAddAnimation(true);
        const timeout = setTimeout(() => {
            setAddAnimation(false)
        }, 300)
        return () => clearTimeout(timeout)

    }

    const addToCartHandler = () => {
        addToCart()
        addtoCartAnimation()
    }



    return (
        <>
            <div className="col cardMain-container " >
                <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                    <div className="card cardMain py-2 h-100">
                        <img src={image} className="card-img-top cardMain-image" alt="..." />
                        <div className="card-body">
                            <p className="card-title cardMain-title" >{title}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export { Card }
