import { Divider, Typography } from "@mui/material";
import React, { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { titleFormatter } from "../../utils/titleFormatter";

import styles from "./PageLayout.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const location = useLocation();
  const pageTitle = useMemo(
    () => titleFormatter(location.pathname),
    [location]
  );

  return (
    <div className={styles.pageLayout}>
      <Typography mb="10px" variant="h2">
        {pageTitle || `Welcome, Alex! 👋`}
      </Typography>
      <Divider sx={{ marginBottom: "10px" }} />
      {children}
    </div>
  );
};
