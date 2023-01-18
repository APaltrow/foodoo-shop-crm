import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../hooks/storeHooks";

import { Home } from "../pages/Home/Home";
import { getUserState } from "../redux/slices/userSlice";
import { combineRoutes } from "./Routes";

export const AppRouter = () => {
  const { userRole } = useAppSelector(getUserState);

  const routes = useMemo(() => combineRoutes[userRole], [userRole]);

  return (
    <Routes>
      <Route index element={<Home />} />
      {routes.map((elem, idx) => (
        <Route key={idx} path={elem.path} element={elem.element} />
      ))}
    </Routes>
  );
};
