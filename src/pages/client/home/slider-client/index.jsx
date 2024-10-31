import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import slider1 from '../../../../assets/img/slider/slider-20-1.jpg';
import slider2 from '../../../../assets/img/slider/slider-28-2.jpg';

const SliderClient = () => {
    const sliderRef = useRef();
    const [isAnimating, setIsAnimating] = useState(false);
    const [showNav, setShowNav] = useState(false); // State để hiển thị hoặc ẩn navigation buttons

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,  // Auto-play slide
        autoplaySpeed: 3000,  // Tốc độ chuyển slide (3 giây)
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: () => {
            setIsAnimating(true);  // Bắt đầu animation khi slide thay đổi
        },
        afterChange: () => {
            setIsAnimating(false);  // Dừng animation khi slide thay đổi xong
        }
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="slider-area">
            <div className="slider-active owl-carousel nav-style-1 owl-dot-none"

                style={{ position: 'relative' }}
                onMouseEnter={() => setShowNav(true)}  // Hiển thị navigation khi hover
                onMouseLeave={() => setShowNav(false)}  // Ẩn navigation khi không hover
            >
                <Slider {...settings} ref={sliderRef} >

                    {/* Slide 1 */}
                    <div className="single-slider-2 slider-height-20 d-flex align-items-center slider-height-res bg-img" style={{ position: 'relative' }}>
                        <img
                            src={slider1}
                            alt="Slider Image"
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1
                            }}
                        />

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-12">
                                    {/* Thêm lớp fade-out hoặc fade-in dựa trên trạng thái */}
                                    <div className={`slider-content-20 slider-animated-1 ${isAnimating ? 'fade-out-down' : 'fade-in-up'}`}>
                                        <h3 className="animated">Hurry Up</h3>
                                        <h1 className="animated">Get 50% Offer</h1>
                                        <p className="animated">
                                            All Electronic Products & Instrument For This Summer.
                                        </p>
                                        <div className="slider-btn slider-btn-round btn-hover">
                                            <a className="animated" href="/cua-hang">
                                                SHOP NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="single-slider-2 slider-height-20 d-flex align-items-center slider-height-res bg-img" style={{ position: 'relative' }}>
                        <img
                            src={slider2}
                            alt="Slider Image"
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1,

                            }}
                        />

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row">
                                <div className="col-12">
                                    <div className={`slider-content-20 slider-animated-1 ${isAnimating ? 'fade-out-down' : 'fade-in-up'}`}>
                                        <h3 className="animated">Hurry Up</h3>
                                        <h1 className="animated">Get 50% Offer</h1>
                                        <p className="animated">
                                            All Electronic Products & Instrument For This Summer.
                                        </p>
                                        <div className="slider-btn slider-btn-round btn-hover">
                                            <a className="animated" href="/cua-hang">
                                                SHOP NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>

                {/* Nút điều hướng */}
                {showNav && ( // Chỉ hiển thị khi hover
                    <div className="custom-nav">
                        <button
                            id="prevBtn"
                            onClick={handlePrevClick}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                zIndex: 3,
                                background: 'none',
                                border: 'none',
                                fontSize: '30px',
                                color: '#fff',
                                cursor: 'pointer'
                            }}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            id="nextBtn"
                            onClick={handleNextClick}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                zIndex: 3,
                                background: 'none',
                                border: 'none',
                                fontSize: '30px',
                                color: '#fff',
                                cursor: 'pointer'
                            }}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SliderClient;
