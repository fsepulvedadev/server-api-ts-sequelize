import { Request, Response } from "express";
import { Producto } from "../models/producto";

export const getProducts = async (req: Request, res: Response) => {
  const listProductos = await Producto.findAll();

  res.json(listProductos);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Producto.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Producto.findByPk(id);
    if (!product) {
      return res.status(404).json({
        msg: `No existe un producto con el id ${id}`,
      });
    }
    await product.destroy();
    res.json(product);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Ha ocurrido un error",
    });
  }
};
export const postProduct = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const newProduct = await Producto.create(body);
    res.json({ msg: `Producto agregado ${newProduct}` });
    console.log(newProduct);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Ha ocurrido un error",
    });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const product = await Producto.findByPk(id);
  try {
    product?.update(body);
    res.json({ msg: `Producto actualizado ${JSON.stringify(product)}` });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: `Ha ocurrido un error ${e}`,
    });
  }
};
