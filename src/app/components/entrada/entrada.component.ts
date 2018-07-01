import { VehiculoService } from './../../services/vehiculo.service';
import { Vehiculo } from './../../model/vehiculo-modelo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  placa = '';
  cilindraje;
  @Output() vehiculoGuardado = new EventEmitter<boolean>(); 

  vehiculos: Vehiculo[];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
  }

  registrarEntrada() {
    const vehiculo = this.crearVehiculo(this.cilindraje);
    this.vehiculoService.postRegistrarIngreso(vehiculo).subscribe(res => {
      this.vehiculoService.getVehiculos().subscribe(res => {
        this.vehiculoGuardado.emit();
        console.log(res);
      });
    });
  }

  crearVehiculo(cilindraje) {
    const tipo = this.validarTipo(cilindraje);
    const vehiculo: Vehiculo = {
      placa: this.placa,
      tipo: tipo,
      cilindraje: this.cilindraje
    }
    return vehiculo;
  }

  validarTipo(cilindraje) {
    return cilindraje ? 'M' : 'C';
  }

}
