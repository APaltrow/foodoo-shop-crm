import React, { FC } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";

import style from "./Search.module.scss";

export interface SearchProps {
  mode: string;
  darkColor: string;
  lightColor: string;
}

export const Search: FC<SearchProps> = ({ mode, darkColor, lightColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: `${mode === "dark" ? lightColor : darkColor}`,
        borderRadius: "3px",
      }}
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
      <SearchIcon sx={{ m: `10px` }} />
    </Box>
  );
};
