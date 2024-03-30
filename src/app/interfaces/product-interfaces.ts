export interface Product {
    ok: boolean;
    mensaje: string;
    err: any;
    productDB: productDB;
    productsDB: Array<productDB>;
  }
  
  export interface productDB {
    nombre: string;
    precio: number;
    estado: boolean;
    digitos: number;
    _id?: any;
  }
  