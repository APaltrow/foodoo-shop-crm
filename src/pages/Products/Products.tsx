import React, { FC } from "react";
import styles from "./Products.module.scss";

interface ProductsProps {}

export const Products: FC<ProductsProps> = () => {
  return <div className={styles.Products}>Products Component</div>;
};
