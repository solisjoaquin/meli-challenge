import React from "react";
import styles from "./itemDetailImage.module.css";

// Este componente muestra la imagen del producto en la página de detalle. items/:id
// Recibe como props el item del producto que contiene la url de la imagen y el título
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
