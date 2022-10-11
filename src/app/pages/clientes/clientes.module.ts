import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';



@NgModule({
  declarations: [
    AgregarClienteComponent,
    ConsultarClienteComponent,
    EditarClienteComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade-rotating' }),
    // SharedModuleModule,
  ],
})
export class ClientesModule { }
