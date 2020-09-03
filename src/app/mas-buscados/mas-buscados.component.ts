import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-mas-buscados',
  templateUrl: './mas-buscados.component.html',
  styleUrls: ['./mas-buscados.component.css']
})
export class MasBuscadosComponent implements OnInit {
  public medicamento: Array<any>;

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {
    this.firestoreService.obtenerBuscados().subscribe((snap)=>{
      this.medicamento = new Array<any>();
      snap.forEach((item)=>{
        this.medicamento.push({
          'nombre': item.payload.doc.data()['nombreMedicamento'],
          'cantidad': item.payload.doc.data()['busquedas']
        });

        this.medicamento.sort((a,b)=> b['cantidad']  - a['cantidad']);
      });
    });
  }

}
