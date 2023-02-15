"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = require("../models/producto");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProductos = yield producto_1.Producto.findAll();
    res.json(listProductos);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.Producto.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield producto_1.Producto.findByPk(id);
        if (!product) {
            return res.status(404).json({
                msg: `No existe un producto con el id ${id}`,
            });
        }
        yield product.destroy();
        res.json(product);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Ha ocurrido un error",
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newProduct = yield producto_1.Producto.create(body);
        res.json({ msg: `Producto agregado ${newProduct}` });
        console.log(newProduct);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Ha ocurrido un error",
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const product = yield producto_1.Producto.findByPk(id);
    try {
        product === null || product === void 0 ? void 0 : product.update(body);
        res.json({ msg: `Producto actualizado ${JSON.stringify(product)}` });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            msg: `Ha ocurrido un error ${e}`,
        });
    }
});
exports.updateProduct = updateProduct;
