import supportIcon1 from "../../../../assets/img/icon-img/support-5.png";
import supportIcon2 from "../../../../assets/img/icon-img/support-6.png";
import supportIcon3 from "../../../../assets/img/icon-img/support-7.png";
import supportContent1 from "../../../../assets/img/icon-img/support-8.png";
import supportContent2 from "../../../../assets/img/icon-img/support-9.png";
import supportContent3 from "../../../../assets/img/icon-img/support-10.png";
import backgroundImage from "../../../../assets/img/bg/pattern-1.png";

const SupportArea = () => {
    return (
        <div className="suppoer-area bg-img">
            <img src={backgroundImage} className="pattern" alt="Background Pattern" />
            <div className="container-fluid padding-10-row-col">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="support-wrap-3 support-bg-color-1 text-center mb-10">
                            <div className="support-icon-2">
                                <img className="animated" src={supportIcon1} alt="Free shipping icon" />
                            </div>
                            <div className="support-content-3">
                                <img src={supportContent1} alt="Free shipping" />
                                <p>Free shipping on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="support-wrap-3 support-bg-color-2 text-center mb-10">
                            <div className="support-icon-2">
                                <img className="animated" src={supportIcon2} alt="Back guarantee icon" />
                            </div>
                            <div className="support-content-3">
                                <img src={supportContent2} alt="Back guarantee" />
                                <p>Back guarantee under 5 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="support-wrap-3 support-bg-color-3 text-center mb-10">
                            <div className="support-icon-2">
                                <img className="animated" src={supportIcon3} alt="Order over $150 icon" />
                            </div>
                            <div className="support-content-3">
                                <img src={supportContent3} alt="Order over $150" />
                                <p>On every order over $150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportArea;
