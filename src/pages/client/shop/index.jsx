
import Breadcrumb from "../shop/breadcrumb"
import Shop from "../shop/shop-area"
const ShopClient = () => {
    document.title = "HyperTechStore – Cửa hàng"
    return (
        <>
            <Breadcrumb />
            <Shop />
        </>
    )
}

export default ShopClient