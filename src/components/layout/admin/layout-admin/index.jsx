import { Outlet } from "react-router-dom"
import HeaderAdmin from '../../admin/header-admin';
import FooterAdmin from '../../admin/footer-admin';
// import '../../../../assets/js/chartist/chartist.min.css';
// import '../../../../assets/css/style.css';
// import '../../../../assets/css/responsive.css';
// import '../../../../assets/css/typography.css';

const Dashboard = () => {
    return (
        <>
            <HeaderAdmin />
            <div><Outlet /></div>
            <FooterAdmin />
        </>
    )
}

export default Dashboard