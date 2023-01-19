import React, { FC } from "react";

import { useAppSelector } from "../../hooks/storeHooks";
import { getUserState } from "../../redux/slices/userSlice";

import { Typography, useTheme } from "@mui/material";

import styles from "./Home.module.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { userRole } = useAppSelector(getUserState);
  const theme = useTheme();

  return (
    <div className={styles.Home}>
      <Typography variant="h4" color={theme.palette.success.main}>
        {`You are logged in as ${userRole}`}
      </Typography>
    </div>
  );
};
