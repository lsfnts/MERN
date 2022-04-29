import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../..";

interface IProduct {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string[];
}

const ProductTable = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Precio</TableCell>
          <TableCell>Cantidad</TableCell>
          <TableCell>Descripción</TableCell>
          <TableCell>Categoria</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((item: IProduct) => {
          return (
            <tr key={item.name}>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.category}</TableCell>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
