import React, { FC } from "react";

import {
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  useTheme,
} from "@mui/material";
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
import { Logout } from "@mui/icons-material";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onThemeChange = () => {
    dispatch(toggleColorMode());
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <Tooltip title="Color mode">
          <IconButton onClick={onThemeChange}>
            {theme.palette.mode === "dark" ? (
              <LightModeRoundedIcon />
            ) : (
              <DarkModeRoundedIcon />
            )}
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

        <Tooltip title="Profile">
          <IconButton onClick={handleClick}>
            <PersonRoundedIcon />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 3,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Switch to Content Manager</MenuItem>
          <MenuItem>Switch to Delivery</MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default TopBar;
