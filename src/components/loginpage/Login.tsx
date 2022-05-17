import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { RootState } from "../../redux/store";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import { login } from "../../redux/actions/auth/auth.action";
import fbBtn from "../../assets/images/fb-btn.svg";
import gpBtn from "../../assets/images/gp-btn.svg";
import InputForm from "../common/inputform/InputForm";
import { Link } from "react-router-dom";
import { successNoti, failureNoti } from "../../utils/notifications";
import axios from "../../utils/axios";

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

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs: Array<valuesInput> = [
    {
      id: 1,
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Bạn phải nhập đúng địa chỉ email",
      required: true,
    },
    {
      id: 2,
      label: "Mật khẩu *",
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      errorMessage:
        "Mật khẩu phải từ 6-20 kí tự và bao gồm ít nhất 1 chữ,1 số và 1 kí tự đặc biệt",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
  ];

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector<RootState, authState>(
    (state) => state.authLogin
  );
  const { authInfo, isFetching, error, success } = userLogin;

  useEffect(() => {
    if (authInfo) {
      history.push("/");
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

  const submitLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(values.email, values.password));
  };

  const handleLoginGG = async (googledData: any) => {
    const { data } = await axios({
      method: "POST",
      url: "/auth/google",
      data: { tokenId: googledData.tokenId },
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("sea-user", JSON.stringify(data));
    successNoti();
    window.location.href = "/";
  };

  const handleFailureGG = (result: any) => {
    failureNoti();
  };

  return (
    <div className="signin col-ct">
      <div className="signin__head">Đăng nhập</div>
      <div className="signin__form">
        <form className="form" onSubmit={submitLoginHandler}>
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
              <button type="submit">Đăng nhập</button>
            )}
          </div>
        </form>
      </div>
      <div className="signin__note">
        Chưa có tài khoản, đăng ký{" "}
        <Link to="/signup" className="link">
          tại đây
        </Link>
      </div>
      <div className="signin__social">
        <span>Hoặc đăng nhập tại đây</span>
        <div className="signin__social-link">
          <a href="/" className="link">
            <img src={fbBtn} alt="" />
          </a>
          <GoogleLogin
            className="button-login"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
            buttonText="Google"
            onSuccess={handleLoginGG}
            onFailure={handleFailureGG}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </div>
      <div className="signin__pw">
        <form action="">
          <div className="form-item">
            <label htmlFor="">Email *</label>
            <input type="email" />
          </div>

          <div className="form-btn">
            <button type="submit">Lấy lại mật khẩu</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
