import { useState } from 'react';
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiShuffle } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// Importing images
import img1 from '../../../../assets/img/product-details/product-detalis-l1.jpg';
import img1Zoom from '../../../../assets/img/product-details/product-detalis-bl1.jpg';
import img2 from '../../../../assets/img/product-details/product-detalis-l2.jpg';
import img2Zoom from '../../../../assets/img/product-details/product-detalis-bl2.jpg';
import img3 from '../../../../assets/img/product-details/product-detalis-l3.jpg';
import img3Zoom from '../../../../assets/img/product-details/product-detalis-bl3.jpg';
import img4 from '../../../../assets/img/product-details/product-detalis-l5.jpg';
import img4Zoom from '../../../../assets/img/product-details/product-detalis-bl5.jpg';
import img5Zoom from '../../../../assets/img/product-details/product-detalis-bl4.jpg';
import img6 from '../../../../assets/img/product-details/product-detalis-s6.jpg';
import img7 from '../../../../assets/img/product-details/product-detalis-s7.jpg';
import img8 from '../../../../assets/img/product-details/product-detalis-s8.jpg';
import img9 from '../../../../assets/img/product-details/product-detalis-s9.jpg';
import img10 from '../../../../assets/img/product-details/product-detalis-s1.jpg';
import product1 from '../../../../assets/img/product/hm20-pro-12.jpg';
import product2 from '../../../../assets/img/product/hm20-pro-11.jpg';
import product3 from '../../../../assets/img/product/hm20-pro-10.jpg';
import product4 from '../../../../assets/img/product/hm20-pro-9.jpg';
import testimonial1 from '../../../../assets/img/testimonial/1.jpg';
import testimonial2 from '../../../../assets/img/testimonial/2.jpg';
const ShopDetails = () => {

    const [quantity, setQuantity] = useState(2);
    const [selectedImage, setSelectedImage] = useState({ img: img1, zoomImg: img1Zoom }); // Main displayed image

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Cập nhật quantity khi người dùng nhập hoặc xóa
        if (value === '' || (!isNaN(value) && Number(value) > 0)) {
            setQuantity(value === '' ? '' : Number(value));
        }
    };
    // Trạng thái để quản lý tab hiện tại
    const [activeTab, setActiveTab] = useState('des-details2');

    // Hàm để chuyển tab
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    // Update selected image on thumbnail click
    const handleImageClick = (img, zoomImg) => {
        setSelectedImage({ img, zoomImg });
    };

    return (
        <>
            <div className="shop-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="product-details-img mr-20 product-details-tab">
                                <div id="gallery" className="product-dec-slider-2">
                                    <a onClick={() => handleImageClick(img1, img1Zoom)}>
                                        <img src={img6} alt="Thumbnail 1" />
                                    </a>
                                    <a onClick={() => handleImageClick(img2, img2Zoom)}>
                                        <img src={img7} alt="Thumbnail 2" />
                                    </a>
                                    <a onClick={() => handleImageClick(img3, img3Zoom)}>
                                        <img src={img9} alt="Thumbnail 3" />
                                    </a>
                                    <a onClick={() => handleImageClick(img4, img4Zoom)}>
                                        <img src={img8} alt="Thumbnail 4" />
                                    </a>
                                    <a onClick={() => handleImageClick(img10, img5Zoom)}>
                                        <img src={img10} alt="Thumbnail 5" />
                                    </a>
                                </div>
                                <div className="zoompro-wrap zoompro-2 pl-20">
                                    <div className="zoompro-border zoompro-span">
                                        <img className="zoompro" src={selectedImage.img} data-zoom-image={selectedImage.zoomImg} alt="Selected" />
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
                                        <button className="dec qtybutton" onClick={handleDecrease}>-</button>
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value={quantity} onChange={handleInputChange} />
                                        <button className="inc qtybutton" onClick={handleIncrease}>+</button>
                                    </div>
                                    <div className="pro-details-cart btn-hover">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                    <div className="pro-details-wishlist">
                                        <a href="#" ><CiHeart /></a>
                                    </div>
                                    <div className="pro-details-compare">
                                        <a href="#"><CiShuffle /></a>
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
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaDribbble /></a></li>
                                        <li><a href="#"><FaPinterestP /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
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
                            <a
                                className={activeTab === 'des-details1' ? 'active' : ''}
                                onClick={() => handleTabClick('des-details1')}
                            >
                                Thông tin bổ sung
                            </a>
                            <a
                                className={activeTab === 'des-details2' ? 'active' : ''}
                                onClick={() => handleTabClick('des-details2')}
                            >
                                Mô tả
                            </a>
                            <a
                                className={activeTab === 'des-details3' ? 'active' : ''}
                                onClick={() => handleTabClick('des-details3')}
                            >
                                Đánh giá (2)
                            </a>
                        </div>
                        <div className="tab-content description-review-bottom">
                            {/* Description Tab */}
                            <div id="des-details2" className={`tab-pane ${activeTab === 'des-details2' ? 'active' : ''}`}>
                                <div className="product-description-wrapper">
                                    <p>Bản thân công ty đã kiếm được rất nhiều tiền để nhà phát triển theo dõi, nhưng điều tương tự cũng xảy ra theo thời gian.</p>
                                    <p>Như với một số lao động và đau đớn lớn. Để đi đến từng chi tiết nhỏ nhất, không ai nên thực hành bất kỳ loại công việc nào ngoại trừ để đạt được điều gì đó từ nó. Đừng để nỗi đau lấn át niềm vui, hãy để nỗi đau có một sợi tóc và đừng để ai sinh ra. Trừ khi họ bị dục vọng làm cho mù quáng, nếu không họ sẽ không bước ra.</p>
                                </div>
                            </div>
                            {/* Additional Information Tab */}
                            <div id="des-details1" className={`tab-pane ${activeTab === 'des-details1' ? 'active' : ''}`}>
                                <div className="product-anotherinfo-wrapper">
                                    <ul>
                                        <li><span>Cân nặng:</span> 400 g</li>
                                        <li><span>Kích thước:</span> 10 x 10 x 15 cm</li>
                                        <li><span>Chất liệu:</span> 60% cotton, 40% polyester</li>
                                        <li><span>Thông tin khác:</span> Quần short jean gia truyền Mỹ pug seitan in nổi</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Reviews Tab */}
                            <div id="des-details3" className={`tab-pane ${activeTab === 'des-details3' ? 'active' : ''}`}>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="review-wrapper">
                                            <div className="single-review">
                                                <div className="review-img">
                                                    <img src={testimonial1} alt="Testimonial" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>White Lewis</h4>
                                                            </div>
                                                            <div className="review-rating">
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                            </div>
                                                        </div>
                                                        <div className="review-right">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullamcorper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-review child-review">
                                                <div className="review-img">
                                                    <img src={testimonial2} alt="Testimonial" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>John Doe</h4>
                                                            </div>
                                                            <div className="review-rating">
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                            </div>
                                                        </div>
                                                        <div className="review-right">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse viverra ed viverra. Mauris ullamcorper euismod vehicula.</p>
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
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
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
                                                                <input type="submit" value="Submit" />
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

            <div className="product-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <h2>Sản phẩm liên quan</h2>
                    </div>
                    <div className="tab-content jump">
                        <div className="tab-pane active" id="product-2">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="/chi-tiet-san-pham">
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
                                            <h3><a href="/chi-tiet-san-pham">Product Title Here</a></h3>
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
                                            <a href="/chi-tiet-san-pham">
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
                                            <h3><a href="/chi-tiet-san-pham">Product Title Here</a></h3>
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
                                            <a href="/chi-tiet-san-pham">
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
                                            <h3><a href="/chi-tiet-san-pham">Product Title Here</a></h3>
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
                                            <a href="/chi-tiet-san-pham">
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
                                            <h3><a href="/chi-tiet-san-pham">Product Title Here</a></h3>
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
        </>
    );
};
export default ShopDetails;

