import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: AngularFirestore) { }
  
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
}


