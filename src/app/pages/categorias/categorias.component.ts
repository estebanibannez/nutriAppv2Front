import { ListOf } from './../../models/listof';
import { Component, OnInit } from '@angular/core';
import {
  Categorias,
  CategoriasResponse,
} from 'src/app/models/categorias-response.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { map } from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  proteinasCarnes = 0;
  // categoriasForm: FormGroup = this.fb.group({
  //   value1: [0, Validators.required],
  //   value2: [0, Validators.required]
  // });
  // public categorias: ListOf<Categorias>;

  proteinasTotales = 0;
  lipidosTotales = 0;
  hdcTotales = 0;
  caloriasTotales = 0;

  public categorias: Categorias[] = [];

  constructor(
    private categoriasService: CategoriasService,
    private fb: FormBuilder
  ) {
    // tslint:disable-next-line: deprecation
    this.categoriasService.getCategorias().subscribe((res) => {
      this.categorias = res.data;
      console.log(this.categorias);
    });
  }

  ngOnInit(): void {}

  calculate(id: string, value) {
    let retorno: boolean;
    this.categorias.forEach((cat) => {
      if (cat._id === id) {
        const protes = parseFloat(cat.proteinas);
        const chos = parseFloat(cat.hdc);
        const lip = parseFloat(cat.lipidos);
        const cal = parseFloat(cat.calorias);

        this.proteinasTotales = protes * parseFloat(value);
        this.hdcTotales = chos * parseFloat(value);
        this.lipidosTotales = lip * parseFloat(value);
        this.caloriasTotales = cal * parseFloat(value);
        retorno = true;
      } else {
        retorno = false;
      }
    });

    return retorno;
  }

  clasificaCat() {}
}
