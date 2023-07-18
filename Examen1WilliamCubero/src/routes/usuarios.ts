import { Router } from "express";
import UsuariosController from "../controller/UsuarioController";

const routes = Router();

routes.post("", UsuariosController.add);

export default routes;