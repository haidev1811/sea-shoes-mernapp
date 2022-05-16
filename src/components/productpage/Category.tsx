import React, { useEffect } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { categoriesState } from "../../redux/reducers/product/category.reducer";
import { brandsState } from "../../redux/reducers/product/brand.reducer";
import { getListCategory } from "../../redux/actions/product/category.action";
import { getListBrand } from "../../redux/actions/product/brand.action";
import { Link, useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";

interface Props {
  getFilterUrl?: any;
}

const Category = ({ getFilterUrl }: Props) => {
  useEffect(() => {
    $(".cmitem__list-menu .fa-angle-down").on("click", function () {
      $(".cmitem__list-submenu").slideDown();
      $(this).hide();
      $(this).next().show();
    });
    $(".cmitem__list-menu .fa-angle-up").on("click", function () {
      $(".cmitem__list-submenu").slideUp();
      $(this).hide();
      $(this).prev().show();
    });
    $(".category__menu-item .fa-sort-down").on("click", function () {
      $(this).parent().parent().siblings().children(".cmitem__list").slideUp();
      //$(".cmitem__list").slideUp();
      $(this).parent().next().slideToggle();
    });
    $(".category-icon .fa-align-right").on("click", function () {
      $(this).parent().css("right", "256px");
      $(".category__menu").css("right", "0px");
      $(this).hide();
      $(this).next().show();
    });
    $(".category-icon .fa-times").on("click", function () {
      $(this).parent().css("right", "0px");
      $(".category__menu").css("right", "-256px");
      $(this).hide();
      $(this).prev().show();
    });
  }, []);

  const history = useHistory();

  const dispatch = useDispatch();
  const listCategory = useSelector<RootState, categoriesState>(
    (state) => state.listCategory
  );
  const { categoryInfo, isFetching: categoryIsFetching } = listCategory;
  const listBrand = useSelector<RootState, brandsState>(
    (state) => state.listBrand
  );
  const { brandInfo, isFetching: brandIsFetching } = listBrand;

  useEffect(() => {
    dispatch(getListCategory());
    dispatch(getListBrand());
  }, [dispatch]);

  const handleChangeBrandFilter = (brand: any) => {
    history.push(getFilterUrl({ brand: brand }));
  };
  const handleChangeColourFilter = (colour: any) => {
    history.push(getFilterUrl({ colour: colour }));
  };
  const handleChangeSizeFilter = (size: any) => {
    history.push(getFilterUrl({ size: size }));
  };

  return (
    <div className="category__menu col-ct box-shadow">
      <div className="row-ct">
        <div className="category__menu-item category__menu-item-cate">
          <div className="cmitem__head">
            <span>Danh mục</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="cmitem__list">
            <ul className="cmitem__list-menu">
              <li>
                <Link to="/" className="link">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <div>
                  <Link to="/product" className="link">
                    Sản phẩm
                  </Link>
                  <i className="fas fa-angle-down"></i>
                  <i className="fas fa-angle-up"></i>
                </div>
                <ul className="cmitem__list-submenu">
                  {categoryIsFetching ? (
                    <CircularProgress />
                  ) : (
                    categoryInfo?.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={getFilterUrl({ category: item.name })}
                          className="link"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </li>
              <li>
                <Link to="/news" className="link">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category__menu-item category__menu-item-color">
          <div className="cmitem__head">
            <span>Màu sắc</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="cmitem__list">
            <div className="color">
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("yellow")}
              >
                <input type="radio" name="color" id="yellow" />
                <label htmlFor="yellow"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("red")}
              >
                <input type="radio" name="color" id="red" />
                <label htmlFor="red"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("green")}
              >
                <input type="radio" name="color" id="green" />
                <label htmlFor="green"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("blue")}
              >
                <input type="radio" name="color" id="blue" />
                <label htmlFor="blue"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("black")}
              >
                <input type="radio" name="color" id="black" />
                <label htmlFor="black"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("orange")}
              >
                <input type="radio" name="color" id="orange" />
                <label htmlFor="orange"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("white")}
              >
                <input type="radio" name="color" id="white" />
                <label htmlFor="white"></label>
              </div>
              <div
                className="color-item"
                onClick={() => handleChangeColourFilter("violet")}
              >
                <input type="radio" name="color" id="violet" />
                <label htmlFor="violet"></label>
              </div>
            </div>
          </div>
        </div>

        <div className="category__menu-item category__menu-item-size">
          <div className="cmitem__head">
            <span>Kích cỡ</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="cmitem__list">
            <div className="size">
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(35)}
              >
                <input type="radio" name="size" id="s35" />
                <label htmlFor="s35"></label>
                <span>35</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(36)}
              >
                <input type="radio" name="size" id="s36" />
                <label htmlFor="s36"></label>
                <span>36</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(37)}
              >
                <input type="radio" name="size" id="s37" />
                <label htmlFor="s37"></label>
                <span>37</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(38)}
              >
                <input type="radio" name="size" id="s38" />
                <label htmlFor="s38"></label>
                <span>38</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(39)}
              >
                <input type="radio" name="size" id="s39" />
                <label htmlFor="s39"></label>
                <span>39</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(40)}
              >
                <input type="radio" name="size" id="s40" />
                <label htmlFor="s40"></label>
                <span>40</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(41)}
              >
                <input type="radio" name="size" id="s41" />
                <label htmlFor="s41"></label>
                <span>41</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(42)}
              >
                <input type="radio" name="size" id="s42" />
                <label htmlFor="s42"></label>
                <span>42</span>
              </div>
              <div
                className="size-item"
                onClick={() => handleChangeSizeFilter(43)}
              >
                <input type="radio" name="size" id="s43" />
                <label htmlFor="s43"></label>
                <span>43</span>
              </div>
            </div>
          </div>
        </div>

        <div className="category__menu-item category__menu-item-size">
          <div className="cmitem__head">
            <span>Thương hiệu</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="cmitem__list">
            <div className="size">
              {brandIsFetching ? (
                <CircularProgress />
              ) : (
                brandInfo?.map((item, index) => (
                  <div
                    className="size-item"
                    key={index}
                    onClick={() => handleChangeBrandFilter(item.name)}
                  >
                    <input type="radio" name="brand" id={item.slug} />
                    <label htmlFor={item.slug}></label>
                    <span>{item.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="category__menu-item category__menu-item-sort">
          <div className="cmitem__head">
            <span>Sắp xếp</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="cmitem__list">
            <ul className="sort">
              <li>
                <Link to={getFilterUrl({ sort: 0 })} className="link">
                  Mặc định
                </Link>
              </li>
              <li>
                <Link to={getFilterUrl({ sort: 1 })} className="link">
                  A<i className="las la-long-arrow-alt-right"></i>Z
                </Link>
              </li>
              <li>
                <Link to={getFilterUrl({ sort: 2 })} className="link">
                  Z<i className="las la-long-arrow-alt-right"></i>A
                </Link>
              </li>
              <li>
                <Link to={getFilterUrl({ sort: 5 })} className="link">
                  Giá tăng dần
                </Link>
              </li>
              <li>
                <Link to={getFilterUrl({ sort: 6 })} className="link">
                  Giá giảm dần
                </Link>
              </li>
              <li>
                <Link to={getFilterUrl({ sort: 3 })} className="link">
                  Hàng mới nhất
                </Link>
              </li>
              <li>
                <Link to={getFilterUrl({ sort: 4 })} className="link">
                  Hàng cũ nhất
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
