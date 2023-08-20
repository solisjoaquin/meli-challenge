import React from "react";
import styles from "./priceNumber.module.css";

const PriceNumber = ({ price, className }) => {
  const [integer, decimal] = price.split(".");

  return (
    <div className={className}>
      {integer}
      <span className={styles.itemDecimals}>{decimal}</span>
    </div>
  );
};

export default PriceNumber;
