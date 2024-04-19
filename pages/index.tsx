"use client";
import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import { Carousel, CarouselContent, CarouselItem } from "@components/ui/swiper";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import useDevice from "hooks/useDevice";
import { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { saveState } from "@utils/localstorage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "@components/form-ui-kit/TextInput";
import { useForm } from "react-hook-form";
import Form from "@components/form-ui-kit/Form";
import { FISRT_EMAIL } from "constants/index";
import FormRow from "@components/form-ui-kit/FormRow";
import { useToast } from "@components/ui/use-toast";
import { CircleX } from "lucide-react";

const CategoryList = [
  {
    name: "Vest, sơ mi nam",
    image: "/images/featured-1.jpg",
  },
  {
    name: "Đầm dạ hội nữ",
    image: "/images/featured-2.jpg",
  },
  {
    name: "Áo dài",
    image: "/images/featured-3.jpg",
  },
  {
    name: "Trang phục Tót nghiệp",
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

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
  })
  .required();

const IndexPage = () => {
  const [openEmail, setOpenEmail] = useState(false);
  const { toast } = useToast();
  const toogleOpenEmail = () => {
    setOpenEmail((item) => !item);
  };

  useEffect(() => {
    const timoutEmailPopup = setTimeout(() => {
      setOpenEmail(true);
    }, 1000);

    // if (loadState(FIRST_VIEW) && loadState(FISRT_EMAIL)) {
    //   setOpenEmail(false);
    // } else {
    //   setOpenEmail(true);
    //   saveState(FIRST_VIEW, true);
    // }
    return () => clearTimeout(timoutEmailPopup);
  }, []);

  const onSubmit = (data: any) => {
    if (data) {
      console.log(data);
      saveState(FISRT_EMAIL, data.email);
      setOpenEmail(false);
      toast({
        title: "Success",
        description: "Thanks for leaving your email! We will contact you soon!",
        duration: 1000000,
      });
    }
  };

  const methods = useForm({
    resolver: yupResolver(schema) as any,
  });

  const { isMobile } = useDevice();
  return (
    <>
      {/* <Dialog open={openEmail} onOpenChange={toogleOpenEmail}>
        <DialogContent className="bg-color-white space-y-4">
          <DialogHeader className="!text-center">
            <DialogTitle className="text-2xl">
              Welcome to my Service!
            </DialogTitle>
            <DialogDescription>
              Hãy để lại Email để chúng tôi có thể hỗ trợ bạn tốt hơn!
            </DialogDescription>
          </DialogHeader>
          <Form methods={methods} onSubmit={onSubmit} className="space-y-3">
            <FormRow>
              <TextInput name="email" required />
              <Button
                type="submit"
                className="bg-color-orange text-color-black"
              >
                Nhập
              </Button>
            </FormRow>
            <DialogFooter></DialogFooter>
          </Form>
        </DialogContent>
      </Dialog> */}
      <Layout>
        {openEmail && (
          <div className="fixed bottom-0 z-50 p-2 ">
            <Card className="bg-color-white shadow-2xl">
              <div className="w-full flex justify-end p-1">
                <CircleX
                  className="hover:opacity-70 cursor-pointer"
                  onClick={toogleOpenEmail}
                />
              </div>
              <CardHeader className="px-3 py-0">
                <CardTitle className="text-center text-color-black text-xl flex justify-center items-center gap-3">
                  <p className="">Your Email</p>
                </CardTitle>
                <CardDescription>
                  <p className="text-center text-sm">
                    Để nhận thông tin mới nhất từ chúng tôi
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-0">
                <div className="p-3 h-full flex items-center justify-center w-full font-semibold text-center">
                  <Form methods={methods} onSubmit={onSubmit}>
                    <FormRow className="!gap-2">
                      <TextInput name="email" required />
                      <Button
                        type="submit"
                        className="bg-color-orange text-color-black"
                      >
                        Subscribe
                      </Button>
                    </FormRow>
                  </Form>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
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
                  <CarouselItem key={index} className="basis-1/4">
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
    </>
  );
};

export default IndexPage;
