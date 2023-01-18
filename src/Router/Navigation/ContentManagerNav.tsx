import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";

import { RoutesList } from "../../types";

export const contentManagerNav = [
  {
    name: "Users",
    icon: <GroupsRoundedIcon color="warning" />,
    route: RoutesList.USERS,
  },
  {
    name: "Products",
    icon: <LunchDiningRoundedIcon color="warning" />,
    route: RoutesList.PRODUCTS,
  },
];
