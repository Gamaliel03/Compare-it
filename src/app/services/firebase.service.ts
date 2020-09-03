import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import { ParamsService } from '../services/params.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private fireStore: AngularFirestore,
    private param: ParamsService,
    public router: Router
    ) { }
  
  obtenerFarmacias(){
    return this.fireStore.collection('farmacias').snapshotChanges();
  }

  obtenerMedicamentosPorFarmacia(farmaciaId: string){
    return this.fireStore.collection('farmacias/'+farmaciaId+'/Medicamentos').snapshotChanges();
  
  }

  obtenerFarmacia(farmaciaId: string){
    return this.fireStore.doc('farmacias/'+farmaciaId).snapshotChanges();

  }

  obtenerUnMedicamentoPorFarmacia(farmaciaId: string, medicamentoId: string){
    return this.fireStore.doc('farmacias/'+farmaciaId+'/Medicamentos/'+medicamentoId).snapshotChanges();
  }

  public getMedicamentoID(nombreMedicamento: String){
    this.fireStore.firestore.collection('medicamentos') .onSnapshot((items)=>{
      items.forEach((x)=>{
        if ((x.data()['nombreMedicamento']as string).toLowerCase() == nombreMedicamento.toLowerCase()) {
          this.param.setData({
            'id' : x.id,
            'nombre' :x.data()['nombreMedicamento'],
            'cantidad' :x.data()['busquedas']
          })
          this.router.navigate(['/busqueda', x.data()['nombreMedicamento']]);
          return x.id;
        }
      })
    });
    return null;
  }

  public actualizarBusqueda(documentId: string, data: any){
    return this.fireStore.collection('medicamentos').doc(documentId).set(data);

  }

    public obtenerBuscados(){
      return this.fireStore.collection('medicamentos').snapshotChanges();
    }
}


