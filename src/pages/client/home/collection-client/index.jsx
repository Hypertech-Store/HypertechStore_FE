import Slider from "react-slick";
import product1 from "../../../../assets/img/product/hm20-pro-1.png";
import product2 from "../../../../assets/img/product/hm20-pro-2.png";
import product3 from "../../../../assets/img/product/hm20-pro-3.png";
import product4 from "../../../../assets/img/product/hm20-pro-4.png";

// Cấu hình cho slider
const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const CollectionsArea = () => {
    return (
        <div className="collections-area pt-50 pb-100">
            <div className="container">
                <div className="collection-wrap">
                    <Slider {...sliderSettings} className="collection-active">
                        {[
                            { img: product1, title: "Home Appliances", products: "25 Products" },
                            { img: product2, title: "Bluetooth Speaker", products: "25 Products" },
                            { img: product3, title: "Security Camera", products: "25 Products" },
                            { img: product4, title: "Computer Accessories", products: "25 Products" },
                        ].map((collection, index) => (
                            <div className="collection-product" key={index}>
                                <div className="collection-img">
                                    <a href="/chi-tiet-san-pham">
                                        <img src={collection.img} alt={collection.title} />
                                    </a>
                                </div>
                                <div className="collection-content text-center">
                                    <span>{collection.products}</span>
                                    <h4>
                                        <a href="/chi-tiet-san-pham">{collection.title}</a>
                                    </h4>
                                    <div className="collection-btn btn-hover btn-only-round">
                                        <a href="#">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CollectionsArea;
