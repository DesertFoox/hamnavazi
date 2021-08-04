import React from "react";
import styles from "./Overlay.module.scss";

const LoadingOverlay = (props) => {
  return (
    <div className={styles.global}>
      <div className={styles.dialogContainer}>
        <p className={styles.text}>در حال انجام عملیات</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
