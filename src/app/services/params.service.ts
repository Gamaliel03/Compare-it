import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  algo: any;
  
  constructor() { }

  public setData(data: any){
     this.algo = data;
  }

  public getData() : any{
    return this.algo;
  }
  public clean(){
    this.algo = null
  }
}
