import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Marca } from "../entity/Marca";
import { AppDataSource } from "../data-source";

class MarcaController {
  static insertMarca = async (req: Request, res: Response) => {
    try {
      const marcaRepository = AppDataSource.getRepository(Marca);
      const nuevaMarca = marcaRepository.create(req.body);
      const marcaGuardada = await marcaRepository.save(nuevaMarca);
      res.status(201).json(marcaGuardada);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al insertar la marca.", error });
    }
  };

  static getMarcaById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      if (!id) {
        return res.status(400).json({ mensaje: "Debe proporcionar el ID de la marca." });
      }

      const marcaRepository = AppDataSource.getRepository(Marca);
    const marca = await marcaRepository.findOne({ where: { id} });
                                                              
      if (!marca) {
        return res.status(404).json({ mensaje: "Marca no encontrada." });
      }

      res.status(200).json(marca);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener la marca.", error });
    }
  };

  static getAllMarcas = async (req: Request, res: Response) => {
    try {
      const marcaRepository = AppDataSource.getRepository(Marca);
      const marcas = await marcaRepository.find();
      res.status(200).json(marcas);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener las marcas.", error });
    }
  };

  // Otros métodos para modificar y eliminar marcas, si es necesario.
}

export default MarcaController;
