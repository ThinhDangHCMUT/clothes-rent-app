import { useState } from "react";
import productsColors from "./../../../utils/data/products-colors";
import productsSizes from "./../../../utils/data/products-sizes";
import CheckboxColor from "./../../products-filter/form-builder/checkbox-color";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { addProduct } from "store/reducers/cart";
import { toggleFavProduct } from "store/reducers/user";
import { ProductType, ProductStoreType } from "types";
import { RootState } from "store";
import Rater from "react-rater";

type ProductContent = {
  product: ProductType;
};

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product.id
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product.id,
      })
    );
  };

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : "",
      price: product.price * (1 - (product.discount! || 0) / 100),
      count: count,
      color: color,
      size: itemSize,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        {/* <h5 className="product__id">Product ID:<br></br>{product.id}</h5> */}
        <span className="bg-color-orange p-1 px-3 text-color-black font-semibold rounded-xl text-sm">
          Sale
        </span>
        <h2 className="product__name !font-semibold">{product.name}</h2>
        <div className="flex gap-10 text-sm">
          <div>
            4.2 <Rater total={5} interactive={false} rating={4.2} />{" "}
          </div>
          <div>6.6k Đánh giá</div>
        </div>

        <div className="mt-5 text-2xl font-semibold">
          <h4>{product.price * (1 - +product?.discount! / 100)} đ/ngày</h4>
          {product.discount && (
            <span className="line-through text-base">
              {product.price} đ/ngày
            </span>
          )}
        </div>
      </div>
      <div className="space-x-2">
        <span className="bg-color-orange-light p-1 px-3 text-color-black font-semibold rounded-xl text-sm">
          Hot
        </span>
        <span className="bg-color-orange-light p-1 px-3 text-color-black font-semibold rounded-xl text-sm">
          Mới nhất
        </span>
        <span className="bg-color-orange-light p-1 px-3 text-color-black font-semibold rounded-xl text-sm">
          Đánh giá cao
        </span>
      </div>

      <div className="product-content__filters mt-5">
        <div className="flex flex-row items-center gap-5">
          <span className="flex !items-center justify-center !mb-0">Size</span>
          <div className="select-wrapper">
            <select onChange={onSelectChange}>
              <option>Choose size</option>
              <option>2XL</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product-filter-item">
        <h5>Quantity:</h5>
        <div className="quantity-buttons">
          <div className="quantity-button">
            <button
              type="button"
              onClick={() => setCount(count - 1)}
              className="quantity-button__btn"
            >
              -
            </button>
            <span>{count}</span>
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className="quantity-button__btn"
            >
              +
            </button>
          </div>

          <button
            type="submit"
            onClick={() => addToCart()}
            className="btn btn--rounded btn--yellow"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={toggleFav}
            className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
          >
            <i className="icon-heart"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
