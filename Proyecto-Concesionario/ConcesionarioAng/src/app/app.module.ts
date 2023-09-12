import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { AddClientesComponent } from './clientes/add-clientes/add-clientes.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './templates/header/header.component';
import { MenuComponent } from './templates/menu/menu.component';
import { ApiClientesService } from './services/cliente/api-clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ListConcesionarioComponent } from './concesionario/list-concesionario/list-concesionario.component';
import { AddConcesionarioComponent } from './concesionario/add-concesionario/add-concesionario.component';
import { ApiConcesionarioService } from './services/concesionario/api-concesionario.service';
import { ListEmpleadoComponent } from './empleado/list-empleado/list-empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { ApiEmpleadoService } from './services/empleado/api-empleado.service';




@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    AddClientesComponent,
    HeaderComponent,
    MenuComponent,
    ListConcesionarioComponent,
    AddConcesionarioComponent,
    ListEmpleadoComponent,
    AddEmpleadoComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ApiClientesService,ApiConcesionarioService,ApiEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
