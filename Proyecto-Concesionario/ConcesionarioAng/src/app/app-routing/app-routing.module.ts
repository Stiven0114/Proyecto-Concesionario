import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';


import { ListClientesComponent } from '../clientes/list-clientes/list-clientes.component';
import { AddClientesComponent } from './../clientes/add-clientes/add-clientes.component';
import { ListConcesionarioComponent } from '../concesionario/list-concesionario/list-concesionario.component';
import { AddConcesionarioComponent } from './../concesionario/add-concesionario/add-concesionario.component';
import { ListEmpleadoComponent } from '../empleado/list-empleado/list-empleado.component';
import { AddEmpleadoComponent } from './../empleado/add-empleado/add-empleado.component';





const AppRoutes:Routes=[
  {path:"lista-clientes", component: ListClientesComponent},
  {path:"crear-clientes",component: AddClientesComponent},
  {path:"lista-concesionario", component: ListConcesionarioComponent},
  {path:"crear-concesionario",component: AddConcesionarioComponent},
  {path:"lista-empleado", component: ListEmpleadoComponent},
  {path:"crear-empleado",component: AddEmpleadoComponent},

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
