import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsBoolean, Length } from 'class-validator';
import { Vehiculo } from './Vehiculo';

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @Length(3, 30, { message: 'El nombre debe tener entre 3 y 30 caracteres' })
  nombre: string;

  @Column()
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  estado: boolean;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.color)
  vehiculos: Vehiculo[];
}
