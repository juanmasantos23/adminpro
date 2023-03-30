import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any[] = [
  {titulo: 'Principal',
  icono: 'mdi mdi-gauge',
  submenu:  [{titulo: 'Main', url:'/'},
              {titulo: 'ProgressBar', url: 'progress'},
              {titulo: 'Grafica1', url: 'grafica1'},
              {titulo: 'Promesas', url: 'promesas'},
              {titulo: 'RXJS', url: 'rxjs'}
]
  }
  
]

  constructor() { }


}
