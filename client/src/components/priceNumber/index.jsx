import React from "react";
import styles from "./priceNumber.module.css";

const PriceNumber = ({ price, className }) => {
  const priceString = price.toString();
  const [integer, decimal] = priceString.split(".");

  const integerWithSeparator = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className={className}>
      $ {integerWithSeparator}
      <span className={styles.itemDecimals}>{decimal}</span>
    </div>
  );
};

export default PriceNumber;
