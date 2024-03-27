export interface Role {
  ok: boolean;
  mensaje: string;
  err: any;
  roleDB: RoleDB;
  rolesDB: Array<RoleDB>;
}

export interface RoleDB {
  nombre: string;
  estado: boolean;
  vendedor: boolean;
  restricciones: Restricciones;
  _id?: any;
}

export interface Restricciones {
  sidebar: {
    dashboard: boolean;
    listas: boolean;
    matrices: boolean;
    usuarios: boolean;
    roles: boolean;
    productos: boolean;
  };
  listas: {
    verPropias: boolean;
    verFiltros: boolean;
    crearListas: boolean;
    verListas: boolean;
    eliminarListas: boolean;
  };
}
