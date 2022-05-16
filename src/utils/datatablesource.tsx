export const brandColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  {
    field: "image",
    headerName: "Ảnh",
    width: 230,
    renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="" />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Tên thương hiệu",
    width: 230,
  },
];

export const categoryColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  {
    field: "name",
    headerName: "Tên danh mục",
    width: 230,
  },
];

export const productColumns = [
  { field: "_id", headerName: "ID", width: 80 },
  {
    field: "image1",
    headerName: "Sản phẩm",
    width: 230,
    renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image1} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "price", headerName: "Giá", width: 120 },
  { field: "inStock", headerName: "Còn", width: 120 },
  { field: "discount", headerName: "Giảm giá", width: 120 },
  { field: "brand", headerName: "Thương hiệu", width: 120 },
];

export const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "avatar",
    headerName: "Người dùng",
    width: 300,
    renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.avatar} alt="avatar" />
          {`${params.row.firstname} ${params.row.lastname}`}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "role",
    headerName: "Quyền hạn",
    width: 160,
    renderCell: (params: any) => {
      return params.row.role[0] === "admin" ? (
        <div>Quản trị viên</div>
      ) : params.row.role[0] === "staff" ? (
        <div>Nhân viên</div>
      ) : (
        <div>Khách hàng</div>
      );
    },
  },
];

export const newsColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "imgTitle",
    headerName: "Bài viết",
    width: 400,
    renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imgTitle} alt="" />
          {params.row.title}
        </div>
      );
    },
  },
  { field: "author", headerName: "Tác giả", width: 150 },
];

//template select
export const colours = [
  {
    id: "1",
    name: "Đỏ",
    value: "red",
  },
  {
    id: "2",
    name: "Vàng",
    value: "yellow",
  },
  {
    id: "3",
    name: "Trắng",
    value: "white",
  },
  {
    id: "4",
    name: "Đen",
    value: "black",
  },
  {
    id: "5",
    name: "Xanh",
    value: "blue",
  },
  {
    id: "6",
    name: "Lục",
    value: "green",
  },
  {
    id: "7",
    name: "Cam",
    value: "orange",
  },
  {
    id: "8",
    name: "Tím",
    value: "violet",
  },
];

export const sizes = [
  {
    id: "1",
    name: "35",
    value: "35",
  },
  {
    id: "2",
    name: "36",
    value: "36",
  },
  {
    id: "3",
    name: "37",
    value: "37",
  },
  {
    id: "4",
    name: "38",
    value: "38",
  },
  {
    id: "5",
    name: "39",
    value: "39",
  },
  {
    id: "6",
    name: "40",
    value: "40",
  },
  {
    id: "7",
    name: "41",
    value: "41",
  },
  {
    id: "8",
    name: "42",
    value: "42",
  },
  {
    id: "9",
    name: "43",
    value: "43",
  },
];

export const types = [
  {
    id: 1,
    name: "Trẻ em",
    value: "kid",
  },
  {
    id: 2,
    name: "Cho nam",
    value: "men",
  },
  {
    id: 3,
    name: "Cho nữ",
    value: "women",
  },
];

export const payments = [
  {
    id: 1,
    name: "Chưa thanh toán",
    value: "unpaid",
  },
  {
    id: 2,
    name: "Thất bại",
    value: "failed",
  },
  {
    id: 3,
    name: "Hết hạn",
    value: "expired",
  },
  {
    id: 4,
    name: "Đã thanh toán",
    value: "paid",
  },
  {
    id: 5,
    name: "Hoàn tiền",
    value: "refunding",
  },
  {
    id: 6,
    name: "Đã hoàn tiền",
    value: "refunded",
  },
];

export const deliveries = [
  {
    id: 1,
    name: "Chưa giao hàng",
    value: "unfulfilled",
  },
  {
    id: 2,
    name: "Đang giao hàng",
    value: "shipping",
  },
  {
    id: 3,
    name: "Đã giao hàng",
    value: "shipped",
  },
  {
    id: 3,
    name: "Đã đến",
    value: "arrived",
  },
  {
    id: 3,
    name: "Đã nhận hàng",
    value: "colleted",
  },
  {
    id: 3,
    name: "Trả hàng",
    value: "returning",
  },
];

//temporary data
export const toVND = (price: any) => {
  let vnd =
    typeof price === "undefined"
      ? 0
      : price.toLocaleString("vi-VN", {
          currency: "VND",
        });
  return vnd;
};
export const checkPaymentStatus = (paymentStatus: string) => {
  let status;
  switch (paymentStatus) {
    case "unpaid":
      status = "Chưa thanh toán";
      break;
    case "failed":
      status = "Thất bại";
      break;
    case "expired":
      status = "Hết hạn";
      break;
    case "paid":
      status = "Đã thanh toán";
      break;
    case "refunding":
      status = "Hoàn tiền";
      break;
    case "refunded":
      status = "Đã hoàn tiền";
      break;
    default:
      break;
  }
  return status;
};

export const checkDeliveryStatus = (deliveryStatus: string) => {
  let status;
  switch (deliveryStatus) {
    case "unfulfilled":
      status = "Chưa giao hàng";
      break;
    case "shipping":
      status = "Đang giao hàng";
      break;
    case "shipped":
      status = "Đã giao hàng";
      break;
    case "arrived":
      status = "Đã đến";
      break;
    case "colleted":
      status = "Đã nhận hàng";
      break;
    case "returning":
      status = "Trả hàng";
      break;
    default:
      break;
  }
  return status;
};

export const orderColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "fullname",
    headerName: "Tên khách hàng",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
  },
  {
    field: "phoneNumber",
    headerName: "Số điện thoại",
    width: 80,
  },
  {
    field: "totalPrice",
    headerName: "Tổng tiền",
    width: 100,
    renderCell: (params: any) => {
      return <>{toVND(params.row.totalPrice)}</>;
    },
  },
  {
    field: "shippingPrice",
    headerName: "Phí ship",
    width: 100,
    renderCell: (params: any) => {
      return <>{toVND(params.row.shippingPrice)}</>;
    },
  },
  {
    field: "paymentStatus",
    headerName: "Tình trạng thanh toán",
    width: 130,
    renderCell: (params: any) => {
      return (
        <div className={`cellWithStatus ${params.row.paymentStatus}`}>
          {checkPaymentStatus(params.row.paymentStatus)}
        </div>
      );
    },
  },
  {
    field: "deliveryStatus",
    headerName: "Tình trạng giao hàng",
    width: 130,
    renderCell: (params: any) => {
      return (
        <div className={`cellWithStatus ${params.row.deliveryStatus}`}>
          {checkDeliveryStatus(params.row.deliveryStatus)}
        </div>
      );
    },
  },
];
