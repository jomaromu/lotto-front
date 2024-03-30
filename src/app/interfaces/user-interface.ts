import { RoleDB } from "./role-interface";

export interface User {
  ok: boolean;
  mensaje: string;
  err: any;
  userDB: userDB;
  usersDB: Array<userDB>;
}

export interface userDB {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  estado: boolean;
  role: RoleDB;
  avatar?: string;
  password?: string;
  _id?: any;
}
