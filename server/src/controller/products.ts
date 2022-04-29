import { Request, Response } from 'express';
import ProductModel from '../model/product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct = req.body;
  ProductModel.create(newProduct)
    .then((value) => res.status(201).json(value))
    .catch((reason: Error) => {
      res.status(409).json(reason.message);
    });
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);

    if (product) {
      product.remove().then(() => res.status(204).json({}));
    } else {
      res.status(404).json({ message: 'not found' });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
