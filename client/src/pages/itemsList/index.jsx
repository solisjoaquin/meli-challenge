import { Link } from "react-router-dom";
import { itemsContext } from "../../context/itemsContext";
import { useContext } from "react";

import Item from "../../components/itemList";
import styles from "./itemsList.module.css";
import Breadcrum from "../../components/breadcrum";

const ItemsList = () => {
  const { items } = useContext(itemsContext);

  return (
    <main className={styles.mainContainer}>
      <Breadcrum />
      <div className={styles.listContainer}>
        <ul>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <Link to={`/items/${item.id}`}>
                  <Item item={item} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default ItemsList;
