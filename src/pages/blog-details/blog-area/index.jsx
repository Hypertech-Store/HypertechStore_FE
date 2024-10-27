import { FaRegComments } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { LiaAngleDoubleLeftSolid, LiaAngleDoubleRightSolid } from "react-icons/lia";
import blog1 from "../../../assets/img/blog/blog-details.jpg";
import blog2 from "../../../assets/img/blog/blog-details-2.jpg";
import blog3 from "../../../assets/img/blog/blog-5.jpg";
import blog4 from "../../../assets/img/blog/comment-1.jpg";
import blog5 from "../../../assets/img/blog/comment-2.jpg";
import blog6 from "../../../assets/img/blog/sidebar-1.jpg";
import blog7 from "../../../assets/img/blog/sidebar-2.jpg";
import blog8 from "../../../assets/img/blog/sidebar-3.jpg";
const Blog = () => {

    return (
        <>
            <div className="Blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="blog-details-wrapper ml-20">
                                <div className="blog-details-top">
                                    <div className="blog-details-img">
                                        <img alt src={blog3} />
                                    </div>
                                    <div className="blog-details-content">
                                        <div className="blog-meta-2">
                                            <ul>
                                                <li>22 April, 2018</li>
                                                <li><a href="#">4 <FaRegComments /></a></li>
                                            </ul>
                                        </div>
                                        <h3>14 Emerging Fashion Influencers Who Are Going to Own 2018</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                        <blockquote>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </div>
                                <div className="dec-img-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="dec-img mb-50">
                                                <img alt src={blog1} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="dec-img mb-50">
                                                <img alt src={blog2} />
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="tag-share">
                                    <div className="dec-tag">
                                        <ul>
                                            <li><a href="#">lifestyle ,</a></li>
                                            <li><a href="#">interior ,</a></li>
                                            <li><a href="#">outdoor</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog-share">
                                        <span>share :</span>
                                        <div className="share-social">
                                            <ul>
                                                <li>
                                                    <a className="facebook" href="#">
                                                        <CgFacebook />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="twitter" href="#">
                                                        <RiTwitterXLine />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="instagram" href="#">
                                                        <FaInstagram />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="next-previous-post">
                                    <a href="#"> <LiaAngleDoubleLeftSolid /> prev post</a>
                                    <a href="#">next post <LiaAngleDoubleRightSolid /></a>
                                </div>
                                <div className="blog-comment-wrapper mt-55">
                                    <h4 className="blog-dec-title">comments : 02</h4>
                                    <div className="single-comment-wrapper mt-35">
                                        <div className="blog-comment-img">
                                            <img src={blog4} alt />
                                        </div>
                                        <div className="blog-comment-content">
                                            <h4>Anthony Stephens</h4>
                                            <span>October 14, 2018 </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, </p>
                                            <div className="blog-details-btn">
                                                <a href="blog-details.html">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-comment-wrapper mt-50 ml-120">
                                        <div className="blog-comment-img">
                                            <img src={blog5} alt />
                                        </div>
                                        <div className="blog-comment-content">
                                            <h4>DX Joxova</h4>
                                            <span>October 14, 2018 </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, </p>
                                            <div className="blog-details-btn">
                                                <a href="blog-details.html">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-reply-wrapper mt-50">
                                    <h4 className="blog-dec-title">post a comment</h4>
                                    <form className="blog-form" action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="leave-form">
                                                    <input type="text" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="leave-form">
                                                    <input type="email" placeholder="Email Address " />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="text-leave">
                                                    <textarea placeholder="Message" defaultValue={""} />
                                                    <input type="submit" defaultValue="SEND MESSAGE" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar-style">
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Search </h4>
                                    <div className="pro-sidebar-search mb-55 mt-25">
                                        <form className="pro-sidebar-search-form" action="#">
                                            <input type="text" placeholder="Search here..." />
                                            <button>
                                                <i className="pe-7s-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Recent Projects </h4>
                                    <div className="sidebar-project-wrap mt-30">
                                        <div className="single-sidebar-blog">
                                            <div className="sidebar-blog-img">
                                                <a href="#"><img src={blog6} alt /></a>
                                            </div>
                                            <div className="sidebar-blog-content">
                                                <span>Photography</span>
                                                <h4><a href="#">T- Shart And Jeans</a></h4>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-blog">
                                            <div className="sidebar-blog-img">
                                                <a href="#"><img src={blog7} alt /></a>
                                            </div>
                                            <div className="sidebar-blog-content">
                                                <span>Branding</span>
                                                <h4><a href="#">T- Shart And Jeans</a></h4>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-blog">
                                            <div className="sidebar-blog-img">
                                                <a href="#"><img src={blog8} alt /></a>
                                            </div>
                                            <div className="sidebar-blog-content">
                                                <span>Design</span>
                                                <h4><a href="#">T- Shart And Jeans</a></h4>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-blog">
                                            <div className="sidebar-blog-img">
                                                <a href="#"><img src={blog6} alt /></a>
                                            </div>
                                            <div className="sidebar-blog-content">
                                                <span>Photography</span>
                                                <h4><a href="#">T- Shart And Jeans</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-35">
                                    <h4 className="pro-sidebar-title">Categories</h4>
                                    <div className="sidebar-widget-list mt-20">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Women  <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Men  <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Bags  <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Accessories  <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-50">
                                    <h4 className="pro-sidebar-title">Tag </h4>
                                    <div className="sidebar-widget-tag mt-25">
                                        <ul>
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">For Men</a></li>
                                            <li><a href="#">Women</a></li>
                                            <li><a href="#">Fashion</a></li>
                                        </ul>
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

export default Blog;