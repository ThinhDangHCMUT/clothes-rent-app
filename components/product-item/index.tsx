import Link from "next/link";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import { ProductTypeList } from "types";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
}: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };

  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart"></i>
        </button>

        <Link href={`/product/${id}`}>
          <a>
            <img src={images ? images[0] : ""} alt="product" />
            {discount && <span className="product__discount">{discount}%</span>}
          </a>
        </Link>
      </div>

      <div className="product__description">
        <h3>{name}</h3>
        <div
        // className={
        //   "product__price " + (discount ? "product__price--discount" : "")
        // }
        >
          <h4 className="text-color-red font-semibold">
            {discount ? price * (100 - discount) * 0.01 : price} đ/ngày
          </h4>

          {discount && <span className="line-through">{price} đ/ngày</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
