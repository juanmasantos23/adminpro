import { Component, OnDestroy } from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';
import {retry, take, map, filter} from 'rxjs/operators'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public internalSub = new Subscription();
ngOnDestroy(): void {
  this.internalSub.unsubscribe();
}
  constructor() {
    
// this.retornaObservable().pipe(retry()).subscribe(valor=>console.log('Subs:', valor),
// (err=>console.warn('error', err)),
// ()=>console.log('Completado')
// );

this.internalSub=this.retornaInterval().subscribe(console.log);

   }

   retornaInterval(): Observable<number>{
    return interval(500)
                      .pipe(
                        map(valor =>  valor + 1),
                        // take(4),
                        filter(valor => (valor >= 2)? true:false)
                        
                        
                      );
    
   }
   retornaObservable():Observable<number>{
    let i = -1;
    const obs$= new Observable<number>(observer=>{
      const intervalo = setInterval(()=>{
        i++;
        
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2){
          clearInterval(intervalo);
          observer.error("llego al valor de 2");
        }
      }, 100)
    });
    return obs$;
   }


}
