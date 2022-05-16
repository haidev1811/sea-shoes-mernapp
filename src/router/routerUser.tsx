import {
  AboutPage,
  AccountPage,
  CartPage,
  ContactPage,
  HomePage,
  LoginPage,
  NewsDetailPage,
  NewsPage,
  PaymentPage,
  ProductDetailPage,
  ProductPage,
  SearchPage,
  SignupPage,
} from "../pages";

export const routerUser = [
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
];
