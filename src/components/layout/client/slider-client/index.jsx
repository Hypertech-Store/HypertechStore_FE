import { useRef } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import slider1 from '../../../../assets/img/slider/slider-20-1.jpg';

const SliderClient = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="slider-area">
            <Slider {...settings} ref={sliderRef} className="slider-active">
                <div
                    className="single-slider-2 slider-height-20 d-flex align-items-center slider-height-res bg-img"
                    style={{ backgroundImage: `url(${slider1})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="slider-content-20 slider-animated-1">
                                    <h3 className="animated">Hurry Up</h3>
                                    <h1 className="animated">Get 50% Offer</h1>
                                    <p className="animated">
                                        All Electronic Products & Instrument For This Summer.
                                    </p>
                                    <div className="slider-btn slider-btn-round btn-hover">
                                        <a className="animated" href="shop.html">
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="single-slider-2 slider-height-20 d-flex align-items-center slider-height-res bg-img"
                    style={{ backgroundImage: `url(${slider1})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="slider-content-20 slider-animated-1">
                                    <h3 className="animated">Hurry Up</h3>
                                    <h1 className="animated">Get 50% Offer</h1>
                                    <p className="animated">
                                        All Electronic Products & Instrument For This Summer.
                                    </p>
                                    <div className="slider-btn slider-btn-round btn-hover">
                                        <a className="animated" href="shop.html">
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

            {/* Custom navigation buttons */}
            <div className="custom-nav">
                <button id="prevBtn" onClick={handlePrevClick}>
                    <FaCircleChevronLeft />
                </button>
                <button id="nextBtn" onClick={handleNextClick}>
                    <FaCircleChevronRight />
                </button>
            </div>
        </div>
    );
};

export default SliderClient;

