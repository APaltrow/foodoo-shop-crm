import React, { FC } from "react";

import { Box, IconButton, InputBase, useTheme } from "@mui/material";

import styles from "./TopBar.module.scss";
import { TopBarMenu } from "../../components/TopBarMenu";
import { tokens } from "../../theme";
import { Search } from "../../components/Search";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "space-between",
        flex: "1 0 auto",
      }}
      p={2}
    >
      {/* Search bar */}

      <Search
        mode={theme.palette.mode}
        darkColor={colors.primary[900]}
        lightColor={colors.primary[400]}
      />

      {/* Toggle icons */}

      <TopBarMenu mode={theme.palette.mode} />
    </Box>
  );
};

export default TopBar;
