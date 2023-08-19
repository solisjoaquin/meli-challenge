import React from "react";
import styles from "./item.module.css";
import Spacer from "../atoms/spacer";
import TruckIcon from "../icons/truckIcon";

const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={item.picture} alt={item.title} />

      <div className={styles.itemDescription}>
        <div className={styles.itemDescriptionHeader}>
          <div className={styles.itemDescriptionPriceContainer}>
            <div className={styles.itemDescriptionPrice}>
              {item.price.amount}
            </div>
            {item.free_shipping && (
              <div className={styles.itemDescriptionShipping}>
                <TruckIcon width="15" />
              </div>
            )}
          </div>

          <span className={styles.itemDescriptionLocation}>{item.address}</span>
        </div>
        <Spacer height="15px" />
        <h2 className={styles.itemDescriptionTitle}>{item.title}</h2>
      </div>
    </div>
  );
};

export default Item;