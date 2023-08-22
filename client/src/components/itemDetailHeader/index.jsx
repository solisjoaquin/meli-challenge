import React from "react";
import styles from "./itemHeader.module.css";
import Spacer from "../spacer";
import PriceNumber from "../priceNumber";

// Este componente muestra el header del producto en la página de detalle.
// Ej:
// Nuevo - 5 vendidos
// iPhone 11 64 Gb Verde
// $ 99.999
// Botón "Comprar"
const ItemHeader = ({ item }) => {
  return (
    <div className={styles.itemDescriptionHeader}>
      <span className={styles.itemTag}>
        {item.condition} - {item.sold_quantity} vendidos
      </span>
      <Spacer height="10px" />
      <h2 className={styles.productName}>{item.title}</h2>
      <Spacer height="20px" />
      <PriceNumber price={item.price.amount} className={styles.productPrice} />
      <Spacer height="32px" />
      <button className={styles.productButton}>Comprar</button>
    </div>
  );
};

export default ItemHeader;
