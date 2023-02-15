import express from "express";
import { Application, Request, Response } from "express";
import routesProducto from "../routes/producto";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
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
    this.app.get("/", (req: Request, res: Response) => {
      res.json({ msg: "Api Working" });
    });

    this.app.use("/api/productos", routesProducto);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  dbConnect() {
    db.authenticate()
      .then(() => console.log("Database online"))
      .catch((err) => console.log(err));
  }
}

export default Server;
