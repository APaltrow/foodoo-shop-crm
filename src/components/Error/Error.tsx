import { Alert } from "@mui/material";
import React, { FC } from "react";

import style from "./Error.module.scss";

export interface ErrorProps {
  message: string;
}

export const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className={style.error}>
      <Alert severity="error" sx={{ fontSize: 20 }}>
        {message}
      </Alert>
    </div>
  );
};
