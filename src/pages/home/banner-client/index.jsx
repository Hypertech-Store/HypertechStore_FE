import { FaLongArrowAltRight } from "react-icons/fa";
import banner1 from '../../../assets/img/banner/banner-42.png';
import banner2 from '../../../assets/img/banner/banner-43.png';
import banner3 from '../../../assets/img/banner/banner-44.png';

const BannerArea = () => {
    return (
        <div className="banner-area pb-70">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-md-4">
                        <div className="single-banner mb-30">
                            <a href="/chi-tiet-san-pham">
                                <img src={banner1} alt="Nice Headphones" />
                            </a>
                            <div className="banner-content banner-content1-modify banner-content1-modify-position3">
                                <h3>Nice Headphones</h3>
                                <h4>Choose Your Products Here</h4>
                                <a href="/chi-tiet-san-pham">
                                    <FaLongArrowAltRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single-banner mb-30">
                            <a href="/chi-tiet-san-pham">
                                <img src={banner2} alt="Surveillance camera" />
                            </a>
                            <div className="banner-content banner-content1-modify banner-content1-modify-position3">
                                <h3>Surveillance camera</h3>
                                <h4>Choose Your Products Here</h4>
                                <a href="/chi-tiet-san-pham">
                                    <FaLongArrowAltRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single-banner res-white-overly-xs mb-30">
                            <a href="/chi-tiet-san-pham">
                                <img src={banner3} alt="Steam Cleaner" />
                            </a>
                            <div className="banner-content banner-content1-modify banner-content1-modify-position3">
                                <h3>Steam Cleaner</h3>
                                <h4>Choose Your Products Here</h4>
                                <a href="/chi-tiet-san-pham">
                                    <FaLongArrowAltRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerArea;
