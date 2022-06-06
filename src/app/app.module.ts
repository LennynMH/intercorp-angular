import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteDetailFormComponent } from './components/cliente-detail/cliente-detail-form/cliente-detail-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientePromedioComponent } from './components/cliente-promedio/cliente-promedio.component';
import { ClienteDesviacionComponent } from './components/cliente-desviacion/cliente-desviacion.component';
import { ModalComponent } from './components/modal/modal.component';
import { ClienteProyeccionComponent } from './components/cliente-proyeccion/cliente-proyeccion.component';

const appRoute: Routes = [
  {path: 'Clientes', component: ClienteDetailComponent},
  {path: 'Promedio', component: ClientePromedioComponent},
  {path: 'Desviacion', component: ClienteDesviacionComponent},
  {path: 'Proyeccion', component: ClienteProyeccionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClienteDetailComponent,
    ClienteDetailFormComponent,
    NavbarComponent,
    ClientePromedioComponent,
    ClienteDesviacionComponent,
    ModalComponent,
    ClienteProyeccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
