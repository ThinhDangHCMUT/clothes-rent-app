import Layout from "../../layouts/Main";
import { useSelector } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { RootState } from "store";
import { useRouter } from "next/router";
import Breadcrumb from "@components/breadcrumb";

const CheckoutPage = () => {
  const router = useRouter();
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });

  return (
    <Layout>
      <Breadcrumb cart />
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">
                  Sign up
                </button>
              </div>

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form__input-row">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Địa chỉ"
                      />
                    </div>
                  </div>

                  <div className="form__input-row">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Họ và tên"
                      />
                    </div>
                  </div>
                  <div className="form__input-row">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="number"
                        placeholder="SĐT"
                      />
                    </div>
                  </div>
                  <div className="form__input-row">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="number"
                        placeholder="CCCD (không bắt buộc)"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/discover.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/ideal-logo.svg" alt="Paypal" />
                  </li>
                </ul>
              </div>

              <div className="block">
                <h3 className="block__title">Delivery method</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/inpost.svg" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dpd.svg" alt="Paypal" />
                    <p>$12.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dhl.svg" alt="Paypal" />
                    <p>$15.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                    <p>$10.00</p>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>{priceTotal} đ</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <button
              type="button"
              className="btn btn--rounded btn--yellow ml-auto"
              onClick={() => {
                router.push({
                  pathname: "/cart/payment",
                  query: {
                    price: priceTotal,
                  },
                });
              }}
            >
              Proceed to payment
            </button>
          </div>
          <div className="cart-actions cart-actions--checkout">
            {/* <a href="/cart" className="cart__btn-back">
              <i className="icon-left"></i> Back
            </a> */}
            <div className="cart-actions__items-wrapper"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
