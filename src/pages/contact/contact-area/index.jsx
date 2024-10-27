import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoTumblr } from "react-icons/io";
import { RiVimeoFill } from "react-icons/ri";
const Contact = () => {
    return (
        <>
            <div className="contact-area pt-100 pb-100">
                <div className="container">
                    <div className="contact-map mb-10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119588.19365638158!2d105.84982426068927!3d20.500853272939445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ce2beec3890f%3A0x7779b3f0c66b0502!2sApple%20Store!5e0!3m2!1svi!2s!4v1729777483953!5m2!1svi!2s" width={1150} height={350} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                    <div className="custom-row-2">
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-info-wrap">
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>+012 345 678 102</p>
                                        <p>+012 345 678 102</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <FaGlobeAmericas />
                                    </div>
                                    <div className="contact-info-dec">
                                        <p><a href="#">urname@email.com</a></p>
                                        <p><a href="#">urwebsitenaem.com</a></p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <GiPositionMarker />
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>Address goes here, </p>
                                        <p>street, Crossroad 123.</p>
                                    </div>
                                </div>
                                <div className="contact-social text-center">
                                    <h3>Follow Us</h3>
                                    <ul>
                                        <li><a href="#"><CgFacebook /></a></li>
                                        <li><a href="#"><FaPinterest /></a></li>
                                        <li><a href="#"><IoLogoTumblr /></a></li>
                                        <li><a href="#"><RiVimeoFill /></a></li>
                                        <li><a href="#"><RiTwitterXLine /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form">
                                <div className="contact-title mb-30">
                                    <h2>Get In Touch</h2>
                                </div>
                                <form className="contact-form-style" id="contact-form" action="https://template.hasthemes.com/flone/flone/assets/php/mail.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input name="name" placeholder="Name*" type="text" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input name="email" placeholder="Email*" type="email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input name="subject" placeholder="Subject*" type="text" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea name="message" placeholder="Your Message*" defaultValue={""} />
                                            <button className="submit" type="submit">SEND</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;

