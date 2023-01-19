import React, { FC } from "react";

import { useAppDispatch } from "../../hooks/storeHooks";
import { toggleColorMode } from "../../redux/slices/userSlice";

import { Badge, Box, IconButton, Tooltip } from "@mui/material";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { ProfileDropdown } from "../ProfileDropdown";

import style from "./TopBarMenu.module.scss";

export interface TopBarMenuProps {
  mode: string;
}

export const TopBarMenu: FC<TopBarMenuProps> = ({ mode }) => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const onContextMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onContextMenuClose = () => {
    setAnchorEl(null);
  };

  const onThemeChange = () => {
    dispatch(toggleColorMode());
  };

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Tooltip title="Color mode">
        <IconButton onClick={onThemeChange}>
          {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
        </IconButton>
      </Tooltip>

      <Tooltip title="Notifications">
        <IconButton>
          <Badge badgeContent={5} color="info">
            <NotificationsActiveRoundedIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Settings">
        <IconButton>
          <SettingsSuggestRoundedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Profile" onClick={onContextMenuOpen}>
        <IconButton>
          <PersonRoundedIcon />
        </IconButton>
      </Tooltip>

      <ProfileDropdown anchorEl={anchorEl} handleClose={onContextMenuClose} />
    </Box>
  );
};
