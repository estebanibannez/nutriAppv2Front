import { ValidadoresService } from './../../services/validadores.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent implements OnInit {
  get nombreInvalid() {
    return (
      this.formularioPaciente.get('nombre').invalid &&
      this.formularioPaciente.get('nombre').touched
    );
  }

  get apellidosInvalid() {
    return (
      this.formularioPaciente.get('apellidos').invalid &&
      this.formularioPaciente.get('apellidos').touched
    );
  }

  get direccionInvalid() {
    return (
      this.formularioPaciente.get('datosDireccion.direccion').invalid &&
      this.formularioPaciente.get('datosDireccion.direccion').touched
    );
  }
  get comunaInvalid() {
    return (
      this.formularioPaciente.get('datosDireccion.comuna').invalid &&
      this.formularioPaciente.get('datosDireccion.comuna').touched
    );
  }

  get enfermedades() {
    return this.formularioPaciente.get('enfermedades') as FormArray;
  }

  formularioPaciente: FormGroup;

  paises: any[] = [];

  constructor(private paisService: PaisService,
              private fb: FormBuilder,
              private validadores: ValidadoresService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;

      // agrega un nuevo elemento a la primera posición del arreglo.
      this.paises.unshift({
        nombre: 'Seleccione...',
        codigo: '',
      });
      console.log(this.paises);
    });
  }
  // cargar data dinamicamente en el arreglo de enfermedades.
  // cargarData(){
  //   ['test1', 'test2'].forEach(element =>  this.enfermedades.push( this.fb.control(element)));
  // }


  agregarEnfermedad() {
    this.enfermedades.push(this.fb.control(''));
  }

  borrarEnfermedad(i: number) {
    this.enfermedades.removeAt(i);
  }

  guardarPaciente() {
    return Object.values(this.formularioPaciente.controls).forEach(
      (control) => {
        console.log(this.formularioPaciente);
        // valido en el foreach si control es una instancia de formgroup
        if (control instanceof FormGroup) {
          // recorro el formgroup para disparar el touched.
          Object.values(control.controls).forEach((control) => {
            control.markAllAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      }
    );
  }

  crearFormulario() {
    this.formularioPaciente = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, Validators.minLength(5)]],
      rut: [''],
      edad: [''],
      datosDireccion: this.fb.group({
        direccion: ['', Validators.required],
        comuna: ['', Validators.required],
      }),
      enfermedades: this.fb.array([]),
      telefono: [''],
      email: [
        '',
        [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')],
      ],
      estado_civil: [''],
      ocupacion: [''],
      pais: [this.paises],
      sexo: [''],
      fecha_creacion: [''],
    },
    {
      // TODO: validador de password
      // validators: [this.validadores.equalsPassword('pass1', 'pass2')]
    });
  }
}
