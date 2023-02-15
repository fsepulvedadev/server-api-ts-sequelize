"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Producto = connection_1.default.define("Producto", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
