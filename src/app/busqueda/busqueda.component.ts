import { newArray } from '@angular/compiler/src/util';
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
   this.busqueda = this.rutaActual.snapshot.params.medicamento;
   this.detalles = new Array<Detalle>();
   this.firestoreService.obtenerFarmacias().subscribe((response)=>{
     this.farmacias = new Array<Farmacia>();

     response.forEach((item)=>{
       this.farmacias.push({
         docId: item.payload.doc.id,
         nombreFarmacia: item.payload.doc.data()['nombreFarmacia']
       })
     })

     

     this.farmacias.forEach((farmacia)=>{
       this.firestoreService.obtenerMedicamentosPorFarmacia(farmacia.docId).subscribe((response)=>{
        response.forEach((item)=>{
          if ((item.payload.doc.data()['nombreMedicamento'] as String).toLowerCase() 
          == this.busqueda.toLowerCase()) {
            this.detalles.push({
              nombreFarmacia: farmacia.nombreFarmacia,
              precio: item.payload.doc.data()['precio']
            });

            this.detalles.sort((a,b)=> a.precio - b.precio);
          }  
        })
       })
     })
     console.log("detalles");
     
     console.log(this.detalles.length);
   })
  }

}
