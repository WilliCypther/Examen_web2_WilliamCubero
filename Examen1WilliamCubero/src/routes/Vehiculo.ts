// index.ts (Archivo de rutas principal)
import { Router } from "express";
import  VehiculoController  from "../controller/VehiculoController";

const routes = Router();

// Ruta para obtener un vehículo por placa
routes.post("", VehiculoController.insertVehiculo);
routes.get("/:placa", VehiculoController.getVehiculoByPlaca);
routes.delete("/:id", VehiculoController.deleteVehiculo);

// Otras rutas para insertar, eliminar, etc.
// ...

export default routes;
