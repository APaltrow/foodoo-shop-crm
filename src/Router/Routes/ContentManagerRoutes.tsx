import { CreateProduct } from "../../pages/CreateProduct/CreateProduct";
import { Products } from "../../pages/Products/Products";
import { SingleProduct } from "../../pages/SingleProduct/SingleProduct";
import { Users } from "../../pages/Users/Users";
import { RoutesList } from "../../types";

export const contentManagerRoutes = [
  { path: RoutesList.USERS, element: <Users /> },
  { path: RoutesList.PRODUCTS, element: <Products /> },
  { path: `${RoutesList.PRODUCTS}/:id`, element: <SingleProduct /> },
  { path: `${RoutesList.PRODUCTS}/new`, element: <CreateProduct /> },
];
