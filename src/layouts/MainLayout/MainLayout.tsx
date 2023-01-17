import React, { FC } from "react";

import { PageLayout } from "../PageLayout/PageLayout";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import style from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={style.layout}>
      <SideBar />
      <div className={style.content}>
        <TopBar />
        <PageLayout>{children}</PageLayout>
      </div>
    </div>
  );
};

export default MainLayout;
