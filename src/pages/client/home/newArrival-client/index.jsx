import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import product1 from '../../../../assets/img/product/hm20-pro-12.jpg';
import product2 from '../../../../assets/img/product/hm20-pro-11.jpg';
import product3 from '../../../../assets/img/product/hm20-pro-10.jpg';
import product4 from '../../../../assets/img/product/hm20-pro-9.jpg';
import product5 from '../../../../assets/img/product/hm20-pro-8.jpg';
import product6 from '../../../../assets/img/product/hm20-pro-7.jpg';
import product7 from '../../../../assets/img/product/hm20-pro-6.jpg';
import product8 from '../../../../assets/img/product/hm20-pro-5.jpg';


const NewArrival = () => {
    return (
        <div className="product-area pt-100 pb-70">
            <div className="container">
                <div className="section-title-6 text-center">
                    <h2>New Arrivals</h2>
                </div>
                <div className="product-tab-list nav pt-30 pb-55 text-center">
                    <a href="#product-1" data-bs-toggle="tab">
                        <h4>New Arrivals </h4>
                    </a>
                    <a className="active" href="#product-2" data-bs-toggle="tab">
                        <h4>Best Sellers </h4>
                    </a>
                    <a href="#product-3" data-bs-toggle="tab">
                        <h4>Sale Items</h4>
                    </a>
                </div>
                <div className="tab-content jump">
                    <div className="tab-pane" id="product-1">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product1} alt />
                                            <img className="hover-img" src={product1} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product2} alt />
                                            <img className="hover-img" src={product2} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product3} alt />
                                            <img className="hover-img" src={product3} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product4} alt />
                                            <img className="hover-img" src={product4} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product5} alt />
                                            <img className="hover-img" src={product5} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product6} alt />
                                            <img className="hover-img" src={product6} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product7} alt />
                                            <img className="hover-img" src={product7} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product8} alt />
                                            <img className="hover-img" src={product8} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane active" id="product-2">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product8} alt />
                                            <img className="hover-img" src={product8} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product7} alt />
                                            <img className="hover-img" src={product7} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product6} alt />
                                            <img className="hover-img" src={product6} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product5} alt />
                                            <img className="hover-img" src={product5} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product4} alt />
                                            <img className="hover-img" src={product4} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product3} alt />
                                            <img className="hover-img" src={product3} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product2} alt />
                                            <img className="hover-img" src={product2} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product1} alt />
                                            <img className="hover-img" src={product1} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="product-3">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product5} alt />
                                            <img className="hover-img" src={product5} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product6} alt />
                                            <img className="hover-img" src={product6} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product7} alt />
                                            <img className="hover-img" src={product7} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product8} alt />
                                            <img className="hover-img" src={product8} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product1} alt />
                                            <img className="hover-img" src={product1} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product2} alt />
                                            <img className="hover-img" src={product2} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product3} alt />
                                            <img className="hover-img" src={product3} alt />
                                        </a>
                                        <span className="pink">-10%</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                <div className="product-wrap mb-25">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src={product4} alt />
                                            <img className="hover-img" src={product4} alt />
                                        </a>
                                        <span className="purple">New</span>
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content text-center">
                                        <h3><a href="product-details.html">Product Title Here</a></h3>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;