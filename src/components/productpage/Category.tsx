import React, { useEffect } from "react";
import $ from "jquery";

const Category = () => {
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
                <a href="/" className="link">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Giới thiệu
                </a>
              </li>
              <li>
                <div>
                  <a href="/" className="link">
                    Sản phẩm
                  </a>
                  <i className="fas fa-angle-down"></i>
                  <i className="fas fa-angle-up"></i>
                </div>
                <ul className="cmitem__list-submenu">
                  <li>
                    <a href="/" className="link">
                      Giày Training & Gym
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Giày Basketball
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Giày Running
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Giày Jodan
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="link">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Liên hệ
                </a>
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
              <div className="color-item">
                <input type="checkbox" id="yellow" />
                <label htmlFor="yellow"></label>
              </div>
              <div className="color-item">
                <input type="checkbox" id="red" />
                <label htmlFor="red"></label>
              </div>
              <div className="color-item">
                <input type="checkbox" id="green" />
                <label htmlFor="green"></label>
              </div>
              <div className="color-item">
                <input type="checkbox" id="blue" />
                <label htmlFor="blue"></label>
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
              <div className="size-item">
                <input type="checkbox" id="s35" />
                <label htmlFor="s35"></label>
                <span>35</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s36" />
                <label htmlFor="s36"></label>
                <span>36</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s37" />
                <label htmlFor="s37"></label>
                <span>37</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s38" />
                <label htmlFor="s38"></label>
                <span>38</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s39" />
                <label htmlFor="s39"></label>
                <span>39</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s40" />
                <label htmlFor="s40"></label>
                <span>40</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s41" />
                <label htmlFor="s41"></label>
                <span>41</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s42" />
                <label htmlFor="s42"></label>
                <span>42</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="s43" />
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
              <div className="size-item">
                <input type="checkbox" id="adidas" />
                <label htmlFor="adidas"></label>
                <span>Adidas</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="puma" />
                <label htmlFor="puma"></label>
                <span>Puma</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="nike" />
                <label htmlFor="nike"></label>
                <span>Nike</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="asics" />
                <label htmlFor="asics"></label>
                <span>Asics</span>
              </div>
              <div className="size-item">
                <input type="checkbox" id="balance" />
                <label htmlFor="balance"></label>
                <span>New Balance</span>
              </div>
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
                <a href="/" className="link">
                  Mặc định
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  A<i className="las la-long-arrow-alt-right"></i>Z
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Z<i className="las la-long-arrow-alt-right"></i>A
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Giá tăng dần
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Giá giảm dần
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Hàng mới nhất
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  Hàng cũ nhất
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
