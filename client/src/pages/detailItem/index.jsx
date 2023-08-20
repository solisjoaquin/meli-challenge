import { getItem } from "../../actions/api";
import { useLoaderData } from "react-router-dom";

import styles from "./detailItem.module.css";
import Breadcrum from "../../components/breadcrum";
import ItemHeader from "../../components/itemDetailHeader";
import ItemDescription from "../../components/itemDescription";
import ItemDetailImage from "../../components/itemDetailImage";

export async function loader({ params }) {
  const response = await getItem(params.id);
  const item = response.item;
  const categories = response.categories;
  return { item, categories };
}

const DetailItem = () => {
  const { item, categories } = useLoaderData();

  return (
    <div className={styles.mainContainer}>
      <Breadcrum categories={categories} />
      <div className={styles.productContainer}>
        <div className={styles.productTopContainer}>
          <ItemDetailImage item={item} />
          <ItemHeader item={item} />
        </div>

        <ItemDescription description={item.description} />
      </div>
    </div>
  );
};

export default DetailItem;
