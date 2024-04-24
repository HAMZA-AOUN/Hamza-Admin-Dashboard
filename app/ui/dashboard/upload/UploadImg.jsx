"use client";
import { useState } from "react";
import styles from "./uploadImg.module.css";
import Image from "next/image";
import { UploadButton } from "../../../utils/uploadthing";

const UploadImg = ({ image }) => {
  const [newImage, setNewImage] = useState(image);
  return (
    <div className={styles.uploadImg}>
      <div className={styles.imgContainer}>
        <Image
          src={newImage || "/noavatar.png"}
          alt="user image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.upload}>
        <div className={styles.upload}>
          <input
            type="text"
            name="img"
            id="user_img"
            value={newImage}
            onChange={() => {}}
            style={{ display: "none" }}
          />
          <UploadButton
            endpoint="imageUploader"
            appearance={{
              button: {
                background: "teal",
              },
            }}
            onClientUploadComplete={(res) => {
              setNewImage(res[0].url);
            }}
            onUploadError={(error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
          Upload User Image
        </div>{" "}
      </div>
    </div>
  );
};

export default UploadImg;
