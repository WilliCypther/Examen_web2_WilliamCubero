import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsBoolean } from 'class-validator';
import { Vehiculo } from './Vehiculo';

@Entity()
export class Marca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @Column()
  @IsBoolean({ message: 'El campo "metalizado" necesita ser un tipo booleano' })
  metalizado: boolean;

  @Column()
  @IsBoolean({ message: 'Se necesita que el estado debe ser un tipo booleano' })
  estado: boolean;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.marca)
  vehiculos: Vehiculo[];
}
