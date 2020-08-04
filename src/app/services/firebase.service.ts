import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: AngularFirestore) { }
  
}
