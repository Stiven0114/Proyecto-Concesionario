import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ApiClientesService } from 'src/app/services/cliente/api-clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit{

  listaClientes:Cliente[]=[];
  cliente={
   id:0,
   nombres:"diego",
   apellidos:"Boada",
   correo:"diego@gmail.com",
   telefono:65656565
  }
 constructor (private api:ApiClientesService){}
 id:number=0;
 condition:boolean=true;

 ngOnInit(): void {
   this.getTodos();
 }
 getTodos():void{
   this.api.traerTodos().subscribe(res=>{
     console.log('>>>>>>>>>>>', res);
     this.listaClientes=res.data;

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
