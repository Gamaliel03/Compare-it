import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Farmacia } from'../models/farmacia';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})
export class FarmaciasComponent implements OnInit {
 listaFarmacias: Array<Farmacia>
  constructor(public firestore: FirebaseService) { }

  ngOnInit(): void {  
    this.listaFarmacias = new Array<Farmacia>();

    this.firestore.obtenerFarmacias().subscribe((response)=>{
      response.forEach((farmacia)=>{
        this.listaFarmacias.push(
          { 
            docId: farmacia.payload.doc.id,
             nombreFarmacia: farmacia.payload.doc.data()['nombreFarmacia']
          }
          )
      })
    });
  }

}
