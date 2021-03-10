export interface CategoriasResponse {
  status:  number;
  message: string;
  data:    Categorias[];
}

export interface Categorias {
  _id: string;
  id?:            string;
  nombre:         string;
  descripcion:    string;
  calorias:       string;
  hdc:            string;
  lipidos:        string;
  proteinas:      string;
  imagen_url?:    string;
  fecha_creacion: Date;
  estado?:        boolean;
}
