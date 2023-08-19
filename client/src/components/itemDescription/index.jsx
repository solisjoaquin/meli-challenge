import React from "react";
import styles from "./itemDescription.module.css";
import Spacer from "../atoms/spacer";

const ItemDescription = ({ description }) => {
  return (
    <div className={styles.productDescriptionContainer}>
      <h3 className={styles.productDescriptionTitle}>
        Descripción del producto
      </h3>
      <Spacer height="25px" />
      <p className={styles.productDescriptionText}>{description}</p>
    </div>
  );
};

export default ItemDescription;
