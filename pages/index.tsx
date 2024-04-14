import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import { Carousel, CarouselContent, CarouselItem } from "@components/ui/swiper";
import Autoplay from "embla-carousel-autoplay";
import { Steps } from "antd";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import useDevice from "hooks/useDevice";

const CategoryList = [
  {
    name: "Sự kiện trang trọng",
    image: "/images/featured-1.jpg",
  },
  {
    name: "Hoá Trang và Cosplay",
    image: "/images/featured-2.jpg",
  },
  {
    name: "Chụp Kỷ Yếu",
    image: "/images/featured-3.jpg",
  },
  {
    name: "Văn Nghệ",
    image: "/images/featured-3.jpg",
  },
  {
    name: "Halloween",
    image: "/images/featured-3.jpg",
  },
];

const WhyChoseMeList = [
  {
    icon: "icon-materials",
    title: "Đa dạng mẫu mã",
  },
  {
    icon: "icon-cash",
    title: "Tiết kiệm chi phí",
  },
  {
    icon: "icon-payment",
    title: 'Không lo "hậu kì"',
  },
  {
    icon: "icon-shipping",
    title: "Nhanh chóng, đơn giản",
  },
];

const StepsList = [
  {
    header: "Bước 1",
    title: "Lựa chọn trang phục",
  },
  { header: "Bước 2", title: "Thiết lập giao hàng và thanh toán" },
  { header: "Bước 3", title: "Nhận hàng và thanh toán" },
  { header: "Bước 4", title: "“Sự kiện ơi, tớ đến đây!”" },
];

const IndexPage = () => {
  const { isMobile } = useDevice();
  return (
    <Layout>
      <PageIntro />

      <div className="section w-full flex justify-center mt-20 flex-col">
        {" "}
        <header className="section__intro">
          <h4>Dịch vụ sản phẩm thịnh hành, độc đáo</h4>
        </header>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {CategoryList.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className="p-5 w-full h-96 bg-cover bg-center bg-no-repeat flex flex-col justify-end gap-2"
                  style={{ backgroundImage: `url(${_.image})` }}
                >
                  <h3 className="text-color-white bg-color-black p-2 bg-opacity-25 w-full font-semibold lg:text-3xl text-xl">
                    {_.name}
                  </h3>
                  <a href="#" className="btn btn--rounded w-fit">
                    Khám phá
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>“Tại sao bạn chọn chúng tôi?”</h4>
          </header>

          <ul className="shop-data-items">
            {WhyChoseMeList.map((_) => (
              <li>
                <i className={_.icon}></i>
                <div className="data-item__content">
                  <h4>{_.title}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Quy trình cho thuê</h4>
          </header>
          <Carousel
            className="w-full"
            opts={{ align: "center", loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
                playOnInit: true,
              }),
            ]}
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            <CarouselContent>
              {[...StepsList].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center text-color-black text-xl">
                          {_.header}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-28 items-center justify-center p-0">
                        <div className="bg-color-orange bg-opacity-15 p-3 h-full flex items-center justify-center w-full font-semibold text-center">
                          <p className="">{_.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
