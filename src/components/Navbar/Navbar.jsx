import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import FastmartLogo from './FastmartLogo.png'
import './Navbar.css';


const Navbar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setsearchQuery] = useState('')
    const [animatingCounter, setAnimatingCounter] = useState(false)

    // if (cartItemCount == null) {
    //     cartItemCount = 0
    // }

    useEffect(() => {
        if (cartItemCount > 0) {

            const timeout = setTimeout(() => {
                setAnimatingCounter(true)
            }, 300);

            setAnimatingCounter(false)
            return () => clearTimeout(timeout)
        }

    }, [cartItemCount])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        } else {
            setsearchQuery('')
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
                <div className="container-fluid d-flex align-items-stretch">
                    <NavLink className="navbar-brand " to="/"><img className='FastmartLogo' src={FastmartLogo} alt="FastmartLogo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex" to="/cart"> Cart
                                    <div className="cartWithCounter">
                                        {cartItemCount > 0 && (<div className={`cardCounter text-warning ${animatingCounter ? 'animatingCounterClass' : ''} `}>{cartItemCount <= 9 ? cartItemCount : "+9"}</div>)}
                                        {cartItemCount < 1 && (<div className='cardCounterNot'>{cartItemCount}</div>)}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart2 cart-icon" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                    </div>
                                </NavLink>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="text" placeholder="Search"
                                value={searchQuery} onChange={e => setsearchQuery(e.target.value)} aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={handleSubmit} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav >
        </>
    )
}

export { Navbar }