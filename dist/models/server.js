"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_1 = __importDefault(require("../routes/producto"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = `${process.env.PORT || 3001} `;
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port", this.port);
            console.log("Server running on port", this.port);
        });
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.json({ msg: "Api Working" });
        });
        this.app.use("/api/productos", producto_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        connection_1.default.authenticate()
            .then(() => console.log("Database online"))
            .catch((err) => console.log(err));
    }
}
exports.default = Server;
