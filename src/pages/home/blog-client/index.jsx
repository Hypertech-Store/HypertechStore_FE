
import blogImage1 from '../../../assets/img/blog/blog-10.jpg';
import blogImage2 from '../../../assets/img/blog/blog-11.jpg';
import blogImage3 from '../../../assets/img/blog/blog-12.jpg';


const BlogArea = () => {
    return (
        <div className="blog-area pb-70">
            <div className="container">
                <div className="section-title-6 mb-50 text-center">
                    <h2>Latest News</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-wrap mb-30 scroll-zoom">
                            <div className="blog-img mb-10">
                                <a href="blog-details.html">
                                    <img src={blogImage1} alt="Blog Post 1" />
                                </a>
                                <span className="red">Lifestyle</span>
                            </div>
                            <div className="blog-content-3 text-center">
                                <h3>
                                    <a href="blog-details.html">Lorem ipsum dolor sit amet cons adipisic elit.</a>
                                </h3>
                                <span>By: <a href="#">Shop Admin</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-wrap mb-30 scroll-zoom">
                            <div className="blog-img mb-10">
                                <a href="blog-details.html">
                                    <img src={blogImage2} alt="Blog Post 2" />
                                </a>
                                <span className="red">Lifestyle</span>
                            </div>
                            <div className="blog-content-3 text-center">
                                <h3>
                                    <a href="blog-details.html">Lorem ipsum dolor sit amet cons adipisic elit.</a>
                                </h3>
                                <span>By: <a href="#">Shop Admin</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-wrap mb-30 scroll-zoom">
                            <div className="blog-img mb-10">
                                <a href="blog-details.html">
                                    <img src={blogImage3} alt="Blog Post 3" />
                                </a>
                                <span className="red">Lifestyle</span>
                            </div>
                            <div className="blog-content-3 text-center">
                                <h3>
                                    <a href="blog-details.html">Lorem ipsum dolor sit amet cons adipisic elit.</a>
                                </h3>
                                <span>By: <a href="#">Shop Admin</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArea;
