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
                            {/* <p >Price: <b className='text-success'> &#8377;{price} </b></p> */}
                            {/* <div className='d-flex'>
                            <button className="btn btn-primary" style={{minHeight: "43px"}} onClick={addToCartHandler}>Add to Cart</button>
                            <div >
                                <p className={`invisible ${addAnimation ? 'addedToCart' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg></p>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export { Card }
