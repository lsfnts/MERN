import express from 'express';

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from '../controller/products';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

export default router;
