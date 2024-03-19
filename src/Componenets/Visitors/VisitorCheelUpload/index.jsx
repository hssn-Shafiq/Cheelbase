import React, { useState } from "react";
import { storage, db } from "../../../firebase/Config";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { collection, addDoc } from "@firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// Reference to the Firestore collection
const videoMetadataCollectionRef = collection(db, "visitorcheels");

const VisitorCheelsUpload = () => {
  const [video, setVideo] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [channelName, setChannelName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleVideoChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleProfileImageChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!video) {
      setErrorMessage("Please select a video to upload.");
      return;
    }

    try {
      // Create parent folder 'visitors profile'
      const visitorsProfileRef = ref(storage, 'visitors profile');

      // Create subfolder 'visitors_profile_video'
      const visitorsProfileVideoRef = ref(visitorsProfileRef, 'visitors_profile_cheels');

      // Create subfolder 'images'
      const imagesRef = ref(visitorsProfileVideoRef, 'images');

      // Create subfolder 'videos'
      const videosRef = ref(visitorsProfileVideoRef, 'videos');

      // Upload video
      const videoStorageRef = ref(videosRef, video.name);
      const videoUploadTask = uploadBytesResumable(videoStorageRef, video);

      videoUploadTask.on("state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setErrorMessage("Error uploading video: " + error.message);
          toast.error("Uploading video failed");
        },
        async () => {
          const videoDownloadURL = await getDownloadURL(videoUploadTask.snapshot.ref);
          toast.success("Successfully uploaded video");
          console.log("Video uploaded successfully. URL:", videoDownloadURL);

          // Upload profile image
          let profileImageDownloadURL = null;
          if (profileImage) {
            const imageStorageRef = ref(imagesRef, profileImage.name);
            const imageUploadTask = uploadBytesResumable(imageStorageRef, profileImage);

            await imageUploadTask;

            profileImageDownloadURL = await getDownloadURL(imageUploadTask.snapshot.ref);
            console.log("Profile image uploaded successfully. URL:", profileImageDownloadURL);
          }

          // Store video metadata in Firestore
          const metadata = {
            videoURL: videoDownloadURL,
            imageURL: profileImageDownloadURL,
            title: videoTitle,
            description: videoDescription,
            channelName: channelName,
            timestamp: new Date().toISOString(),
          };

          try {
            await addDoc(videoMetadataCollectionRef, metadata);
            console.log("Video metadata stored successfully in Firestore");
            toast.success("Video metadata stored successfully");
          } catch (error) {
            setErrorMessage("Error storing video metadata: " + error.message);
            toast.error("Storing video metadata failed");
          }
          setUploadSuccess(true);
          setUploadProgress(0);
          setVideo(null); // Reset video state
          setVideoTitle("");
          setVideoDescription(""); // Reset video description state
          setProfileImage(null); // Reset profile image state
          setChannelName(""); // Reset channel name state
        }
      );
    } catch (error) {
      setErrorMessage("Error uploading video: " + error.message);
      toast.error("Uploading video failed");
    }
  };

  return (
    <div className="container mt-5 mb-5 text-start">
      <h2 className="mb-4">Visitor Cheels Uploader</h2>
      <div className="mb-3">
        <label htmlFor="video" className="form-label">Select Video:</label>
        <input  className="form-control" type="file" accept="video/*" onChange={handleVideoChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="profileImage" className="form-label">Select Cover Image:</label>
        <input id="coverImage" className="form-control" type="file" accept="image/*" onChange={handleProfileImageChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="videoTitle" className="form-label">Video Ttile:</label>
        <textarea id="videoTitle" className="form-control" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="videoDescription" className="form-label">Video Description:</label>
        <textarea id="videoDescription" className="form-control" value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="channelName" className="form-label">Channel Name:</label>
        <input id="channelName" className="form-control" type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
      {uploadSuccess && <p>Upload successful!</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <ToastContainer />
    </div>
  );
};

export default VisitorCheelsUpload;
