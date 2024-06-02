import { useState } from "react";
import List from "./list";

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Danh sách sản phẩm</h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters"></i>
        </button>
        <form
          className={`products-content__filter ${
            orderProductsOpen ? "products-order-open" : ""
          }`}
        >
          <div className="products__filter__select">
            <h4>Phân loại: </h4>
            <div className="select-wrapper">
              <select>
                <option>Mới</option>
                <option>Cũ</option>
                <option>Thuê nhiều</option>
                <option>Có giảm giá</option>
                <option>Tất cả</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Thứ tự: </h4>
            <div className="select-wrapper">
              <select>
                <option>Phổ biến</option>
                <option>Rẻ nhất</option>
                <option>Đắt nhất</option>
                <option>Đánh giá tốt nhất</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};

export default ProductsContent;
