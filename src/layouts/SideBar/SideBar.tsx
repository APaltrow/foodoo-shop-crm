import React, { FC, useMemo, useState } from "react";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  useTheme,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import { tokens } from "../../theme";

import { Link, useNavigate } from "react-router-dom";

import style from "./SideBar.module.scss";
import { useAppSelector } from "../../hooks/storeHooks";
import { getUserState } from "../../redux/slices/userSlice";
import { combineNav } from "../../Router/Navigation";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const { userRole } = useAppSelector(getUserState);
  const [isOpened, setOpened] = useState(true);

  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigation = useMemo(() => combineNav[userRole], [userRole]);

  return (
    <div className={isOpened ? style.bar : style.bar_closed}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          height: "100%",
          width: "100%",
          "& 	.MuiDrawer-paper": {
            width: isOpened ? "200px" : "100px",
          },
        }}
      >
        {/* Menu Header */}

        <Box
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "69px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DashboardRoundedIcon fontSize="large" color="warning" />

          {isOpened && (
            <Typography variant="h3" ml={"10px"}>
              FooDoo CRM
            </Typography>
          )}
        </Box>

        <Divider />

        {/* Menu List */}

        <List component="nav">
          {navigation.map((link) => (
            <ListItem key={link.name} sx={{ padding: "0px 5px" }}>
              <ListItemButton
                onClick={() => navigate(link.route)}
                sx={{
                  minHeight: 48,
                  justifyContent: "initial",
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  {link.icon}
                </ListItemIcon>

                <ListItemText
                  primary={link.name}
                  sx={{ opacity: isOpened ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <IconButton
          onClick={() => setOpened((prev) => !prev)}
          sx={{
            width: 40,
            height: 40,
            position: "absolute",
            top: "50%",
            right: 0,
          }}
        >
          {isOpened ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Drawer>
    </div>
  );
};

export default SideBar;
