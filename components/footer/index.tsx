import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <img
                src="https://i.ibb.co/JmLjZ2R/439581460-1254376502638315-3938044933412619131-n-removebg-preview.png"
                className="md:h-12 h-8"
                alt=""
              />
            </h6>
            <p>
              Dịch vụ cho thuê trang phục theo sự kiện với nhiều mẫu mã đa dạng
              và độc đáo
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Dành cho bạn</li>
              <li>
                <a href="/products">Sản phẩm</a>
              </li>
              <li>
                <a href="#">Trạng thái đơn thuê</a>
              </li>
              <li>
                <a href="#">Mã khuyến mãi</a>
              </li>
              <li>
                <a href="#">Quy trình thuê và trả hàng</a>
              </li>
            </ul>
            <ul>
              <li>Thông tin và liên hệ</li>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Blog chia sẻ</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
            <ul>
              <li>Điều khoản và chính sách</li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Chính sách cho thuê</a>
              </li>
              <li>
                <a href="#">Chính sách xử lý hư hỏng</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY CYBERITY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
