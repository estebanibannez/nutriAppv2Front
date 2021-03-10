import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from './../pipes/pipes.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [CategoriasComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ],
  exports:[
    CategoriasComponent,
    HomeComponent,
    HttpClientModule
  ]
})
export class PagesModule { }
