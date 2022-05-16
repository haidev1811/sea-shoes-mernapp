import { Store } from "react-notifications-component";

const successNoti = () => {
  Store.addNotification({
    title: "Thành công",
    type: "success",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
    },
  });
};

const failureNoti = () => {
  Store.addNotification({
    title: "Thất bại",
    type: "danger",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
    },
  });
};

export { successNoti, failureNoti };
