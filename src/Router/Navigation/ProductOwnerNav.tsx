import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";

import { RoutesList } from "../../types";

export const productOwnerNav = [
  {
    name: "Dashboard",
    icon: <PieChartRoundedIcon color="warning" />,
    route: RoutesList.DASHBOARD,
  },
  {
    name: "Users",
    icon: <GroupsRoundedIcon color="warning" />,
    route: RoutesList.USERS,
  },
  {
    name: "Orders",
    icon: <ReceiptLongRoundedIcon color="warning" />,
    route: RoutesList.ORDERS,
  },
  {
    name: "Products",
    icon: <LunchDiningRoundedIcon color="warning" />,
    route: RoutesList.PRODUCTS,
  },
];
