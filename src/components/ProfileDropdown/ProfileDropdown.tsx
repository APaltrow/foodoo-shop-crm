import React, { FC, useMemo } from "react";

import { Logout } from "@mui/icons-material";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { getUserState, setUserRole } from "../../redux/slices/userSlice";
import { UserRoles } from "../../types";

import style from "./ProfileDropdown.module.scss";
import { ROLES_LIST } from "../../constants";

export interface ProfileDropdownProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export const ProfileDropdown: FC<ProfileDropdownProps> = ({
  anchorEl,
  handleClose,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userRole } = useAppSelector(getUserState);

  const roles = useMemo(
    () => ROLES_LIST.filter((role) => role.roleId !== userRole),
    [userRole]
  );

  const onRoleSwitch = (role: UserRoles) => {
    dispatch(setUserRole(role));
    navigate("/");
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={Boolean(anchorEl)}
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
      {roles.map((role) => (
        <MenuItem onClick={() => onRoleSwitch(role.roleId)}>
          Switch to {role.roleName}
        </MenuItem>
      ))}

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
