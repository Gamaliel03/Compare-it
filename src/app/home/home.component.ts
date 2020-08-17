import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formularioBuscar: FormGroup;

  constructor(
    private fbBusqueda: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioBuscar = this.fbBusqueda.group(
      {
        medicamento: ['',Validators.required]
      }
    )
  }

}
