import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formularioBuscar: FormGroup;

  constructor(
    private fbBusqueda: FormBuilder,
    public firestoreService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.formularioBuscar = this.fbBusqueda.group(
      {
        medicamento: ['',Validators.required]
      }
    )
  }

  buscar(){
    this.firestoreService.getMedicamentoID(this.formularioBuscar.value.medicamento)
  }
}

