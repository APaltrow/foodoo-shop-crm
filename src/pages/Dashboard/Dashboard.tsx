import React, { FC } from "react";
import styles from "./Dashboard.module.scss";

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = () => {
  return <div className={styles.Dashboard}>Dashboard Component</div>;
};
