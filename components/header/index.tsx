import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import Logo from "../../assets/icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { RootState } from "store";
import { FilterType, setFilter } from "store/reducers/filter";
import _ from "lodash";
import clsx from "clsx";

type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const debouncedSearch = _.debounce(async (data: FilterType) => {
    dispatch(setFilter(data));
  }, 300);
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const arrayPaths = ["/"];

  const dispatch = useDispatch();

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.scrollY === 0) {
      console.log("window.scrollY: ", window.scrollY);
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={clsx("site-header", !onTop ? "site-header--fixed" : "")}>
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="site-logo">
              <Logo />
              Costume Rental Service
            </h1>
          </a>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <Link href="/products">
            <a>Sản phẩm</a>
          </Link>
          <a href="#">Tin tức</a>
          <a href="#">Về chúng tôi</a>
          <button className="site-nav__btn">
            <p>Account</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              ></i>
              <input
                type="text"
                name="search"
                onChange={(e) => {
                  debouncedSearch({
                    search: e.target.value,
                    type: "",
                    size: "",
                  });
                }}
                placeholder="Enter the product you are looking for"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            ></i>
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </button>
          </Link>
          <Link href="/login">
            <button className="site-header__btn-avatar">
              <i className="icon-avatar"></i>
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span></span>
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
