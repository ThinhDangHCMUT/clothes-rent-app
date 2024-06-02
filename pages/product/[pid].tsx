import { GetServerSideProps } from "next";

import { useState } from "react";
import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import { server } from "../../utils/server";

// types
import { ProductType } from "types";

type ProductPageType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export const policyProduct = [
  {
    id: 1,
    name: "Quy trình thuê và trả hàng ",
    icon: "https://cdn-icons-png.flaticon.com/512/9496/9496238.png",
  },
  {
    id: 2,
    name: "Chính sách phạt trễ hạn",
    icon: "https://cdn-icons-png.flaticon.com/512/9644/9644323.png",
  },
  {
    id: 3,
    name: "Liên hệ hỗ trợ ",
    icon: "https://cdn-icons-png.flaticon.com/512/1067/1067566.png",
  },
];

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState("description");

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <div className="gap-5 flex flex-col md:mb-0 mb-10 ">
              <Gallery images={product.images} />
            </div>
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock("description")}
                className={`btn btn--rounded ${
                  showBlock === "description" ? "btn--active" : ""
                }`}
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--rounded ${
                  showBlock === "reviews" ? "btn--active" : ""
                }`}
              >
                Reviews (2)
              </button>
            </div>

            <Description show={showBlock === "description"} />
            <Reviews product={product} show={showBlock === "reviews"} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
