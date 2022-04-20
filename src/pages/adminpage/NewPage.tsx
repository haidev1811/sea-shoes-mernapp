import React, { useState } from "react";
import { Sidebar, Navbar } from "../../components";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

interface Props {
  inputs: any;
  title: any;
}

// interface HTMLInputEvent extends Event {
//   target: HTMLInputElement & EventTarget;
// }

const NewPage = ({ inputs, title }: Props) => {
  const [file, setFile] = useState<string>("");

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    // setUploading1(true);

    // try {
    //     const config = {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     };

    //     // const { data } = await axios.post("/api/uploads", formData, config);

    //     setImage1(data);
    //     setUploading1(false);
    // } catch (error) {
    //     setErrorUpload1(error.message);
    //     setUploading1(false);
    // }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? file
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => uploadFileHandler}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input: any) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
