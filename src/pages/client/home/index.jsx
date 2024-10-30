import SliderClient from "../home/slider-client"
import CollectionsArea from "../home/collection-client"
import SupportArea from "../home/suppoer-client"
import NewArrival from "../home/newArrival-client"
import BannerArea from "../home/banner-client"
import BlogArea from "../home/blog-client"

const HomeClient = () => {
  document.title = "HyperTechStore – Mua sắm hiện đại, trải nghiệm tương lai"
  return (
    <>
      <SliderClient />
      <CollectionsArea />
      <SupportArea />
      <NewArrival />
      <BannerArea />
      <BlogArea />
    </>
  )
}

export default HomeClient