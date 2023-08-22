import React, { useContext } from "react";
import styles from "./breadcrum.module.css";

const Breadcrum = ({ categories }) => {
  return (
    <div className={styles.breadcrum}>
      {categories &&
        categories.map((category, index) => (
          <span key={index}>
            {category} {index !== categories.length - 1 && ">"}
          </span>
        ))}
    </div>
  );
};

export default Breadcrum;
