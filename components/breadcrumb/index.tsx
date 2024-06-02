import { fetcher } from "lib/utils";
import { useRouter } from "next/router";
import useSWR from "swr";

const Breadcrumb = ({ cart }: any) => {
  const { data, error } = useSWR("/api/products", fetcher);
  console.log("data: ", data);
  const router = useRouter();
  const id = router.query?.pid;
  const productName = data?.find((item) => item.id === id)?.name;
  const payment = router.pathname.includes("checkout");

  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list !text-color-black">
          <li>
            <a href="/">
              <i className="icon-home !text-color-black text-base"></i>
            </a>
          </li>
          {!cart ? (
            <>
              <li className="cursor-pointer">
                <a href="/products" className="!text-color-black !text-[16px]">
                  Tất cả sản phẩm
                </a>
              </li>
              {productName && (
                <li className="cursor-pointer">
                  <a href={`${id}`} className="!text-color-black !text-[16px]">
                    {productName}
                  </a>
                </li>
              )}
            </>
          ) : (
            <>
              <li className="cursor-pointer">
                <a href="/cart" className="!text-color-black !text-[16px]">
                  Giỏ hàng
                </a>
              </li>
              {payment && (
                <li className="cursor-pointer">
                  <a
                    href="/cart/checkout"
                    className="!text-color-black !text-[16px]"
                  >
                    Thanh toán
                  </a>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
