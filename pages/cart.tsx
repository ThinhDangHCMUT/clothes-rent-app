import Layout from "../layouts/Main";
import ShoppingCart from "../components/shopping-cart";
import Breadcrumb from "@components/breadcrumb";

const Products = () => (
  <Layout>
    <Breadcrumb cart />
    <ShoppingCart />
  </Layout>
);

export default Products;
