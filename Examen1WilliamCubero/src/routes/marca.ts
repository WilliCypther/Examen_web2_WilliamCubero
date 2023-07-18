import { Router } from "express";
import MarcaController from "../controller/MarcaController";
import VehiculoController from "../controller/VehiculoController";

const routes = Router();

routes.post("", MarcaController.insertMarca);
routes.get("/:id", MarcaController.getMarcaById);
routes.get("", MarcaController.getAllMarcas);


//routes.post("/marca", MarcaController.getAll);

export default routes;
