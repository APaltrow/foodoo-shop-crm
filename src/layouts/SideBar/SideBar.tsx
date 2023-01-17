import React, { FC } from "react";

import Typography from "@mui/material/Typography";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  useTheme,
} from "@mui/material";

import { tokens } from "../../theme";

import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          <Typography variant="h3">FooDoo CRM</Typography>
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
        <ListItem>
          <Link to="/dashboard">
            <Button
              sx={{
                ...buttonStyle,
              }}
              variant="contained"
              startIcon={<PieChartRoundedIcon color="warning" />}
            >
              Dashboard
            </Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/users">
            <Button
              sx={{
                ...buttonStyle,
              }}
              variant="contained"
              startIcon={<GroupsRoundedIcon color="warning" />}
            >
              Users
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/orders">
            <Button
              sx={{
                ...buttonStyle,
              }}
              variant="contained"
              startIcon={<ReceiptLongRoundedIcon color="warning" />}
            >
              Orders
            </Button>
          </Link>
        </ListItem>

        <Divider />
        <ListItem>
          <Link to="/products">
            <Button
              sx={{
                ...buttonStyle,
              }}
              variant="contained"
              startIcon={<LunchDiningRoundedIcon color="warning" />}
            >
              Products
            </Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
