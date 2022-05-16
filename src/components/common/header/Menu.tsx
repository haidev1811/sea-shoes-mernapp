import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListCategory } from "../../../redux/actions/product/category.action";
import { categoriesState } from "../../../redux/reducers/product/category.reducer";
import { RootState } from "../../../redux/store";
import logo from "../../../assets/images/logo.png";

const Menu = () => {
  const dispatch = useDispatch();
  const listCategory = useSelector<RootState, categoriesState>(
    (state) => state.listCategory
  );
  const { categoryInfo, isFetching } = listCategory;

  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);

  return (
    <div className="menu">
      <div className="wrap"></div>
      <div className="navbars">
        <div className="navbars__img">
          <Link to="/" className="link">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbars__list">
          <ul className="navbars__list-menu">
            <li className="nlmenu__item">
              <span>
                <Link to="/" className="link">
                  Trang chủ
                </Link>
              </span>
            </li>
            <li className="nlmenu__item">
              <span>
                <Link to="/about" className="link">
                  Giới thiệu
                </Link>
              </span>
            </li>
            <li className="nlmenu__item">
              <span>
                <Link to="/product" className="link">
                  Sản phẩm
                </Link>
                <i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </span>
              <ul>
                {isFetching ? (
                  <CircularProgress />
                ) : (
                  categoryInfo?.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/product?category=${item.name}`}
                        className="link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
            <li className="nlmenu__item">
              <span>
                <Link to="/news" className="link">
                  Tin tức
                </Link>
              </span>
            </li>
            <li className="nlmenu__item">
              <span>
                <Link to="/contact" className="link">
                  Liên hệ
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
