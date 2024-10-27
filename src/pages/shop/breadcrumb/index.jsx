const Breadcrumb = () => {
    return (
        <>
            <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
                <div className="container">
                    <div className="breadcrumb-content text-center">
                        <ul>
                            <li>
                                <a href="/">Trang chủ</a>
                            </li>
                            <li className="active">Cửa hàng </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;