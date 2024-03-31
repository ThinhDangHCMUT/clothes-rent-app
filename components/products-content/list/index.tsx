import useSwr from "swr";
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
import { ProductType, ProductTypeList } from "types";
import { useSelector } from "react-redux";
import { RootState } from "store";

const getFilterProductBySearch = (
  searchValue: string,
  product: ProductType[]
) => {
  return product?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const ProductsContent = () => {
  const fetcher = (url: string) => {
    return fetch(url).then((res) => res.json());
  };
  const { data, error } = useSwr("/api/products", fetcher);

  const { search } = useSelector((state: RootState) => state.filter);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {getFilterProductBySearch(search, data).map(
            (item: ProductTypeList) =>
              item && (
                <ProductItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  currentPrice={item.currentPrice}
                  key={item.id}
                  images={item.images}
                />
              )
          )}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
