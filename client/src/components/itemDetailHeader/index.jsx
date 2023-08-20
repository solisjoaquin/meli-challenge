import React from "react";
import styles from "./itemHeader.module.css";
import Spacer from "../atoms/spacer";
import PriceNumber from "../priceNumber";

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
