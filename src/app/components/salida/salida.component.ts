import { Vehiculo } from './../../model/vehiculo-modelo';
import { VehiculoService } from './../../services/vehiculo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  @Input() vehiculos: Vehiculo[];
  placa = ''

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
  }

  registrarSalida(placa){
    this.vehiculoService.postRegistrarSalida(placa).subscribe(res => {
      console.log(res);
      this.vehiculos.splice(this.vehiculos.indexOf(placa),1);
    });
  }

  prueba(event: any) {
    alert(event);
  }

}
