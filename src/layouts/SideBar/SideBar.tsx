import React, { FC, useMemo } from "react";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  useTheme,
  Typography,
} from "@mui/material";

import { tokens } from "../../theme";

import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";
import { useAppSelector } from "../../hooks/storeHooks";
import { getUserState } from "../../redux/slices/userSlice";
import { combineNav } from "../../Router/Navigation";

interface SideBarProps {}

const buttonStyle = {
  width: 180,
  paddingLeft: "30px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
};

const SideBar: FC<SideBarProps> = () => {
  const { userRole } = useAppSelector(getUserState);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigation = useMemo(() => combineNav[userRole], [userRole]);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        backgroundColor: `${colors.primary[400]}`,
        height: "100%",
        width: 200,
      }}
    >
      {/* Menu Header */}

      <Link to="/">
        <Box
          display="flex"
          mb="7px"
          p={2}
          gap="10"
          alignItems="flex-end"
          width="100%"
        >
          <DashboardRoundedIcon fontSize="large" color="warning" />
          <Typography variant="h3" ml={"10px"}>
            FooDoo CRM
          </Typography>
        </Box>
      </Link>

      <Divider />

      {/* Menu List */}

      <List
        sx={{
          width: 200,
          bgcolor: "background.paper",
        }}
        component="nav"
      >
        {navigation.map((link) => (
          <ListItem>
            <Link to={link.route}>
              <Button
                variant="contained"
                startIcon={link.icon}
                sx={{
                  ...buttonStyle,
                }}
              >
                {link.name}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
