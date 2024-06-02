import { message, QRCode, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../layouts/Main";
import { useRouter } from "next/router";
import customAxios from "lib/axiosInstance";
import CheckoutStatus from "@components/checkout-status";
import Breadcrumb from "@components/breadcrumb";
import { Method } from "@components/method";

const { Title, Paragraph, Text } = Typography;

const Checkout = () => {
  const [qrCode, setQrCode] = useState();
  const [appTransId, setAppTransId] = useState();
  const [secondsToGo, setSecondsToGo] = useState(60);
  const router = useRouter();
  const [payment, setPayment] = useState(false);

  async function createOrder() {
    const price = router.query?.price;
    // create ZLP order
    const res = await customAxios.post("/api/create_order", {
      price,
    });
    setQrCode(res.data.url);
    setAppTransId(res.data.appTransID);
  }
  useEffect(() => {
    // createOrder();
  }, []);

  useEffect(() => {
    let timer = setInterval(() => {
      if (secondsToGo > 0) {
        setSecondsToGo(secondsToGo - 1);
      }
      if (secondsToGo === 0) {
        clearInterval(timer);
        message
          .error("Out of time, please try again!")
          .then(() => router.push("/cart/checkout"));
      }
    }, 1000); // interval check after 1s, simulate a countdown timer
    return () => {
      clearInterval(timer);
    };
  }, [secondsToGo, payment]);

  useEffect(() => {
    let checkPaymentStatus = setInterval(async () => {
      // interval query order ZLP status
      const res = await customAxios.post("/api/query_status", {
        appTransId: appTransId,
      });
      const returnCode = res.data.return_code;
      if (returnCode === 1) {
        clearInterval(checkPaymentStatus);
        router.push("/status/success");
      }
    }, 1000);
    return () => {
      clearInterval(checkPaymentStatus);
    };
  });

  return (
    <Layout>
      <Breadcrumb cart={1} />

      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Thanh toán</h3>
            <CheckoutStatus step="payment" />
          </div>

          <Head>
            <title>My Shopping Cart </title>
          </Head>
          {payment ? (
            <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 flex flex-col justify-center items-center text-center">
              <div className="payment-page">
                <div id="payment-modal">
                  <div
                    id="qr-code"
                    className="flex flex-col justify-center items-center text-center"
                  >
                    <QRCode value={qrCode ?? ""} />
                  </div>
                  <br />
                  <Typography>
                    <Title type="success" level={4}>
                      Waiting for payment ...
                    </Title>
                    <Paragraph>
                      <Spin /> Time to scan QR codes for payment{" "}
                      <Text type="danger">{secondsToGo}</Text> seconds
                    </Paragraph>
                    <br />
                    <Title type="secondary" level={4}>
                      Pay with{" "}
                      <img
                        src="/images/logozlp.png"
                        id="zlp-logo-image"
                        className="checkout-image"
                        alt=""
                      />{" "}
                      by QR code
                    </Title>
                    <br />
                    <div id="payment-steps">
                      <Text strong>Payment Guide: </Text>
                      <br />
                      <br />
                      <ul>
                        <li>
                          <p>
                            Step 1: Open <Text strong>ZaloPay</Text> app
                          </p>
                        </li>
                        <li>
                          <p>
                            Step 2: Select <Text strong>"Thanh Toán"</Text>{" "}
                            <img
                              src="/images/qr-scan-zlp.png"
                              className="checkout-image"
                              alt=""
                            />{" "}
                            and scan QR code
                          </p>
                        </li>
                        <li>
                          <p>
                            Step 3: <Text strong>Confirm payment</Text> on
                            ZaloPay app
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Typography>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-around">
                <ul className="flex flex-col ml-5 gap-3">
                  <div className="text-xl font-bold mb-4">
                    Thông tin đơn hàng
                  </div>
                  <li>
                    <strong>Mã đơn hàng:</strong> {appTransId}
                  </li>
                  <li>
                    <strong>Ngày tạo: </strong>
                    {Date().split(" ").slice(0, 5).join("-")}
                  </li>
                  <li>
                    <strong>Thông tin người nhận:</strong> Trần Huy, Giới tính:
                    Nam
                  </li>
                  <li>
                    {" "}
                    <strong>Địa chỉ</strong>: Trần Xuân Soạn, Q7, HCM
                  </li>
                  <li>
                    {" "}
                    <strong>Phương thức thanh toán</strong> : ZaloPay
                  </li>
                  <li>
                    <strong>Tổng tiền: </strong> {router.query?.price}
                  </li>
                </ul>
                <div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Mã khuyến mãi"
                      className="ring-1 ring-offset-color-text rounded-xl p-2 ml-auto text-xs"
                    />
                  </div>
                  <Method />
                </div>
              </div>
              <div className="flex mt-5">
                <button
                  type="button"
                  className="btn btn--rounded btn--yellow ml-auto"
                  onClick={async () => {
                    setPayment(true);
                    await createOrder();
                  }}
                >
                  Proceed to payment
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
