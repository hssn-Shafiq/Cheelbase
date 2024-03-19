import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';

const Qrlogin = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const navigate = useNavigate(); // Import useNavigate hook

  const generateQRCode = async () => {
    // Make API call to server to generate and save QR code
    const response = await fetch('http://localhost:5000/generate-code', {
      method: 'POST',
    });

    if (response.ok) {
      const qrData = await response.json();
      setQrCodeData(qrData);
    } else {
      console.error('Error generating QR code');
    }
  };

  const handleVerification = async () => {
    // Make API call to server to verify code
    const response = await fetch('http://localhost:5000/verify-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: JSON.parse(qrCodeData).id,
        code: verificationCode,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      setVerificationSuccess(result.success);

      if (result.success) {
        // Navigate to the home page upon successful verification
        navigate.push('/Home');
      } else {
        console.error('Incorrect code');
        // Show an error message in the tooltip
        /* other tooltip options */;
      }
    } else {
      console.error('Error verifying code');
    }
  };

  return (
    <div>
      {qrCodeData &&(
      
        <>
          <div>
            <QRCode value={qrCodeData} />
          </div>
          <div>
            <label>
              Enter Code from Authenticator App:
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </label>
            <button onClick={handleVerification}>Verify</button>
          </div>
          {verificationSuccess}
        </>
      )}
    </div>
  );
};

export default Qrlogin;
