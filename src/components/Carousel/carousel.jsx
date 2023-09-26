import { Link } from 'react-router-dom';
import './carousel.css'

const Carousel = ({ data }) => {

    const carouselFirst = () => {
        const id = Math.floor(Math.random() * 6)
        const result = data[id]
        return result
    }

    const carouselSecond = () => {
        const id = Math.floor(Math.random() * (14 - 7)) + 7
        const result = data[id]
        return result
    }
    const carouselThird = () => {
        const id = Math.floor(Math.random() * (20 - 14)) + 14
        const result = data[id]
        return result
    }


    return (
        <>
            {/* {(firstCarousel && secondCarousel && thirdCarousel !== null) ? ( */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner border border-dark">
                    <h2>Deals of the day</h2>
                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className='ImgAndContent'>
                            <img src={carouselFirst().image} className="d-block carousel-img" alt="..." />
                            <div className="card py-2 h-100 carousel-card" style={{ width: "400px" }} >
                                <div className="card-body">
                                    <Link to={`/product/${carouselFirst().id}`} className="card-title" >{carouselFirst().title}</Link>
                                    <p >Price: <b className='text-success'> &#8377;{carouselFirst().price} </b></p>
                                    <p>{carouselFirst().description.length >= 100 ? carouselFirst().description.slice(0,100)+"..." : carouselFirst().description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='ImgAndContent'>
                            <img src={carouselSecond().image} className="d-block carousel-img" alt="..." />
                            <div className="card py-2 h-100 carousel-card" style={{ width: "400px" }} >
                                <div className="card-body">
                                    <Link to={`/product/${carouselSecond().id}`} className="card-title" >{carouselSecond().title}</Link>
                                    <p >Price: <b className='text-success'> &#8377;{carouselSecond().price} </b></p>
                                    <p>{carouselSecond().description.length >= 100 ? carouselSecond().description.slice(0,100)+"..." : carouselSecond().description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='ImgAndContent'>
                            <img src={carouselThird().image} className="d-block carousel-img" alt="..." />
                            <div className="card py-2 h-100 carousel-card" style={{ width: "400px" }} >
                                <div className="card-body">
                                    <Link to={`/product/${carouselThird().id}`} className="card-title" >{carouselThird().title}</Link>
                                    <p >Price: <b className='text-success'> &#8377;{carouselThird().price} </b></p>
                                    <p>{carouselThird().description.length >= 100 ? carouselThird().description.slice(0,100)+"..." : carouselThird().description}</p>
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