import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsInt, IsDate, IsBoolean, Min, Max,Length, IsISO8601 } from 'class-validator';
import { Marca } from './Marca';
import { Color } from './Color';
import { Tipo_Vehiculo } from './TipoVehiculo';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'La placa es requerida' })
  @Length(6, 10, { message: 'La placa debe tener entre 6 y 10 caracteres' })
  placa: string;

  @ManyToOne(() => Marca, (marca) => marca.vehiculos)
  marca: Marca;

  @ManyToOne(() => Color, (color) => color.vehiculos)
  color: Color;

  @Column()
  @IsInt({ message: 'El cilindraje debe ser un valor entero' })
  cilindraje: number;

  @ManyToOne(() => Tipo_Vehiculo, (tipoVehiculo) => tipoVehiculo.vehiculos)
  tipoVehiculo: Tipo_Vehiculo;

  @Column()
  @IsInt({ message: 'La cantidad de pasajeros debe ser un valor entero' })
  @Min(1, { message: 'La cantidad de pasajeros debe ser al menos 1' })
  @Max(100, { message: 'La cantidad de pasajeros no puede ser mayor a 100' })
  cantidadPasajeros: number;

  @Column('date')
  @IsDate({ message: 'La fecha de ingreso debe ser una fecha válida' })
  fecha_ingreso: Date;

  @Column()
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  estado: boolean;
}

