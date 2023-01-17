import React, { FC } from "react";
import styles from "./Users.module.scss";

interface UsersProps {}

export const Users: FC<UsersProps> = () => {
  return <div className={styles.Users}>Users Component</div>;
};
