import React, { FC } from "react";
import styles from "./Orders.module.scss";

interface OrdersProps {}

export const Orders: FC<OrdersProps> = () => {
  return <div className={styles.Orders}>Orders Component</div>;
};
