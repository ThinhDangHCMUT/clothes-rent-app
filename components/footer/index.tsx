import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> Costume Rental Service
            </h6>
            <p>
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
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
                <a href="#">Trạng thái mua hàng</a>
              </li>
              <li>
                <a href="#">Giao hàng</a>
              </li>
              <li>
                <a href="#">Vận chuyển</a>
              </li>
            </ul>
            <ul>
              <li>Thông tin</li>
              <li>
                <a href="#">Mã Khuyến mãi</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
            </ul>
            <ul>
              <li>Hỗ trợ</li>
              <li>
                <a href="#">Chính sách điều khoản</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật </a>
              </li>
              <li>
                <a href="#">Liên hệ </a>
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
