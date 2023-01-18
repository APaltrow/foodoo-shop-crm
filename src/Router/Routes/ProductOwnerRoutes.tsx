import { Orders } from "../../pages/Orders/Orders";
import { Products } from "../../pages/Products/Products";
import { Users } from "../../pages/Users/Users";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { SingleProduct } from "../../pages/SingleProduct/SingleProduct";
import { CreateProduct } from "../../pages/CreateProduct/CreateProduct";
import { RoutesList } from "../../types";

export const productOwnerRoutes = [
  { path: RoutesList.DASHBOARD, element: <Dashboard /> },
  { path: RoutesList.USERS, element: <Users /> },
  { path: RoutesList.ORDERS, element: <Orders /> },
  { path: RoutesList.PRODUCTS, element: <Products /> },
  { path: `${RoutesList.PRODUCTS}/:id`, element: <SingleProduct /> },
  { path: `${RoutesList.PRODUCTS}/new`, element: <CreateProduct /> },
];
