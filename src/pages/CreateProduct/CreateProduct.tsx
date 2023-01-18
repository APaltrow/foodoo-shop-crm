import React, { FC } from "react";
import styles from "./CreateProduct.module.scss";

interface CreateProductProps {}

export const CreateProduct: FC<CreateProductProps> = () => {
  return <div className={styles.CreateProduct}>CreateProduct Component</div>;
};
