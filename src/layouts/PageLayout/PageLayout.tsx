import { Typography } from "@mui/material";
import React, { FC } from "react";

import styles from "./PageLayout.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <Typography>Page</Typography>
      {children}
    </div>
  );
};
