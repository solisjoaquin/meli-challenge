import React from "react";
import styles from "./itemDescription.module.css";
import Spacer from "../spacer";

// Este componente muestra la descripción del producto en la página de detalle. items/:id
// Recibe como props la descripción del producto
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
