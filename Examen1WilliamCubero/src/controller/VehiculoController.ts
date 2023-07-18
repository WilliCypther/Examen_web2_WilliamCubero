import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vehiculo } from "../entity/Vehiculo";
import { AppDataSource } from "../data-source";

class VehiculoController {
  static insertVehiculo = async (req: Request, res: Response) => {
    try {
      const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
      const nuevoVehiculo = vehiculoRepository.create(req.body);
      const vehiculoGuardado = await vehiculoRepository.save(nuevoVehiculo);
      res.status(201).json(vehiculoGuardado);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al insertar el vehículo.", error });
    }
  };

  static getVehiculoByPlaca = async (req: Request, res: Response) => {
    try {
      const placa = req.params.placa;

      if (!placa) {
        return res.status(400).json({ mensaje: "Debe proporcionar la placa del vehículo." });
      }

      const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
      const vehiculo = await vehiculoRepository.findOne({ where: { placa } });

      if (!vehiculo) {
        return res.status(404).json({ mensaje: "Vehículo no encontrado." });
      }

      res.status(200).json(vehiculo);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener el vehículo.", error });
    }
  };

  static deleteVehiculo = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      if (!id) {
        return res.status(400).json({ mensaje: "Debe proporcionar el ID del vehículo." });
      }

      const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
      const vehiculo = await vehiculoRepository.findOne({ where: { id} });

      if (!vehiculo) {
        return res.status(404).json({ mensaje: "Vehículo no encontrado." });
      }

      await vehiculoRepository.delete(id);
      res.status(200).json({ mensaje: "Vehículo eliminado correctamente." });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al eliminar el vehículo.", error });
    }
  };
}

export default VehiculoController;
