import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsBoolean } from 'class-validator';
import { Vehiculo } from './Vehiculo';

@Entity()
export class Tipo_Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @Column()
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  estado: boolean;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.tipoVehiculo)
  vehiculos: Vehiculo[];
}
