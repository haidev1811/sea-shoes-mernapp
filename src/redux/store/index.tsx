import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  authLoginReducer,
  authRegisterReducer,
} from "../reducers/auth/auth.reducer";
import {
  deleteUserReducer,
  listUserReducer,
  profileUserReducer,
  updateProfileUserReducer,
  updateUserReducer,
  userIdReducer,
} from "../reducers/auth/user.reducer";
import {
  listCategoryReducer,
  detailCategoryReducer,
  createCategoryReducer,
  updateCategoryReducer,
  deleteCategoryReducer,
  categoryReducer,
} from "../reducers/product/category.reducer";
import {
  brandReducer,
  createBrandReducer,
  deleteBrandReducer,
  detailBrandReducer,
  listBrandReducer,
  updateBrandReducer,
} from "../reducers/product/brand.reducer";
import {
  deleteProductReducer,
  detailProductReducer,
  detailProductIdReducer,
  listProductBrandReducer,
  listProductFilterReducer,
  listProductReducer,
  searchProductReducer,
  createProductReducer,
  updateProductReducer,
} from "../reducers/product/product.reducer";
import {
  createNewsReducer,
  deleteNewsReducer,
  detailNewsReducer,
  listNewsReducer,
  newsIdReducer,
  newsReducer,
  updateNewsReducer,
} from "../reducers/news/news.reducer";
import {
  addCartReducer,
  cartReducer,
  deleteCartReducer,
  updateQtyCartReducer,
} from "../reducers/order/cart.reducer";
import {
  cancelOrderReducer,
  createOrderReducer,
  detailOrderReducer,
  myOrderReducer,
  orderReducer,
  updateStatusOrderReducer,
} from "../reducers/order/order.reducer";
import {
  deleteReviewReducer,
  postReviewReducer,
  reviewReducer,
  updateReviewReducer,
} from "../reducers/product/review.reducer";
import {
  deleteCommentReducer,
  postCommentReducer,
  commentReducer,
  updateCommentReducer,
} from "../reducers/news/comment.reducer";
import { newContactReducer } from "../reducers/auth/contact.reducer";

const reducers = combineReducers({
  authLogin: authLoginReducer,
  authRegister: authRegisterReducer,
  listUser: listUserReducer,
  userId: userIdReducer,
  profileUser: profileUserReducer,
  updateProfileUser: updateProfileUserReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
  listCategory: listCategoryReducer,
  category: categoryReducer,
  detailCategory: detailCategoryReducer,
  createCategory: createCategoryReducer,
  updateCategory: updateCategoryReducer,
  deleteCategory: deleteCategoryReducer,
  listBrand: listBrandReducer,
  brand: brandReducer,
  detailBrand: detailBrandReducer,
  createBrand: createBrandReducer,
  updateBrand: updateBrandReducer,
  deleteBrand: deleteBrandReducer,
  listProduct: listProductReducer,
  listProductFilter: listProductFilterReducer,
  listProductBrand: listProductBrandReducer,
  searchProduct: searchProductReducer,
  detailProduct: detailProductReducer,
  detailProductId: detailProductIdReducer,
  createProduct: createProductReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  listNews: listNewsReducer,
  news: newsReducer,
  detailNews: detailNewsReducer,
  newsId: newsIdReducer,
  createNews: createNewsReducer,
  updateNews: updateNewsReducer,
  deleteNews: deleteNewsReducer,
  cart: cartReducer,
  addCart: addCartReducer,
  updateQtyCart: updateQtyCartReducer,
  deleteCart: deleteCartReducer,
  order: orderReducer,
  createOrder: createOrderReducer,
  detailOrder: detailOrderReducer,
  myOrder: myOrderReducer,
  updateStatusOrder: updateStatusOrderReducer,
  cancelOrder: cancelOrderReducer,
  review: reviewReducer,
  postReview: postReviewReducer,
  updateReview: updateReviewReducer,
  deleteReview: deleteReviewReducer,
  comment: commentReducer,
  postComment: postCommentReducer,
  updateComment: updateCommentReducer,
  deleteComment: deleteCommentReducer,
  newContact: newContactReducer,
});

const userInfoFromStorage = localStorage.getItem("sea-user")
  ? JSON.parse(localStorage.getItem("sea-user")!)
  : null;

const initialState = {
  authLogin: {
    authInfo: userInfoFromStorage,
  },
} as {};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
