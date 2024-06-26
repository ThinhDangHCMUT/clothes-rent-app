"use client";

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
import { Button } from "@components/ui/button";
import { loadState } from "@utils/localstorage";
import { USER_INFO } from "constants/index";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { signOutFirebase } from "@utils/auth";
import { twMerge } from "tailwind-merge";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown";

type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const debouncedSearch = _.debounce(async (data: FilterType) => {
    dispatch(setFilter(data));
  }, 300);
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const userInfo = loadState(USER_INFO);
  console.log("userInfo: ", userInfo);

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
    <header
      className={clsx("site-header !h-20", !onTop ? "site-header--fixed" : "")}
    >
      <div className="container">
        <Link href="/">
          <a>
            {/* <Logo />
              <p className="lg:block hidden text-xl">Costume Rental Service</p> */}
            <img
              src="https://i.ibb.co/JmLjZ2R/439581460-1254376502638315-3938044933412619131-n-removebg-preview.png"
              className="h-12"
              alt=""
            />
          </a>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          <Link href="/products">
            <a className="site-nav-a">Sản phẩm</a>
          </Link>
          <a className="site-nav-a" href="#">
            Tin tức
          </a>
          <a className="site-nav-a" href="#">
            Về chúng tôi
          </a>
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
          {userInfo ? (
            <div
              className={twMerge(
                "ml-5 flex items-center gap-2",
                !onTop && "text-color-black"
              )}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="!z-50">
                  <Avatar>
                    <AvatarImage src={userInfo.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-color-white !z-50">
                  <DropdownMenuLabel>{userInfo.userName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    <IoIosInformationCircleOutline /> Thông tin người dùng
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <CiShoppingCart /> Đơn hàng của tôi
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <CiSettings />
                    Cài đặt
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <BiMessageDetail /> Điều khoản và hỗ trợ
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <MdOutlineFeedback />
                    Góp ý
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={async () => {
                      localStorage.removeItem(USER_INFO);
                      await signOutFirebase();
                      router.push("/login");
                    }}
                  >
                    <IoIosLogOut /> Đăng xuất
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button className="">Đăng nhập</Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="secondary"
                  className="bg-color-orange lg:block hidden"
                >
                  Đăng kí
                </Button>
              </Link>
            </>
          )}
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
