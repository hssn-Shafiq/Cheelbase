import React, { useState } from "react";
import "../QrCode/cheelbase-qr.css";
import { collection, addDoc } from "firebase/firestore";
import { saveUser } from "../../firebase/Api";
import QRCode from "qrcode.react";
import { db, imageDb } from "../../firebase/Config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Componenets/Header";

const QrCode = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [fullname, setFullName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [img, setImg] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to hold user information
  const generateQRCode = async () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const docRef = await addDoc(collection(db, "cheelbase"), {
        code: randomCode,
        timestamp: new Date(),
      });

      const qrData = JSON.stringify({ id: docRef.id, code: randomCode });
      setQrCodeData(qrData);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isverified = handleVerification();

    try {
      const imageId = v4();
      const imgRef = ref(imageDb, `files/${imageId}`);
      await uploadBytes(imgRef, img);
      const downloadURL = await getDownloadURL(imgRef);

      // Save user data with image URL and QR code
      saveUser({
        fullname: fullname,
        image: downloadURL,
        qrCode: qrCodeData,
      });

      console.log('User data:', user);
      if (isverified) {
        // Log in the user after saving data
        toast.success("Navigating to cheelbase Official please wait😊");
        login();
        navigate("/home");

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify({
          fullname: fullname,
          image: downloadURL,
        }));
      }
    } 
    catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleVerification = () => {
    try {
      const parsedQrData = JSON.parse(qrCodeData);
      console.log("Verification Code:", verificationCode);
      console.log("Parsed QR Code Data:", parsedQrData);

      
      if (!verificationCode) {
        toast.error("Please enter the verification code");
        return false;
      } else if (verificationCode === parsedQrData.code) {
        toast.success("Code verified Successfully");
        return true;
      } else {
        toast.error(
          "Code is incorrect, please again enter the verification code "
        );
        return false;
      }
    } catch (error) {
      console.error("Error parsing QR code data:", error);
      toast.error("Error parsing QR code data");
      return false;
    }
  };

  return (
    <div>
      {!qrCodeData ? (
        <button onClick={generateQRCode} className="qrcode">
          Generate QR Code
        </button>
      ) : (
        <>
          <div className="container-sm qr-main p-5 sm-p-0 rounded-3">
            <div className="row content">
              <div className="col-sm-7 p-5 sm-p-0">
                <div className="h2">To setup cheelBase on your computer </div>
                <ol className="pt-2 ">
                  <li>Open cheelBase app on your phone</li>
                  <li>
                    Go to settings by tapping on{" "}
                    <b>
                      MENU ( <i className="fa-solid fa-ellipsis-vertical" /> )
                    </b>{" "}
                    on the Right-hand corner of your device
                  </li>
                  <li>
                    Tap on <b>Linked Devices</b> and then link device
                  </li>
                  <li>Point your phone on this screen to capture QR code</li>
                </ol>
                <div className="link mt-4">
                  <span>
                    or{" "}
                    <a href="/LinkingDevice" target="_blank">
                      link with phone number
                    </a>
                  </span>
                </div>
              </div>
              {/* <div className="col-5 text-center p-5">
                <QRCode value={qrCodeData} height={100} width={1000} />
                <div className="d-flex">
                  <label>
                    Verify your Code:
                    <input
                      type="text"
                      required
                      onChange={(e) => setVerificationCode(e.target.value) }
                    />
                  </label>
                  <button onClick={handleVerification} className="verify">Verify</button>
                </div>
                <div className="fullname">
                  <label htmlFor="fullname">Enter Full Name</label>
                  <input type="text" name="fullname" onChange={(e) => setQrCodeData(JSON.stringify({ fullname: e.target.value }))} />

                </div>
                <div className="image">
                  <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                  <button onClick={handleClick}>Upload Image</button>
                </div>
              </div> */}

              <div className="col-5 text-center p-5">
                <QRCode value={qrCodeData} height={100} width={1000} />
                <div className="d-flex">
                  <label>
                    Verify your Code:
                    <input
                      type="text"
                      required
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                    />
                  </label>
                  <button onClick={handleVerification} className="verify">
                    Verify
                  </button>
                </div>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
           
                  <div className="fullname">
                    <label htmlFor="fullname">Enter Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      // value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="image">
                    <input
                      type="file"
                      onChange={(e) => setImg(e.target.files[0])}
                      required
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QrCode;
