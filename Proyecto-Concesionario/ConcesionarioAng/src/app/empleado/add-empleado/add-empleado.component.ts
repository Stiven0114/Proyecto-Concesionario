
import { Empleado } from 'src/app/model/empleado';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiEmpleadoService } from 'src/app/services/empleado/api-empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-Empleado',
  templateUrl: './add-Empleado.component.html',
  styleUrls: ['./add-Empleado.component.css']
})
export class AddEmpleadoComponent  implements OnInit {

  EmpleadoForm=new FormGroup({
      id:new FormControl(''),
      nombres:new FormControl(''),
      apellidos:new FormControl(''),
      correo:new FormControl(''),
      telefono:new FormControl(''),
    });
  constructor(private api:ApiEmpleadoService, private router:Router){}
  ngOnInit(): void{

    }
    addEmpleado():void{
      let empleado={
        id:this.EmpleadoForm.get('id')?.value,
        nombres:this.EmpleadoForm.get('nombres')?.value,
        apellidos:this.EmpleadoForm.get('apellidos')?.value,
        correo:this.EmpleadoForm.get('correo')?.value,
        telefono:this.EmpleadoForm.get('telefono')?.value

      }
        this.api.crearEmpleado(empleado).subscribe(resp=>{
          console.log("#$#$#$#$ ",resp);

           if(resp.status==="ok" && resp.code==="200"){
              Swal.fire('Registro exitoso')
              this.router.navigate(['lista-empleado']);
            }else{
              Swal.fire("Registro fallido: "+ resp.status)
          }

        });
    }
}
