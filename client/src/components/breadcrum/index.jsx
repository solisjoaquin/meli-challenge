import React, { useContext } from "react";
import styles from "./breadcrum.module.css";
import { searchContext } from "../../context/searchContext";

const Breadcrum = ({ categories }) => {
  /* const { categories } = useContext(searchContext); */

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
