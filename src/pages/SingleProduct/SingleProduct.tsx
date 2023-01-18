import React, { FC } from "react";
import { useParams } from "react-router-dom";

import data from "../../data.json";

import styles from "./SingleProduct.module.scss";

interface SingleProductProps {}

export const SingleProduct: FC<SingleProductProps> = () => {
  const { id } = useParams();
  const {
    title,
    category,
    description,
    imgURL,
    isVegitarian,
    price,
    rating,
    // discount - not all include
    // =========
    ingredients,
    reviews,
    sizes,
  } = data.filter((product) => product.id === id)[0];

  return (
    <div className={styles.SingleProduct}>
      SingleProduct Component : {title}
    </div>
  );
};
