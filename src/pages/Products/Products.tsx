import React, { FC } from "react";

import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import { useNavigate } from "react-router-dom";
import data from "../../data.json";

import styles from "./Products.module.scss";
import { PRODUCT_CATEGORY, PRODUCT_TABLE_HEADINGS } from "../../constants";
import { RoutesList } from "../../types";

interface ProductsProps {}

export const Products: FC<ProductsProps> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Products}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {PRODUCT_TABLE_HEADINGS.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((product) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={product.id}
                    onClick={() =>
                      navigate(`${RoutesList.PRODUCTS}/${product.id}`)
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    {/* NAME */}
                    <TableCell key={`${product.id}_NAME`}>
                      {product.title}
                    </TableCell>

                    {/* DISCOUNT */}
                    <TableCell key={`${product.id}_DISCOUNT`}>
                      {product.discount || 0}
                    </TableCell>

                    {/* CATEGORY */}
                    <TableCell key={`${product.id}_CATEGORY`}>
                      {PRODUCT_CATEGORY[product.category - 1]}
                    </TableCell>

                    {/* RATING */}
                    <TableCell key={`${product.id}_RATING`}>
                      {product.rating}
                    </TableCell>

                    {/* VEGITARIAN */}
                    <TableCell key={`${product.id}_VEGITARIAN`}>
                      {product.isVegitarian ? "yes" : null}
                    </TableCell>

                    {/* REVIEWS */}
                    <TableCell key={`${product.id}_REVIEWS`}>
                      {product.reviews.length}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <IconButton
        onClick={() => navigate(`${RoutesList.PRODUCTS}/new`)}
        color="warning"
        size="large"
        component="div"
        sx={{
          position: "fixed",
          right: 50,
          bottom: 20,
          width: 80,
          height: 80,
        }}
      >
        <AddCircleRoundedIcon
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
    </div>
  );
};
