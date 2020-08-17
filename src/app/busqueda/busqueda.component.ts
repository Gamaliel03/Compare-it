import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farmacia } from '../models/farmacia';
import { FirebaseService } from '../services/firebase.service';

class Detalle{
  nombreFarmacia: string;
  precio: number;

  constructor(){
    this.nombreFarmacia = this.nombreFarmacia;
    this.precio = this.precio;
  }
}


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public farmacias: Array<Farmacia>;
  public detalles: Array<Detalle>;
  
  public busqueda: string

  constructor(
    public firestoreService: FirebaseService,
    private rutaActual: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.busqueda = this.rutaActual.snapshot.params.medicamento
  }

}
