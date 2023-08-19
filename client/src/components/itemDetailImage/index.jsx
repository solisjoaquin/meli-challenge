import React from "react";
import styles from "./itemDetailImage.module.css";

const ItemDetailImage = ({ item }) => {
  return (
    <div className={styles.productImageContainer}>
      <img
        className={styles.productImage}
        src={item.picture}
        alt={item.title}
      />
    </div>
  );
};

export default ItemDetailImage;
