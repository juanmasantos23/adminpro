import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise((resolve, rejects)=>{
    //   if(false){resolve('Hola mundo');}else{
        
        
    //     rejects('male sal');
    //   };
      


    // });
    // promesa.then(()=>{
    //   console.log('Hey, termine');
    // })
    // .catch(error => console.log('error', error));
    // console.log('fin del init');

  this.getUsuarios().then(usuarios =>{
    console.log(usuarios)
  });


  }

  

  getUsuarios(){
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => body.data);
      
    })
  }
}
