import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { RootState } from "../../redux/store";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import { register } from "../../redux/actions/auth/auth.action";
import fbBtn from "../../assets/images/fb-btn.svg";
import gpBtn from "../../assets/images/gp-btn.svg";
import InputForm from "../common/inputform/InputForm";
import { Link } from "react-router-dom";
import { successNoti, failureNoti } from "../../utils/notifications";

interface valuesInput {
  id: number;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  pattern?: string;
  required: boolean;
}

const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs: Array<valuesInput> = [
    {
      id: 1,
      label: "Tên *",
      name: "firstname",
      type: "text",
      placeholder: "Nhập tên",
      errorMessage: "Tên không được bỏ trống",
      required: true,
    },
    {
      id: 2,
      label: "Họ *",
      name: "lastname",
      type: "text",
      placeholder: "Nhập họ",
      errorMessage: "Họ không được bỏ trống",
      required: true,
    },
    {
      id: 3,
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Bạn phải nhập đúng địa chỉ email",
      required: true,
    },
    {
      id: 4,
      label: "Mật khẩu *",
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      errorMessage:
        "Mật khẩu phải từ 6-20 kí tự và bao gồm ít nhất 1 chữ,1 số và 1 kí tự đặc biệt",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 5,
      label: "Xác nhận mật khẩu *",
      name: "confirmPassword",
      type: "password",
      placeholder: "Nhập lại mật khẩu",
      errorMessage: "Mật khẩu phải trùng nhau!",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const userRegister = useSelector<RootState, authState>(
    (state) => state.authRegister
  );
  const { authInfo, isFetching, error, success } = userRegister;

  useEffect(() => {
    if (authInfo) {
      history.push("/login");
    }
  }, [authInfo, history]);

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  const submitRegisterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      register(values.firstname, values.lastname, values.email, values.password)
    );
  };

  return (
    <div className="signin col-ct">
      <div className="signin__head">Đăng ký</div>
      <div className="signin__form">
        <form className="form" onSubmit={submitRegisterHandler}>
          {inputs.map((input) => (
            <InputForm
              key={input.id}
              {...input}
              value={(values as any)[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="form-btn">
            {isFetching ? (
              <button type="submit">
                <CircularProgress />
              </button>
            ) : (
              <button type="submit">Đăng kí</button>
            )}
          </div>
        </form>
      </div>
      <div className="signin__note">
        Đã có tài khoản, đăng nhập{" "}
        <Link to="/login" className="link">
          tại đây
        </Link>
      </div>
      <div className="signin__social">
        <span>Hoặc đăng nhập tại đây</span>
        <div className="signin__social-link">
          <a href="/" className="link">
            <img src={fbBtn} alt="" />
          </a>
          <a href="/" className="link">
            <img src={gpBtn} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
