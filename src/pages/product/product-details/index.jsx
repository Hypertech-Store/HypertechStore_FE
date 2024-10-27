import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

// Importing images
import img1 from '../../../assets/img/product-details/product-detalis-l1.jpg';
import img1Zoom from '../../../assets/img/product-details/product-detalis-bl1.jpg';
import img2 from '../../../assets/img/product-details/product-detalis-l2.jpg';
import img2Zoom from '../../../assets/img/product-details/product-detalis-bl2.jpg';
import img3 from '../../../assets/img/product-details/product-detalis-l3.jpg';
import img3Zoom from '../../../assets/img/product-details/product-detalis-bl3.jpg';
import img4 from '../../../assets/img/product-details/product-detalis-l5.jpg';
import img4Zoom from '../../../assets/img/product-details/product-detalis-bl5.jpg';
import img5Zoom from '../../../assets/img/product-details/product-detalis-bl4.jpg';
import img6 from '../../../assets/img/product-details/product-detalis-s6.jpg';
import img7 from '../../../assets/img/product-details/product-detalis-s7.jpg';
import img8 from '../../../assets/img/product-details/product-detalis-s8.jpg';
import img9 from '../../../assets/img/product-details/product-detalis-s9.jpg';
import img10 from '../../../assets/img/product-details/product-detalis-s1.jpg';

