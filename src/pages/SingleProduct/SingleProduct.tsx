import { Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { useParams } from "react-router-dom";

import data from "../../data.json";

import styles from "./SingleProduct.module.scss";

interface SingleProductProps {}

export const SingleProduct: FC<SingleProductProps> = () => {
  const { id } = useParams();
  const {
    title,
    description,
    imgURL,

    category,
    isVegitarian,
    rating,
    // discount - not all include

    price,

    // =========
    ingredients,
    reviews,
    sizes,
  } = data.filter((product) => product.id === id)[0];

  return (
    <div className={styles.singleProduct}>
      <div className={styles.info_top}>
        <div className={styles.info_description}>
          <Typography variant="h3" component="h2" mb={1}>
            {title}
          </Typography>
          <Typography variant="h5" component="div" mb={1}>
            {`ID: ${id}`}
          </Typography>

          <Divider />

          <Typography variant="h6" component="p" mb={1}>
            {description}
          </Typography>
        </div>
        <div className={styles.info_photo}> PHOTO </div>
      </div>
      <Divider sx={{ margin: "20px 0px" }} />
      <div className={styles.info_bot}> lists : REVIEWS </div>
    </div>
  );
};
