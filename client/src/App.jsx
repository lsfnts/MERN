import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow } from "@mui/material";
import { useDispatch } from "react-redux";

import { getProducts } from "./actions/products";
import ProductTable from "./components/Table/Table";
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Productos
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <ProductTable></ProductTable>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