const ShopDetails = () => {
    return (
        <>
            <div>
                <div className="shop-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="product-details-img mr-20 product-details-tab">
                                    <div id="gallery" className="product-dec-slider-2">
                                        <a data-image={img1} data-zoom-image={img1Zoom}>
                                            <img src={img6} alt />
                                        </a>
                                        <a data-image={img2} data-zoom-image={img2Zoom}>
                                            <img src={img7} alt />
                                        </a>
                                        <a data-image={img3} data-zoom-image={img3Zoom}>
                                            <img src={img9} alt />
                                        </a>
                                        <a data-image={img4} data-zoom-image={img4Zoom}>
                                            <img src={img8} alt />
                                        </a>
                                        <a data-image={img6} data-zoom-image={img5Zoom}>
                                            <img src={img10} alt />
                                        </a>
                                    </div>
                                    <div className="zoompro-wrap zoompro-2 pl-20">
                                        <div className="zoompro-border zoompro-span">
                                            <img className="zoompro" src={img1} data-zoom-image={img1Zoom} alt />
                                            <span>-29%</span>
                                            <div className="product-video">
                                                <a className="video-popup" href="https://www.youtube.com/watch?v=tce_Ap96b0c">
                                                    <i className="fa fa-video-camera" />
                                                    View Video
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-lg-5 col-md-12">
                                <div className="product-details-content">
                                    <h2>Products Name Here</h2>
                                    <div className="product-details-price">
                                        <span>$18.00 </span>
                                        <span className="old">$20.00 </span>
                                    </div>
                                    <div className="pro-details-rating-wrap">
                                        <div className="pro-details-rating">
                                            <IoMdStar className="star-filled" />
                                            <IoMdStar className="star-filled" />
                                            <IoMdStar className="star-filled" />
                                            <IoMdStarOutline className="star-empty" />
                                            <IoMdStarOutline className="star-empty" />
                                        </div>
                                        <span><a href="#">3 Reviews</a></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                    <div className="pro-details-list">
                                        <ul>
                                            <li>- 0.5 mm Dail</li>
                                            <li>- Inspired vector icons</li>
                                            <li>- Very modern style</li>
                                        </ul>
                                    </div>
                                    <div className="pro-details-size-color">
                                        <div className="pro-details-color-wrap">
                                            <span>Color</span>
                                            <div className="pro-details-color-content">
                                                <ul>
                                                    <li className="blue" />
                                                    <li className="maroon active" />
                                                    <li className="gray" />
                                                    <li className="green" />
                                                    <li className="yellow" />
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="pro-details-size">
                                            <span>Size</span>
                                            <div className="pro-details-size-content">
                                                <ul>
                                                    <li><a href="#">s</a></li>
                                                    <li><a href="#">m</a></li>
                                                    <li><a href="#">l</a></li>
                                                    <li><a href="#">xl</a></li>
                                                    <li><a href="#">xxl</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pro-details-quality">
                                        <div className="cart-plus-minus">
                                            <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                        </div>
                                        <div className="pro-details-cart btn-hover">
                                            <a href="#">Add To Cart</a>
                                        </div>
                                        <div className="pro-details-wishlist">
                                            <a href="#"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <div className="pro-details-compare">
                                            <a href="#"><i className="pe-7s-shuffle" /></a>
                                        </div>
                                    </div>
                                    <div className="pro-details-meta">
                                        <span>Categories :</span>
                                        <ul>
                                            <li><a href="#">Minimal,</a></li>
                                            <li><a href="#">Furniture,</a></li>
                                            <li><a href="#">Fashion</a></li>
                                        </ul>
                                    </div>
                                    <div className="pro-details-meta">
                                        <span>Tag :</span>
                                        <ul>
                                            <li><a href="#">Fashion, </a></li>
                                            <li><a href="#">Furniture,</a></li>
                                            <li><a href="#">Electronic</a></li>
                                        </ul>
                                    </div>
                                    <div className="pro-details-social">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-review-area pb-90">
                    <div className="container">
                        <div className="description-review-wrapper">
                            <div className="description-review-topbar nav">
                                <a data-bs-toggle="tab" href="#des-details1">Additional information</a>
                                <a className="active" data-bs-toggle="tab" href="#des-details2">Description</a>
                                <a data-bs-toggle="tab" href="#des-details3">Reviews (2)</a>
                            </div>
                            <div className="tab-content description-review-bottom">
                                <div id="des-details2" className="tab-pane active">
                                    <div className="product-description-wrapper">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    </div>
                                </div>
                                <div id="des-details1" className="tab-pane ">
                                    <div className="product-anotherinfo-wrapper">
                                        <ul>
                                            <li><span>Weight</span> 400 g</li>
                                            <li><span>Dimensions</span>10 x 10 x 15 cm </li>
                                            <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                            <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="des-details3" className="tab-pane">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="review-wrapper">
                                                <div className="single-review">
                                                    <div className="review-img">
                                                        <img src="assets/img/testimonial/1.jpg" alt />
                                                    </div>
                                                    <div className="review-content">
                                                        <div className="review-top-wrap">
                                                            <div className="review-left">
                                                                <div className="review-name">
                                                                    <h4>White Lewis</h4>
                                                                </div>
                                                                <div className="review-rating">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                </div>
                                                            </div>
                                                            <div className="review-left">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="review-bottom">
                                                            <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-review child-review">
                                                    <div className="review-img">
                                                        <img src="assets/img/testimonial/2.jpg" alt />
                                                    </div>
                                                    <div className="review-content">
                                                        <div className="review-top-wrap">
                                                            <div className="review-left">
                                                                <div className="review-name">
                                                                    <h4>White Lewis</h4>
                                                                </div>
                                                                <div className="review-rating">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                </div>
                                                            </div>
                                                            <div className="review-left">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="review-bottom">
                                                            <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="ratting-form-wrapper pl-50">
                                                <h3>Add a Review</h3>
                                                <div className="ratting-form">
                                                    <form action="#">
                                                        <div className="star-box">
                                                            <span>Your rating:</span>
                                                            <div className="ratting-star">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="rating-form-style mb-10">
                                                                    <input placeholder="Name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="rating-form-style mb-10">
                                                                    <input placeholder="Email" type="email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="rating-form-style form-submit">
                                                                    <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                                                                    <input type="submit" defaultValue="Submit" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="related-product-area pb-95">
                    <div className="container">
                        <div className="section-title text-center mb-50">
                            <h2>Related products</h2>
                        </div>
                        <div className="related-product-active owl-carousel owl-dot-none">
                            <div className="product-wrap">
                                <div className="product-img">
                                    <a href="product-details-2.html">
                                        <img className="default-img" src="assets/img/product/pro-1.jpg" alt />
                                        <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt />
                                    </a>
                                    <span className="pink">-10%</span>
                                    <div className="product-action">
                                        <div className="pro-same-action pro-wishlist">
                                            <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                        </div>
                                        <div className="pro-same-action pro-cart">
                                            <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                        </div>
                                        <div className="pro-same-action pro-quickview">
                                            <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content text-center">
                                    <h3><a href="product-details-2.html">T- Shirt And Jeans</a></h3>
                                    <div className="product-rating">
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStarOutline className="star-empty" />
                                        <IoMdStarOutline className="star-empty" />
                                    </div>
                                    <div className="product-price">
                                        <span>$ 60.00</span>
                                        <span className="old">$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap">
                                <div className="product-img">
                                    <a href="product-details-2.html">
                                        <img className="default-img" src="assets/img/product/pro-2.jpg" alt />
                                        <img className="hover-img" src="assets/img/product/pro-2-1.jpg" alt />
                                    </a>
                                    <span className="purple">New</span>
                                    <div className="product-action">
                                        <div className="pro-same-action pro-wishlist">
                                            <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                        </div>
                                        <div className="pro-same-action pro-cart">
                                            <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                        </div>
                                        <div className="pro-same-action pro-quickview">
                                            <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content text-center">
                                    <h3><a href="product-details-2.html">T- Shirt And Jeans</a></h3>
                                    <div className="product-rating">
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStarOutline className="star-empty" />
                                        <IoMdStarOutline className="star-empty" />
                                    </div>
                                    <div className="product-price">
                                        <span>$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap">
                                <div className="product-img">
                                    <a href="product-details-2.html">
                                        <img className="default-img" src="assets/img/product/pro-3.jpg" alt />
                                        <img className="hover-img" src="assets/img/product/pro-3-1.jpg" alt />
                                    </a>
                                    <span className="pink">-10%</span>
                                    <div className="product-action">
                                        <div className="pro-same-action pro-wishlist">
                                            <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                        </div>
                                        <div className="pro-same-action pro-cart">
                                            <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                        </div>
                                        <div className="pro-same-action pro-quickview">
                                            <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content text-center">
                                    <h3><a href="product-details-2.html">T- Shirt And Jeans</a></h3>
                                    <div className="product-rating">
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStarOutline className="star-empty" />
                                        <IoMdStarOutline className="star-empty" />
                                    </div>
                                    <div className="product-price">
                                        <span>$ 60.00</span>
                                        <span className="old">$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap">
                                <div className="product-img">
                                    <a href="product-details-2.html">
                                        <img className="default-img" src="assets/img/product/pro-4.jpg" alt />
                                        <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt />
                                    </a>
                                    <span className="purple">New</span>
                                    <div className="product-action">
                                        <div className="pro-same-action pro-wishlist">
                                            <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                        </div>
                                        <div className="pro-same-action pro-cart">
                                            <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                        </div>
                                        <div className="pro-same-action pro-quickview">
                                            <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content text-center">
                                    <h3><a href="product-details-2.html">T- Shirt And Jeans</a></h3>
                                    <div className="product-rating">
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStarOutline className="star-empty" />
                                        <IoMdStarOutline className="star-empty" />
                                    </div>
                                    <div className="product-price">
                                        <span>$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap">
                                <div className="product-img">
                                    <a href="product-details-2.html">
                                        <img className="default-img" src="assets/img/product/pro-5.jpg" alt />
                                        <img className="hover-img" src="assets/img/product/pro-5-1.jpg" alt />
                                    </a>
                                    <span className="pink">-10%</span>
                                    <div className="product-action">
                                        <div className="pro-same-action pro-wishlist">
                                            <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                        </div>
                                        <div className="pro-same-action pro-cart">
                                            <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                        </div>
                                        <div className="pro-same-action pro-quickview">
                                            <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content text-center">
                                    <h3><a href="product-details-2.html">T- Shirt And Jeans</a></h3>
                                    <div className="product-rating">
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStarOutline className="star-empty" />
                                        <IoMdStarOutline className="star-empty" />
                                    </div>
                                    <div className="product-price">
                                        <span>$ 60.00</span>
                                        <span className="old">$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopDetails;

