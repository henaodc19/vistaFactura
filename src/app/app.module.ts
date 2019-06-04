import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './Facturas/factura.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { ingresoFacturaComponent } from './Ingresos facturas/ingresoFactura.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', component: FacturaComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'ingresoFactura', component: ingresoFacturaComponent},
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    ingresoFacturaComponent,
    FilterPipe,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
