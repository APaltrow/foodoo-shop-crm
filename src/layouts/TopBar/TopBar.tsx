import React, { FC } from "react";

import { Box, Divider, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { tokens } from "../../theme";

import { useAppDispatch } from "../../hooks/storeHooks";
import { toggleColorMode } from "../../redux/slices/userSlice";

import styles from "./TopBar.module.scss";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onThemeChange = () => {
    dispatch(toggleColorMode());
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        bgcolor: "background.paper",
        borderBottom: `1px solid ${colors.primary[900]}`,

        display: "flex",
        justifyContent: "space-between",
        flex: "1 0 auto",
      }}
      p={2}
    >
      {/* Search bar */}

      <Box
        sx={{
          display: "flex",
          backgroundColor: `${
            theme.palette.mode === "dark"
              ? colors.primary[400]
              : colors.primary[900]
          }`,
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Toggle icons */}

      <Box sx={{ display: "flex", gap: "10px" }}>
        <IconButton onClick={onThemeChange}>
          {theme.palette.mode === "dark" ? (
            <LightModeRoundedIcon />
          ) : (
            <DarkModeRoundedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsActiveRoundedIcon />
        </IconButton>

        <IconButton>
          <SettingsSuggestRoundedIcon />
        </IconButton>

        <IconButton>
          <PersonRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
