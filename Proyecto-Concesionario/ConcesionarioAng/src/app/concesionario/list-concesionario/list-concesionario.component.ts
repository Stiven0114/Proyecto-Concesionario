import { Component, OnInit } from '@angular/core';
import { Concesionario } from 'src/app/model/Concesionario';
import { ApiConcesionarioService } from 'src/app/services/concesionario/api-concesionario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-concesionario',
  templateUrl: './list-concesionario.component.html',
  styleUrls: ['./list-concesionario.component.css']
})
export class ListConcesionarioComponent implements OnInit{

  listaConcesionario:Concesionario[]=[];
  concesionario={
   id:0,
   nombre:"diego",
   direccion:"Boada",
   telefono:65656565
  }

  constructor (private api:ApiConcesionarioService){}
  id:number=0;
  condition:boolean=true;

  ngOnInit(): void {
    this.getTodos();
  }
  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      console.log('>>>>>>>>>>>', res);
      this.listaConcesionario=res.data;

    });
  }
  delete(id:number):void{
    this.id=id
    this.confirmar()
   }

 confirmar():void{
   Swal.fire({
     title: "Usuarios",
     text: "¿Eliminar?",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonText: "Sí, eliminar",
     cancelButtonText: "Cancelar",
 })
 .then((resultado) => {
     if (resultado.value) {
         // Hicieron click en "Sí"
         this.api.eliminar(this.id).subscribe(res=>{
           console.log("++++++",res);
         });
         console.log("*se elimina la venta*");
     } else  if (resultado.dismiss === Swal.DismissReason.cancel) {
         // Dijeron que no
         console.log("*NO se elimina la venta*");
     }
 });

 }
 editar():void{
   this.condition=false
 }
}
