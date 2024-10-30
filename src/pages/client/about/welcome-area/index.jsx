import { FaLongArrowAltRight } from "react-icons/fa";
import { VscBriefcase } from "react-icons/vsc";
import { TfiCup } from "react-icons/tfi";
import { GoLightBulb } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import banner1 from '../../../../assets/img/banner/banner-1.jpg';
import banner2 from '../../../../assets/img/banner/banner-2.jpg';
import banner3 from '../../../../assets/img/banner/banner-3.jpg';
import team1 from '../../../../assets/img/team/team-1.jpg';
import team2 from '../../../../assets/img/team/team-2.jpg';
import team3 from '../../../../assets/img/team/team-3.jpg';
import team4 from '../../../../assets/img/team/team-4.jpg';
import brandLogo1 from '../../../../assets/img/brand-logo/barnd-logo-1.png';
import brandLogo2 from '../../../../assets/img/brand-logo/barnd-logo-2.png';
import brandLogo3 from '../../../../assets/img/brand-logo/barnd-logo-3.png';
import brandLogo4 from '../../../../assets/img/brand-logo/barnd-logo-4.png';
import brandLogo5 from '../../../../assets/img/brand-logo/barnd-logo-5.png';

const About = () => {
    return (
        <>
            <div>
                <div className="welcome-area pt-100 pb-95">
                    <div className="container">
                        <div className="welcome-content text-center">
                            <h5>Who Are We</h5>
                            <h1>Welcome To Flone</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure </p>
                        </div>
                    </div>
                </div>
                <div className="banner-area pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="single-banner mb-30">
                                    <a href="product-details.html"><img src={banner1} alt="" /></a>
                                    <div className="banner-content">
                                        <h3>Watches</h3>
                                        <h4>Starting at <span>$99.00</span></h4>
                                        <a href="#"><FaLongArrowAltRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-banner mb-30">
                                    <a href="product-details.html"><img src={banner2} alt="" /></a>
                                    <div className="banner-content">
                                        <h3>Plo Bag</h3>
                                        <h4>Starting at <span>$79.00</span></h4>
                                        <a href="#"><FaLongArrowAltRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-banner mb-30">
                                    <a href="product-details.html"><img src={banner3} alt="" /></a>
                                    <div className="banner-content">
                                        <h3>Sunglass</h3>
                                        <h4>Starting at <span>$79.00</span></h4>
                                        <a href="#"><FaLongArrowAltRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-mission-area pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="single-mission mb-30">
                                    <h3>Our vision</h3>
                                    <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-mission mb-30">
                                    <h3>Our mission</h3>
                                    <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single-mission mb-30">
                                    <h3>Our goal</h3>
                                    <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="funfact-area bg-gray-3 pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-count text-center mb-30">
                                    <div className="count-icon">
                                        <VscBriefcase />
                                    </div>
                                    <h2 className="count">360</h2>
                                    <span>project done</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-count text-center mb-30">
                                    <div className="count-icon">
                                        <TfiCup />
                                    </div>
                                    <h2 className="count">690</h2>
                                    <span>cups of coffee</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-count text-center mb-30">
                                    <div className="count-icon">
                                        <GoLightBulb />
                                    </div>
                                    <h2 className="count">420</h2>
                                    <span>branding</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-count text-center mb-30 mrgn-none">
                                    <div className="count-icon">
                                        <CiFaceSmile />
                                    </div>
                                    <h2 className="count">100</h2>
                                    <span>happy clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-area pt-95 pb-70">
                    <div className="container">
                        <div className="section-title-2 text-center mb-60">
                            <h2>Team Members</h2>
                            <p>Lorem ipsum dolor sit amet conse ctetu.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-wrapper mb-30">
                                    <div className="team-img">
                                        <a href="#">
                                            <img src={team1} alt="" />
                                        </a>
                                        <div className="team-action">
                                            <a className="facebook" href="#">
                                                <CgFacebook />
                                            </a>
                                            <a className="twitter" title="Wishlist" href="#">
                                                <RiTwitterXLine />
                                            </a>
                                            <a className="instagram" href="#">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4>Mr.Mike Banding</h4>
                                        <span>Manager </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-wrapper mb-30">
                                    <div className="team-img">
                                        <a href="#">
                                            <img src={team2} alt="" />
                                        </a>
                                        <div className="team-action">
                                            <a className="facebook" href="#">
                                                <CgFacebook />
                                            </a>
                                            <a className="twitter" title="Wishlist" href="#">
                                                <RiTwitterXLine />
                                            </a>
                                            <a className="instagram" href="#">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4>Mr.Peter Pan</h4>
                                        <span>Developer </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-wrapper mb-30">
                                    <div className="team-img">
                                        <a href="#">
                                            <img src={team3} alt="" />
                                        </a>
                                        <div className="team-action">
                                            <a className="facebook" href="#">
                                                <CgFacebook />
                                            </a>
                                            <a className="twitter" title="Wishlist" href="#">
                                                <RiTwitterXLine />
                                            </a>
                                            <a className="instagram" href="#">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4>Ms.Merry Jane</h4>
                                        <span>Designer </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-wrapper mb-30">
                                    <div className="team-img">
                                        <a href="#">
                                            <img src={team4} alt="" />
                                        </a>
                                        <div className="team-action">
                                            <a className="facebook" href="#">
                                                <CgFacebook />
                                            </a>
                                            <a className="twitter" title="Wishlist" href="#">
                                                <RiTwitterXLine />
                                            </a>
                                            <a className="instagram" href="#">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4>Mr.Steven Baker</h4>
                                        <span>Marketer </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-logo-area pb-100 about-brand-logo">
                    <div className="container">
                        <div className="brand-logo-active owl-carousel owl-dot-none">
                            <div className="single-brand-logo">
                                <img src={brandLogo1} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={brandLogo2} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={brandLogo3} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={brandLogo4} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={brandLogo5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
