import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "../../redux/actions/auth/contact.action";
import { contactState } from "../../redux/reducers/auth/contact.reducer";
import { RootState } from "../../redux/store";
import { failureNoti, successNoti } from "../../utils/notifications";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();
  const contact = useSelector<RootState, contactState>(
    (state) => state.newContact
  );
  const { isFetching, error, success } = contact;

  const handlerAddNewContact = (e: any) => {
    e.preventDefault();
    dispatch(addNewContact({ email, phoneNumber, message }));
  };

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  return (
    <div className="contact">
      <div className="container-ct">
        <div className="row-ct">
          <div className="contact__form">
            <form onSubmit={handlerAddNewContact}>
              <div className="form-item">
                <label htmlFor="">
                  Email<span> *</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="">
                  Số điện thoại<span> *</span>
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="">
                  Nội dung <span> *</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="form-btn">
                <button type="submit">
                  {isFetching ? <CircularProgress size="1rem" /> : "Gửi ngay"}
                </button>
              </div>
            </form>
          </div>
          <div className="contact__map">
            <div className="contact__map-content">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5478290767646!2d105.83551131491147!3d21.01075508600809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab87086806b9%3A0x4df6bf67a74eb218!2zMTYwIFAuIFjDoyDEkMOgbiwgUGjGsMahbmcgTGnDqm4sIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1602475451440!5m2!1sen!2s"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
