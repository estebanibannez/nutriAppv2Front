import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from './../pipes/pipes.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoriasComponent, HomeComponent, PacientesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CategoriasComponent,
    HomeComponent,
    HttpClientModule
  ]
})
export class PagesModule { }
