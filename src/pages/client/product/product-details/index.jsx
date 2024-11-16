import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

// Importing images

import product1 from '../../../../assets/img/product/hm20-pro-12.jpg';
import product2 from '../../../../assets/img/product/hm20-pro-11.jpg';
import product3 from '../../../../assets/img/product/hm20-pro-10.jpg';
import product4 from '../../../../assets/img/product/hm20-pro-9.jpg';
import testimonial1 from '../../../../assets/img/testimonial/1.jpg';
import testimonial2 from '../../../../assets/img/testimonial/2.jpg';
const ShopDetails = () => {
    const { productId } = useParams(); // Get the productId from route params
    const [productData, setProductData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState('des-details1'); // Default tab state
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // Fetch product data from API
        fetch(`http://127.0.0.1:8000/api/san-pham/detail/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                const product = data; // Assuming 'data' is the product object
                console.log(data);

                setProductData(product);
                setSelectedImage({ img: product?.sanPham?.duong_dan_anh, zoomImg: product?.sanPham?.duong_dan_anh });
            })
            .catch((error) => console.error('Error fetching product data:', error));
    }, [productId]);

    // Quantity handling functions
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Toggle description expand/collapse
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // Truncate text to a specific character limit
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    // State to manage the visibility of dropdown sections
    const [isOpen, setIsOpen] = useState({
        config: false,
        camera: false,
        battery: false,
        features: false,
        connectivity: false,
        design: false,
    });

    // Toggle function for dropdown
    const toggleDropdown = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section], // Toggle the specific section
        }));
    };

    const styles = {
        wrapper: {
            marginTop: '20px',
        },
        boxSpecifi: {
            marginBottom: '15px',
        },
        link: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f4f4f4',
            color: '#333',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10px',
        },
        linkHover: {
            backgroundColor: '#eaeaea',
        },
        textSpecifi: {
            display: 'none',
            paddingLeft: '20px',
        },
        textSpecifiItem: {
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'space-between',  // Đảm bảo thẳng hàng các phần tử theo chiều ngang
            alignItems: 'center',  // Căn giữa các phần tử theo chiều dọc
            marginBottom: '10px',
        },
        itemLabel: {
            display: 'inline-block',
            fontWeight: '600',
            color: '#344054',
            paddingRight: '4px',  // Reduced padding-right to bring itemLabel closer to itemValue
        },
        itemValue: {
            fontWeight: 'normal',
            paddingLeft: '4px',  // Reduced padding-left to bring itemValue closer to itemLabel
            display: 'flex',      // Chuyển sang flexbox để kiểm soát căn chỉnh các phần tử
            justifyContent: 'flex-start',  // Căn trái các phần tử trong itemValue
            alignItems: 'center',  // Căn giữa các phần tử theo chiều dọc
        },

        itemValueSpan: {
            marginLeft: '-35pc',  // Thêm margin-left vào span để căn chỉnh với itemLabel
        },

        activeTextSpecifi: {
            display: 'block',
        },
        icon: {
            fontSize: '28px', // Kích thước icon lớn hơn
        },
        h4: {
            fontSize: '15px',
        },

        // New style for a custom divider
        itemSeparator: {
            border: 'none',
            height: '1px',
            backgroundColor: '#ddd', // Light color for the divider
            margin: '8px 0',  // Space between items
            opacity: 0.5,     // Make it slightly transparent for a lighter look
        },
    };



    const wordLimit = 40; // Limit to 40 characters

    if (!productData) return <div>Loading...</div>;

    const description = productData?.sanPham?.mo_ta || "No description available.";

    return (
        <>
            <div className="shop-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {/* Product Image Section */}
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="product-details-img mr-20 product-details-tab">
                                {/* <div id="gallery" className="product-dec-slider-2">
                                    {productData?.sanPham?.hinh_anh_san_phams?.map((image) => (
                                        <a key={image?.id} data-image={image?.duong_dan_hinh_anh} data-zoom-image={image?.duong_dan_hinh_anh}>
                                            <img src={image?.duong_dan_hinh_anh} />
                                        </a>
                                    ))}
                                </div> */}

                                <div className="zoompro-wrap zoompro-2 pl-20">
                                    <div className="zoompro-border zoompro-span">
                                        <img
                                            className="zoompro"
                                            src={selectedImage.img}
                                            data-zoom-image={selectedImage.zoomImg}
                                            alt={productData?.sanPham?.ten_san_pham || 'Product Image'} // Use a descriptive alt text
                                        />

                                        <span style={styles.itemValueSpan}>-29%</span>
                                        <div className="product-video">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=tce_Ap96b0c">
                                                <i className="fa fa-video-camera"></i>
                                                View Video
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="col-lg-5 col-md-12">
                            <div className="product-details-content">
                                <h2>{productData?.sanPham?.ten_san_pham}</h2>
                                <div className="product-details-price">
                                    <span>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                            .format(productData?.sanPham?.gia)
                                            .replace('₫', 'VNĐ')}
                                    </span>
                                    <span className="old">40,000,000 VNĐ</span>
                                </div>

                                {/* Product Rating */}
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

                                <p style={{ display: "inline" }}>
                                    {/* Show truncated or full description based on the isExpanded state */}
                                    {isExpanded ? description : truncateText(description, wordLimit)}
                                </p>
                                {description.split(" ").length > wordLimit && (
                                    <span
                                        onClick={toggleDescription}
                                        style={{
                                            cursor: "pointer",
                                            marginLeft: "10px", // Space between the description and toggle link
                                            display: "inline", // Ensure it stays on the same line as the description
                                        }}
                                        className="toggle-description"
                                    >
                                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                                    </span>
                                )}

                                <div className="pro-details-size-color mt-3">
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
                                        <span>Dung lượng</span>
                                        <div className="pro-details-size-content">
                                            <ul>
                                                <li><a href="#">64gb</a></li>
                                                <li><a href="#">128gb</a></li>
                                                <li><a href="#">258gb</a></li>
                                                <li><a href="#">526gb</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                {/* Quantity Selection */}
                                <div className="pro-details-quality">
                                    <div className="cart-plus-minus">
                                        <button className="dec qtybutton" onClick={handleDecrease}>-</button>
                                        <input className="cart-plus-minus-box" type="text" value={quantity} readOnly />
                                        <button className="inc qtybutton" onClick={handleIncrease}>+</button>
                                    </div>
                                    <div className="pro-details-cart btn-hover">
                                        <a href="#">Thêm giỏ hàng</a>
                                    </div>
                                    <div className="pro-details-wishlist">
                                        <a href="#"><CiHeart /></a>
                                    </div>
                                    <div className="pro-details-compare">
                                        <a href="#"><CiShuffle /></a>
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="pro-details-meta">
                                    <span>Danh mục :</span>
                                    <ul>
                                        {/* Kiểm tra và nối các danh mục với dấu phẩy */}
                                        <li>
                                            <a href="#">
                                                {productData.ten_danh_muc && productData.ten_danh_muc}
                                                {productData.ten_danh_muc && productData.ten_danh_muc_con && ", "}
                                                {productData.ten_danh_muc_con && productData.ten_danh_muc_con}
                                            </a>
                                        </li>
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




                                {/* Social Share Buttons */}
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
                                Thông số kỹ thuật
                            </a>
                            <a
                                className={activeTab === 'des-details2' ? 'active' : ''}
                                onClick={() => handleTabClick('des-details2')}
                            >
                                Bài viết đánh giá (2)
                            </a>
                        </div>
                        <div className="tab-content description-review-bottom">
                            {/* Additional Information Tab */}
                            <div id="des-details1" className={`tab-pane ${activeTab === 'des-details1' ? 'active' : ''}`} style={styles.wrapper}>
                                <div className="product-anotherinfo-wrapper">
                                    {/* Cấu hình & Bộ nhớ Section */}
                                    <div className="box-specifi" style={styles.boxSpecifi}>
                                        <a href="javascript:;" onClick={() => toggleDropdown('config')} style={styles.link}>
                                            <h4 style={styles.h4}>Cấu hình & Bộ nhớ</h4>
                                            {isOpen.config ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                        </a>
                                        <ul className="text-specifi" style={isOpen.config ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Chip xử lý (CPU):</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Apple A18 Pro 6 nhân</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} />
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Chip đồ họa (GPU): </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Apple CPU 6 nhân</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} />
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>RAM:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>8 GB</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} />
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Dung lượng lưu trữ:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>128 GB</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} />
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Danh bạ:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Không giới hạn</span></aside>
                                            </li>

                                        </ul>
                                    </div>

                                    {/* Camera & Màn hình Section */}
                                    <div className="box-specifi" style={styles.boxSpecifi}>
                                        <a href="javascript:;" onClick={() => toggleDropdown('camera')} style={styles.link}>
                                            <h4 style={styles.h4}>Camera & Màn hình</h4>
                                            {isOpen.camera ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                        </a>
                                        <ul className="text-specifi" style={isOpen.camera ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Độ phân giải camera sau:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Chính 48 MP & Phụ 48 MP, 12 MP </span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Quay phim camera sau:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>6.5 inch Full HD+</span></aside>
                                            </li>

                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Đèn Flash camera sau:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Có</span></aside>
                                            </li>

                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Tính năng camera sau:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>6.5 inch Full HD+</span></aside>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Pin & Sạc Section */}
                                    <div className="box-specifi" style={styles.boxSpecifi}>
                                        <a href="javascript:;" onClick={() => toggleDropdown('battery')} style={styles.link}>
                                            <h4 style={styles.h4}>Pin & Sạc</h4>
                                            {isOpen.battery ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                        </a>
                                        <ul className="text-specifi" style={isOpen.battery ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Dung lượng pin:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>33 giờ</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Loại pin:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Li-Ion</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Hỗ trợ sạc tối đa:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>20 W</span></aside>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Tiện ích Section */}
                                    <div className="box-specifi" style={styles.boxSpecifi}>
                                        <a href="javascript:;" onClick={() => toggleDropdown('features')} style={styles.link}>
                                            <h4 style={styles.h4}>Tiện ích</h4>
                                            {isOpen.features ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                        </a>
                                        <ul className="text-specifi" style={isOpen.features ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>NFC:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Có</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Bluetooth:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>5.0</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Face ID:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Có</span></aside>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Kết nối Section */}
                                    <div className="box-specifi" style={styles.boxSpecifi}>
                                        <a href="javascript:;" onClick={() => toggleDropdown('connectivity')} style={styles.link}>
                                            <h4 style={styles.h4}>Kết nối</h4>
                                            {isOpen.connectivity ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                        </a>
                                        <ul className="text-specifi" style={isOpen.connectivity ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Mạng di động:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Hỗ trợ 5G</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>SIM:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>1 Nano SIM & 1 eSIM</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Wi-Fi:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Wi-Fi 7</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Bluetooth:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>v5.3</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Cổng kết nối/sạc::</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Type-C</span></aside>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Thiết kế & Chất liệu Section */}
                                    <div className="box-specifi" style={styles.boxSpecifi}>
                                        <a href="javascript:;" onClick={() => toggleDropdown('design')} style={styles.link}>
                                            <h4 style={styles.h4}>Thiết kế & Chất liệu</h4>
                                            {isOpen.design ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                        </a>
                                        <ul className="text-specifi" style={isOpen.design ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Thiết kế:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Nguyên khối</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Chất liệu:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Khung Titan & Mặt lưng kính cường lực</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Kích thước, khối lượng:
                                                </aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Thời điểm ra mắt:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>09/2024</span></aside>
                                            </li>
                                            <div style={styles.itemSeparator} /> {/* Custom horizontal line */}
                                            <li style={styles.textSpecifiItem}>
                                                <aside style={styles.itemLabel}>Hãng:</aside>
                                                <aside style={styles.itemValue}><span style={styles.itemValueSpan}>iPhone (Apple)</span></aside>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            {/* Reviews Tab */}
                            <div id="des-details2" className={`tab-pane ${activeTab === 'des-details2' ? 'active' : ''}`}>
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
                                                                <h4 style={styles.h4}>White Lewis</h4>
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
                                                                <h4 style={styles.h4}>John Doe</h4>
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
                                            <h4 style={styles.h4}>Add a Review</h4>
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
                                                <img className="default-img" src={product4} />
                                                <img className="hover-img" src={product4} />
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
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
                                                <img className="default-img" src={product3} />
                                                <img className="hover-img" src={product3} />
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
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
                                                <img className="default-img" src={product2} />
                                                <img className="hover-img" src={product2} />
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
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
                                                <img className="default-img" src={product1} />
                                                <img className="hover-img" src={product1} />
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
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

