import {
  AboutPage,
  AccountPage,
  AdminPage,
  BrandAdminPage,
  CartPage,
  CategoryAdminPage,
  ContactPage,
  HomeAdminPage,
  HomePage,
  ListBrandPage,
  ListCategoryPage,
  ListNewsPage,
  ListOrderPage,
  ListProductPage,
  LoginPage,
  NewBrandPage,
  NewCategoryPage,
  NewNewsPage,
  NewProductPage,
  NewsAdminPage,
  NewsDetailPage,
  NewsPage,
  OrderAdminPage,
  PaymentPage,
  ProductAdminPage,
  ProductDetailPage,
  ProductPage,
  SearchPage,
  SignupPage,
  SingleBrandPage,
  SingleCategoryPage,
  SingleNewsPage,
  SingleOrderPage,
  SingleProductPage,
} from "../pages";

export const routerStaff = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/product",
    exact: true,
    component: ProductPage,
  },
  {
    path: "/product/:slug",
    component: ProductDetailPage,
  },
  {
    path: "/news",
    exact: true,
    component: NewsPage,
  },
  {
    path: "/news/:slug",
    component: NewsDetailPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/payment",
    component: PaymentPage,
  },
  {
    path: "/account",
    component: AccountPage,
  },
  {
    path: "/admin",
    component: AdminPage,
    routes: [
      {
        path: "/admin",
        exact: true,
        component: HomeAdminPage,
      },
      {
        path: "/admin/news",
        component: NewsAdminPage,
        routes: [
          {
            path: "/admin/news",
            exact: true,
            component: ListNewsPage,
          },
          {
            path: "/admin/news/add",
            component: NewNewsPage,
          },
          {
            path: "/admin/news/:id",
            component: SingleNewsPage,
          },
        ],
      },
      {
        path: "/admin/product",
        component: ProductAdminPage,
        routes: [
          {
            path: "/admin/product",
            exact: true,
            component: ListProductPage,
          },
          {
            path: "/admin/product/add",
            component: NewProductPage,
          },
          {
            path: "/admin/product/:id",
            component: SingleProductPage,
          },
        ],
      },
      {
        path: "/admin/order",
        component: OrderAdminPage,
        routes: [
          {
            path: "/admin/order",
            exact: true,
            component: ListOrderPage,
          },
          {
            path: "/admin/order/:id",
            component: SingleOrderPage,
          },
        ],
      },
      {
        path: "/admin/brand",
        component: BrandAdminPage,
        routes: [
          {
            path: "/admin/brand",
            exact: true,
            component: ListBrandPage,
          },
          {
            path: "/admin/brand/add",
            component: NewBrandPage,
          },
          {
            path: "/admin/brand/:id",
            component: SingleBrandPage,
          },
        ],
      },
      {
        path: "/admin/category",
        component: CategoryAdminPage,
        routes: [
          {
            path: "/admin/category",
            exact: true,
            component: ListCategoryPage,
          },
          {
            path: "/admin/category/add",
            component: NewCategoryPage,
          },
          {
            path: "/admin/category/:id",
            component: SingleCategoryPage,
          },
        ],
      },
    ],
  },
];
