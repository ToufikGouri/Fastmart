import { Link } from 'react-router-dom';
import './carousel.css'

const Carousel = ({ data }) => {

    const First = () => {
        const id = Math.floor(Math.random() * 6)
        const result = data[id]
        return result
    }

    const Second = () => {
        const id = Math.floor(Math.random() * (14 - 7)) + 7
        const result = data[id]
        return result
    }
    const Third = () => {
        const id = Math.floor(Math.random() * (20 - 14)) + 14
        const result = data[id]
        return result
    }

    const carouselFirst = First();
    const carouselSecond = Second();
    const carouselThird = Third();

    return (
        <>
            {/* {(firstCarousel && secondCarousel && thirdCarousel !== null) ? ( */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <h2>Deals of the day</h2>

                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="card cardCarousel m-3" style={{ maxWidth: "80%" }}>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <img src={carouselFirst.image} className="img-fluid rounded-start carousel-img"
                                        alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <Link to={`/product/${carouselFirst.id}`} className="card-title carouselTitle" >{carouselFirst.title}</Link>
                                        <p className='carouselPrice'>Price: <b className='text-success'> &#8377;{carouselFirst.price} </b></p>
                                        <p>Category: {carouselFirst.category}</p>
                                        <p className='my-2'>Rating: {`${carouselFirst.rating.rate}⭐`}/5 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <div className="card cardCarousel m-3" style={{ maxWidth: "80%" }}>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <img src={carouselSecond.image} className="img-fluid rounded-start carousel-img"
                                        alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <Link to={`/product/${carouselSecond.id}`} className="card-title carouselTitle" >{carouselSecond.title}</Link>
                                        <p className='carouselPrice'>Price: <b className='text-success'> &#8377;{carouselSecond.price} </b></p>
                                        <p>Category: {carouselSecond.category}</p>
                                        <p className='my-2'>Rating: {`${carouselSecond.rating.rate}⭐`}/5 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <div className="card cardCarousel m-3" style={{ maxWidth: "80%" }}>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <img src={carouselThird.image} className="img-fluid rounded-start carousel-img"
                                        alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <Link to={`/product/${carouselThird.id}`} className="card-title carouselTitle" >{carouselThird.title}</Link>
                                        <p className='carouselPrice'>Price: <b className='text-success'> &#8377;{carouselThird.price} </b></p>
                                        <p>Category: {carouselThird.category}</p>
                                        <p className='my-2'>Rating: {`${carouselThird.rating.rate}⭐`}/5 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* ) : null} */}
        </>
    )
}

export { Carousel }


// import { Link } from 'react-router-dom';
// import './carousel.css'

// const Carousel = ({ data }) => {

//     const First = () => {
//         const id = Math.floor(Math.random() * 6)
//         const result = data[id]
//         return result
//     }

//     const Second = () => {
//         const id = Math.floor(Math.random() * (14 - 7)) + 7
//         const result = data[id]
//         return result
//     }
//     const Third = () => {
//         const id = Math.floor(Math.random() * (20 - 14)) + 14
//         const result = data[id]
//         return result
//     }

//     const carouselFirst = First();
//     const carouselSecond = Second();
//     const carouselThird = Third();

//     return (
//         <>
//             {/* {(firstCarousel && secondCarousel && thirdCarousel !== null) ? ( */}
//             <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner border border-dark">
//                     <h2>Deals of the day</h2>
//                     <div className="carousel-item active" data-bs-interval="2000">
//                         <div className='ImgAndContent'>
//                             <img src={carouselFirst.image} className="d-block carousel-img" alt="..." />
//                             <div className="card py-2 h-100 carousel-card" style={{ width: "400px" }} >
//                                 <div className="card-body">
//                                     <Link to={`/product/${carouselFirst.id}`} className="card-title carouselTitle" >{carouselFirst.title}</Link>
//                                     <p>Price:<b className='text-success'> &#8377;{carouselFirst.price} </b></p>
//                                     <p>Category: {carouselFirst.category}</p>
//                                     <p>Rating: {`${carouselFirst.rating.rate}⭐`}/5</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item" data-bs-interval="2000">
//                         <div className='ImgAndContent'>
//                             <img src={carouselSecond.image} className="d-block carousel-img" alt="..." />
//                             <div className="card py-2 h-100 carousel-card" style={{ width: "400px" }} >
//                                 <div className="card-body">
//                                     <Link to={`/product/${carouselSecond.id}`} className="card-title carouselTitle" >{carouselSecond.title}</Link>
//                                     <p className='carouselPrice'>Price: <b className='text-success'> &#8377;{carouselSecond.price} </b></p>
//                                     <p>Category: {carouselSecond.category}</p>
//                                     <p>Rating: {`${carouselSecond.rating.rate}⭐`}/5</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item" data-bs-interval="2000">
//                         <div className='ImgAndContent'>
//                             <img src={carouselThird.image} className="d-block carousel-img" alt="..." />
//                             <div className="card py-2 h-100 carousel-card" style={{ width: "400px" }} >
//                                 <div className="card-body">
//                                     <Link to={`/product/${carouselThird.id}`} className="card-title carouselTitle" >{carouselThird.title}</Link>
//                                     <p>Price: <b className='text-success'> &#8377;{carouselThird.price} </b></p>
//                                     <p>Category:  {carouselThird.category}</p>
//                                     <p>Rating: {`${carouselThird.rating.rate}⭐`}/5</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//             {/* ) : null} */}
//         </>
//     )
// }

// export { Carousel }