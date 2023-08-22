import React from "react";
import styles from "./priceNumber.module.css";

// Este componente muestra el precio con el formato correcto.
// Ej: $ 99.999 (con separador de miles) y los decimales en menor tamaño
// Recibe como props el precio del producto y una clase de la etiqueta padre
// para adaptar el estilo según la página
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
