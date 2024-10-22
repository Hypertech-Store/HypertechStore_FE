import { Outlet } from "react-router-dom"
import HeaderClient from "../header-client"
import SliderClient from "../slider-client"
import CollectionsArea from "../collection-client"
import SupportArea from "../suppoer-client"
import NewArrival from "../newArrival-client"
import BannerArea from "../banner-client"
import BlogArea from "../blog-client"
import FooterClient from "../footer-client"


const LayoutClient = () => {
  return (
    <>
      <HeaderClient />
      <SliderClient />
      <CollectionsArea />
      <SupportArea />
      <NewArrival />
      <BannerArea />
      <BlogArea />
      <div><Outlet /></div>
      <FooterClient />
    </>
  )
}

export default LayoutClient